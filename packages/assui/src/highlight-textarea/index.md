---
title: highlight-textarea
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---

# HighlightTextarea 可高亮的文本输入框

## 1. 代码演示

### 1.1. 高亮固定string

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/String.jsx" />

### 1.2. 高亮固定RegExp配置的字符串

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/RegExp.jsx" />

### 1.3. 高级固定长度区间的字符串

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Range.jsx" />

### 1.4. 同时高亮固定字符串、正则匹配、固定区间的字符串
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Things.jsx" />

### 1.5. 自定义函数
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Function.jsx" />

### 1.6. 自定义高亮字符串的class
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/SettingClassName.jsx" />

### 1.7. 自定义插入功能

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Insert.jsx" />

## API

| 属性名            | 描述                  | 类型   | 默认值 |
| ----------------- | --------------------- | ------ | ------ |
| prefixCls         | `textrea` class的前缀 | string | `ant`  |
| className         | 组件样式类            | string | -      |
| textAreaClassName | textArea样式类        | string | -      |
| onChange     | 输入框内容变化时的回调	 | `(value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void`    | -   |
| highlight     | 高亮的条件 | `string \| number[] \| RegExp \| (input: (string)) => string \| {highlight: HighlightInstanceType, className?: string}[]` | - |
