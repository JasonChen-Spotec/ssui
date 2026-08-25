/**
 * const-function-padding & import-style-order
 *
 * 检查与修复规则：
 *   1. 样式导入置底：
 *      所有的 `.less` / `.css` / `.scss` / `.sass` / `.styl` 等样式文件 import 语句，
 *      必须放在所有非样式 import 语句的最下方。
 *
 *   2. 函数声明 —— `const fn = () => {}` / `const fn = function () {}` / `function fn() {}`
 *      上下方必须至少空一行（多余的空行由 Biome formatter 压成一行）。
 *
 *   3. 副作用 hook 调用 —— useMount / useEffect / useUpdateEffect / useUnmount
 *      上下方恰好一个空行：不空行要补，空两行以上要删到只剩一行。
 *
 * 用法：
 *   node buildITools/constFunctionPadding.js                 # 检查 src
 *   node buildITools/constFunctionPadding.js --fix           # 检查并自动修复
 *   node buildITools/constFunctionPadding.js a.tsx b.ts      # 只检查指定文件（lint-staged）
 */

const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('@babel/parser');

const ROOT = path.resolve(__dirname, '..');
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];
const FUNCTION_LABEL = '函数声明';
/** 这些 hook 的调用语句上下方也强制空一行 */
const PADDED_HOOKS = new Set(['useMount', 'useEffect', 'useUpdateEffect', 'useUnmount']);
/** 样式文件后缀名识别正则 */
const STYLE_EXT_REG = /\.(less|css|scss|sass|styl)$/;
/** 遍历 AST 时要跳过的非子节点字段 */
const NON_NODE_KEYS = new Set([
  'loc',
  'extra',
  'comments',
  'tokens',
  'leadingComments',
  'trailingComments',
  'innerComments',
]);

const globToRegExpSource = (glob) => {
  return glob.replace(/\*\*\/|\*\*|\*|\?|[.+^${}()|[\]\\]/g, (token) => {
    switch (token) {
      case '**/':
        return '(?:[^/]*/)*';
      case '**':
        return '.*';
      case '*':
        return '[^/]*';
      case '?':
        return '[^/]';
      default:
        return `\\${token}`;
    }
  });
};

/** 复用 biome.json 里的 `!xxx` 排除项，避免两处配置各自漂移 */
const buildIgnoreMatchers = () => {
  let includes = [];

  try {
    const biomeConfig = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'biome.json'), 'utf8'),
    );

    includes = biomeConfig.files?.includes || [];
  } catch {
    return [];
  }

  return includes
    .filter((pattern) => pattern.startsWith('!'))
    .map((pattern) => new RegExp(`^${globToRegExpSource(pattern.slice(1))}(?:/|$)`));
};

const IGNORE_MATCHERS = buildIgnoreMatchers();

const toRelPath = (absPath) => path.relative(ROOT, absPath).split(path.sep).join('/');

const isIgnored = (absPath) => {
  const relPath = toRelPath(absPath);

  return IGNORE_MATCHERS.some((matcher) => matcher.test(relPath));
};

const collectFiles = (target, out) => {
  if (isIgnored(target)) {
    return out;
  }

  if (fs.statSync(target).isFile()) {
    if (EXTENSIONS.includes(path.extname(target))) {
      out.push(target);
    }

    return out;
  }

  for (const entry of fs.readdirSync(target)) {
    collectFiles(path.join(target, entry), out);
  }

  return out;
};

const parseFile = (filePath, text) => {
  const ext = path.extname(filePath);
  const plugins = ['decorators-legacy'];

  if (ext === '.ts' || ext === '.tsx') {
    plugins.push('typescript');
  }

  if (ext !== '.ts') {
    plugins.push('jsx');
  }

  return parse(text, {
    plugins,
    sourceType: 'unambiguous',
    allowReturnOutsideFunction: true,
    errorRecovery: true,
  });
};

/** 判断节点是否为样式文件的 import (例如: import './index.less') */
const isStyleImport = (node) => {
  return (
    node.type === 'ImportDeclaration' &&
    node.specifiers.length === 0 &&
    typeof node.source?.value === 'string' &&
    STYLE_EXT_REG.test(node.source.value)
  );
};

/** `export const fn = ...` 在 babel 里是 ExportNamedDeclaration 包一层，判定要看里面 */
const unwrapExport = (node) => {
  const isExport =
    node.type === 'ExportNamedDeclaration' || node.type === 'ExportDefaultDeclaration';

  return isExport && node.declaration ? node.declaration : node;
};

/** `const a = () => {}` / `const a = function () {}` */
const isConstFunctionStatement = (node) => {
  if (node.type !== 'VariableDeclaration' || node.kind !== 'const') {
    return false;
  }

  if (node.declarations.length === 0) {
    return false;
  }

  return node.declarations.every(({ init }) => {
    return (
      !!init &&
      (init.type === 'ArrowFunctionExpression' || init.type === 'FunctionExpression')
    );
  });
};

