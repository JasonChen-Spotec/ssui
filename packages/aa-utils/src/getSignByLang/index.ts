import { Languages, ZH, ES, JA, FR, PT, TH, KO, MS, VI, EN, TW, AR, ID } from 'ec-common/lib/consts/langType';
export type HalfWidthSymbol =
  | ','
  | '.'
  | '?'
  | '!'
  | ';'
  | ':'
  | '('
  | ')'
  | '['
  | ']'
  | '{'
  | '}'
  | '<'
  | '>'
  | '"'
  | "'"
  | '`'
  | '~'
  | '@'
  | '#'
  | '$'
  | '%'
  | '^'
  | '&'
  | '*'
  | '_'
  | '+'
  | '-'
  | '='
  | '\\'
  | '|'
  | '/';

// 定义各语言的映射表（未定义的语言使用恒等映射）
type MappingTable = Record<HalfWidthSymbol, string>;

// 基础半角映射（EN风格）
const DEFAULT_MAPPING: MappingTable = {
  ',': ', ',
  '.': '. ',
  '?': '? ',
  '!': '! ',
  ';': '; ',
  ':': ': ',
  '(': ' (',
  ')': ') ',
  '[': ' [',
  ']': '] ',
  '{': ' {',
  '}': '} ',
  '<': '<',
  '>': '>',
  '"': '"',
  "'": "'",
  '`': '`',
  '~': '~',
  '@': '@',
  '#': '#',
  '$': '$',
  '%': '%',
  '^': '^',
  '&': '&',
  '*': '*',
  '_': '_',
  '+': '+',
  '-': '-',
  '=': '=',
  '\\': '\\',
  '|': '|',
  '/': '/',
};

// 基础全角映射（中文风格）
const ZH_MAPPING: MappingTable = {
  ',': '，',
  '.': '。',
  '?': '？',
  '!': '！',
  ';': '；',
  ':': '：',
  '(': '（',
  ')': '）',
  '[': '［',
  ']': '］',
  '{': '｛',
  '}': '｝',
  '<': '＜',
  '>': '＞',
  '"': '＂',
  "'": '＇',
  '`': '｀',
  '~': '～',
  '@': '＠',
  '#': '＃',
  '$': '＄',
  '%': '％',
  '^': '＾',
  '&': '＆',
  '*': '＊',
  '_': '＿',
  '+': '＋',
  '-': '－',
  '=': '＝',
  '\\': '＼',
  '|': '｜',
  '/': '／',
};

// 日语映射（基于中文，但逗号改为顿号）
const JA_MAPPING: MappingTable = {
  ...ZH_MAPPING,
  ',': '、', // 日文逗号使用“読点”
};

// 法语映射（某些符号（如冒号、分号、感叹号和问号）前需加不换行空格 &nbsp;）
const FR_MAPPING: MappingTable = {
  ...DEFAULT_MAPPING,
  '?': ' ? ',
  '!': ' ! ',
  ';': ' ; ',
  ':': ' : ',
};

/**
 * 半角标点符号转本地化符号
 * @param lang 语言类型 (zh-CN, zh-TW, ja, ko 等)
 * @param symbol 仅允许半角符号的字符串 (ASCII 可见字符)
 * @returns 转换后的符号字符串
 * @throws 当 symbol 包含非半角字符时抛出错误
 */
function getSignByLang(lang: Languages, symbol: HalfWidthSymbol): string {
  // 1. 校验 symbol 是否为纯半角字符 (ASCII 32-126 可见字符)
  const halfWidthRegex = /^[\x20-\x7E]*$/;
  if (!halfWidthRegex.test(symbol)) {
    throw new Error('参数 "symbol" 只能是半角符号（ASCII 可见字符）');
  }

  let mapping: MappingTable;
  switch (lang) {
    case ZH: // 简体中文
    case TW: // 繁体中文
    case KO: // 韩语（标点习惯与中文类似）
      mapping = ZH_MAPPING;
      break;
    case JA: // 日语
      mapping = JA_MAPPING;
      break;
    case FR: // 法语
      mapping = FR_MAPPING;
      break;
    case EN: // 英语
    case AR: // 阿拉伯语
    case ES: // 西班牙语
    case ID: // 印度尼西亚语
    case MS: // 马来西亚语
    case PT: // 葡萄牙语
    case TH: // 泰语
    case VI: // 越南语
      mapping = DEFAULT_MAPPING;
      break;
    default:
      mapping = DEFAULT_MAPPING;
  }

  // 遍历每个字符进行映射转换
  return mapping[symbol];
}

export default getSignByLang;
