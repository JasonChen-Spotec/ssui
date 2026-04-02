---
mobile: false
title: getSignByLang
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# getSignByLang
半角标点符号转本地化符号，根据不同语言习惯转换标点符号


## 1. 代码演示

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" ></code>

## API

```ts
type HalfWidthSymbol =
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

getSignByLang(lang: Languages, symbol: HalfWidthSymbol): string;
```

### 参数说明

| 参数   | 说明                     | 类型              | 默认值 |
| ------ |------------------------| ----------------- | ------ |
| lang   | 语言类型 ec-common中的定义，路径：ec-common/lib/consts/langType | Languages     | -      |
| symbol | 半角标点符号（单个字符）           | HalfWidthSymbol   | -      |

### 返回值

转换后的本地化标点符号字符串

### 支持的语言

- **中文系**：`zh-CN`（简体中文）、`zh-TW`（繁体中文）→ 使用全角标点
- **日语**：`ja` → 使用全角标点，逗号改为顿号（、）
- **韩语**：`ko` → 使用全角标点
- **法语**：`fr` → 在半角标点基础的上，冒号、分号、感叹号、问号前会加不换行空格（&nbsp;）
- **其他语言**：`en-US`, `ar`, `es`, `id`, `ms-MY`, `pt`, `th`, `vi` → 保持半角标点不变

### 示例

```ts
// 中文标点转换
getSignByLang('zh-CN', ',') // '，'
getSignByLang('zh-CN', '.') // '。'
getSignByLang('zh-CN', '?') // '？'
getSignByLang('zh-CN', '!') // '！'
getSignByLang('zh-CN', '(') // '（'
getSignByLang('zh-CN', ')') // '）'
getSignByLang('zh-CN', '"') // '＂'
getSignByLang('zh-CN', "'") // '＇'

// 日语标点（逗号变为顿号）
getSignByLang('ja', ',') // '、'
getSignByLang('ja', '.') // '。'
getSignByLang('ja', '?') // '？'

// 英文标点（保持不变）
getSignByLang('en-US', ',') // ', '
getSignByLang('en-US', '.') // '. '
getSignByLang('en-US', '?') // '? '
getSignByLang('en-US', '!') // '! '
getSignByLang('en-US', ':') // ': '
getSignByLang('en-US', ';') // '; '

// 法文标点（冒号、分号、感叹号、问号前加不换行空格）
getSignByLang('fr', ',') // ', '
getSignByLang('fr', '.') // '. '
getSignByLang('fr', '?') // ' ? '
getSignByLang('fr', '!') // ' ! '
getSignByLang('fr', ':') // ' : '
getSignByLang('fr', ';') // ' ; '

// 繁体中文（同简体）
getSignByLang('zh-TW', ',') // '，'
getSignByLang('zh-TW', '.') // '。'
getSignByLang('zh-TW', '?') // '？'
getSignByLang('zh-TW', '!') // '！'

// 韩语（同中文）
getSignByLang('ko', ',') // '，'
getSignByLang('ko', '.') // '。'
getSignByLang('ko', '?') // '？'
getSignByLang('ko', '!') // '！'
```

### 注意事项

- 只接受单个半角标点符号作为输入
- 不支持已全角的标点符号
- 未定义的语言将使用默认的半角标点