/** `useEffect(...)` / `React.useEffect(...)` 这类调用语句，返回 hook 名 */
const getPaddedHookName = (node) => {
  if (node.type !== 'ExpressionStatement' || node.expression.type !== 'CallExpression') {
    return undefined;
  }

  const { callee } = node.expression;
  const name =
    callee.type === 'Identifier'
      ? callee.name
      : callee.type === 'MemberExpression' && callee.property.type === 'Identifier'
        ? callee.property.name
        : undefined;

  return name && PADDED_HOOKS.has(name) ? name : undefined;
};

const paddedLabelOf = (statement) => {
  const node = unwrapExport(statement);

  if (isConstFunctionStatement(node) || node.type === 'FunctionDeclaration') {
    return FUNCTION_LABEL;
  }

  const hookName = getPaddedHookName(node);

  return hookName ? `${hookName} 调用` : undefined;
};

const hookLabelOf = (statement) => {
  const hookName = getPaddedHookName(unwrapExport(statement));

  return hookName ? `${hookName} 调用` : undefined;
};

const getStatements = (node) => {
  switch (node.type) {
    case 'Program':
    case 'BlockStatement':
    case 'StaticBlock':
    case 'TSModuleBlock':
      return node.body;
    case 'SwitchCase':
      return node.consequent;
    default:
      return undefined;
  }
};

const createLineHelpers = (text) => {
  const lineStarts = [0, 0];

  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '\n') {
      lineStarts.push(index + 1);
    }
  }

  const lineTextOf = (line) => {
    const start = lineStarts[line];
    const end = line + 1 < lineStarts.length ? lineStarts[line + 1] : text.length;

    return text.slice(start, end);
  };

  const isBlankLine = (line) => lineTextOf(line).trim() === '';

  const indentOf = (line) => {
    const lineText = lineTextOf(line);

    return lineText.length - lineText.trimStart().length;
  };

  const ownsItsLine = ({ line, column }) =>
    lineTextOf(line).slice(0, column).trim() === '';

  return { lineStarts, isBlankLine, indentOf, ownsItsLine };
};

const getAnchorLine = (node, { ownsItsLine }) => {
  const comments = node.leadingComments || [];

  let anchorLine = node.loc.start.line;

  for (let index = comments.length - 1; index >= 0; index -= 1) {
    const comment = comments[index];

    if (comment.loc.end.line !== anchorLine - 1 || !ownsItsLine(comment.loc.start)) {
      break;
    }

    anchorLine = comment.loc.start.line;
  }

  return anchorLine;
};

const missingMessageOf = (prevLabel, nextLabel) => {
  if (prevLabel === FUNCTION_LABEL && nextLabel === FUNCTION_LABEL) {
    return `两个${FUNCTION_LABEL}之间必须空一行`;
  }

  return nextLabel ? `${nextLabel}上方必须空一行` : `${prevLabel}下方必须空一行`;
};

const extraMessageOf = (prevHook, nextHook) => {
  return nextHook ? `${nextHook}上方只能空一行` : `${prevHook}下方只能空一行`;
};

const findViolations = (ast, text) => {
  const helpers = createLineHelpers(text);
  const { lineStarts, isBlankLine, indentOf } = helpers;
  const violations = [];

  // ---------------------------------------------------------------------------
  // 规则 1：检查 Import 语句中的样式文件置底规则
  // ---------------------------------------------------------------------------
  const body = ast.program.body;
  const importNodes = body.filter((node) => node.type === 'ImportDeclaration');

  if (importNodes.length > 1) {
    let lastNonStyleImport = null;

    // 从后往前搜寻最后一个【非样式】import
    for (let i = importNodes.length - 1; i >= 0; i--) {
      if (!isStyleImport(importNodes[i])) {
        lastNonStyleImport = importNodes[i];
        break;
      }
    }

    if (lastNonStyleImport) {
      const insertLine = lastNonStyleImport.loc.end.line + 1;
      const insertPos =
        lineStarts[insertLine] !== undefined ? lineStarts[insertLine] : text.length;

      for (const node of importNodes) {
        // 如果样式 import 的位置在最后一个非样式 import 之前，则判定错误
        if (isStyleImport(node) && node.start < lastNonStyleImport.start) {
          const line = node.loc.start.line;
          const startOffset = lineStarts[line];
          const endLine = node.loc.end.line;
          const endOffset =
            lineStarts[endLine + 1] !== undefined ? lineStarts[endLine + 1] : text.length;

          const importText = text.slice(startOffset, endOffset);

          violations.push({
            message: `样式导入 '${node.source.value}' 必须放在所有 import 语句的最底部`,
            line,
            character: indentOf(line),
            // 将修复拆分为两个独立动作：1. 原位置删除 2. 目标位置插入
            edits: [
              { start: startOffset, end: endOffset, text: '' },
              { start: insertPos, end: insertPos, text: importText },
            ],
          });
        }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 规则 2：检查函数声明 / Hook 调用的空行间隙规则
  // ---------------------------------------------------------------------------
  const checkGap = (prev, next) => {
    const prevLabel = paddedLabelOf(prev);
    const nextLabel = paddedLabelOf(next);

    if (!prevLabel && !nextLabel) {
      return;
    }

    const prevEndLine = prev.loc.end.line;
    const anchorLine = getAnchorLine(next, helpers);
    const gapLines = [];

    for (let line = prevEndLine + 1; line < anchorLine; line += 1) {
      gapLines.push(line);
    }

    if (gapLines.length === 0) {
      violations.push({
        message: missingMessageOf(prevLabel, nextLabel),
        line: anchorLine,
        character: indentOf(anchorLine),
        edit: { start: lineStarts[anchorLine], end: lineStarts[anchorLine], text: '\n' },
      });

      return;
    }

    const prevHook = hookLabelOf(prev);
    const nextHook = hookLabelOf(next);

    if (
      gapLines.length === 1 ||
      (!prevHook && !nextHook) ||
      !gapLines.every(isBlankLine)
    ) {
      return;
    }

    const firstSurplusLine = prevEndLine + 2;

    violations.push({
      message: extraMessageOf(prevHook, nextHook),
      line: firstSurplusLine,
      character: 0,
      edit: {
        start: lineStarts[firstSurplusLine],
        end: lineStarts[anchorLine],
        text: '',
      },
    });
  };

  const walk = (node) => {
    const statements = getStatements(node);

    if (statements) {
      for (let index = 1; index < statements.length; index += 1) {
        checkGap(statements[index - 1], statements[index]);
      }
    }

    for (const key of Object.keys(node)) {
      if (NON_NODE_KEYS.has(key)) {
        continue;
      }

      const value = node[key];

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item && typeof item.type === 'string') {
            walk(item);
          }
        }
      } else if (value && typeof value.type === 'string') {
        walk(value);
      }
    }
  };

  walk(ast.program);

  // 按出现的位置先后排序
  return violations.sort((a, b) => {
    const aStart = a.edits ? a.edits[0].start : a.edit.start;
    const bStart = b.edits ? b.edits[0].start : b.edit.start;

    return aStart - bStart;
  });
};

const checkFile = (filePath, shouldFix) => {
  const text = fs.readFileSync(filePath, 'utf8');

  let ast;

  try {
    ast = parseFile(filePath, text);
  } catch {
    return { fixed: 0, remaining: [], skipped: true };
  }

  const violations = findViolations(ast, text);

  if (violations.length === 0 || !shouldFix) {
    return { fixed: 0, remaining: violations };
  }

  // 提取所有编辑动作并倒序（从后往前替换，避免影响前面的字符偏移量）
  const allEdits = violations
    .flatMap((v) => v.edits || (v.edit ? [v.edit] : []))
    .sort((a, b) => a.start - b.start);

  const fixedText = [...allEdits]
    .reverse()
    .reduce(
      (acc, edit) => `${acc.slice(0, edit.start)}${edit.text}${acc.slice(edit.end)}`,
      text,
    );

  fs.writeFileSync(filePath, fixedText);

  return { fixed: violations.length, remaining: [] };
};

const main = () => {
  const args = process.argv.slice(2);
  const shouldFix = args.includes('--fix');
  const targets = args.filter((arg) => !arg.startsWith('-'));
  const files = (targets.length > 0 ? targets : [path.join(ROOT, 'src')]).reduce(
    (acc, target) => {
      const absTarget = path.resolve(process.cwd(), target);

      return fs.existsSync(absTarget) ? collectFiles(absTarget, acc) : acc;
    },
    [],
  );

  let fixedCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (const filePath of files) {
    const { fixed, remaining, skipped } = checkFile(filePath, shouldFix);

    fixedCount += fixed;
    skippedCount += skipped ? 1 : 0;

    for (const { message, line, character } of remaining) {
      errorCount += 1;
      console.log(`${toRelPath(filePath)}:${line}:${character + 1}  ${message}`);
    }
  }

  const scope = `共检查 ${files.length} 个文件${
    skippedCount > 0 ? `，${skippedCount} 个解析失败已跳过` : ''
  }`;

  if (shouldFix) {
    console.log(`const-function-padding: 已修复 ${fixedCount} 处（${scope}）`);

    return;
  }

  if (errorCount > 0) {
    console.log(
      `\nconst-function-padding: ${errorCount} 处问题，运行 yarn lint:padding:fix 自动修复`,
    );
    process.exitCode = 1;

    return;
  }

  console.log(`const-function-padding: 通过（${scope}）`);
};

main();
