---
title: highlight-words
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
---

# highlight-words
高亮一段字符串中的关键字

## 1. 代码演示
### 1.1. 基本演示

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 1.2. Active index
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Active.jsx" />


## 2. API

| 属性名    | 描述                    | 类型          | 默认值         |
| --------- | ----------------------- | ------------- | -------------- |
| activeClassName | `activeIndex`对应元素的类名 | `string` | - |
| activeIndex | 设置主动高亮元素的索引| `number` | - |
| activeStyle | 是`activeIndex`对应的style | `object` | - |
| autoEscape | 搜索单词中在正则表达式中有意义的转义字符 | `boolean` | false |
| className | 组件类名 | `string` | - |
| caseSensitive | 是否区分大小写 | `boolean` | false |
| highlightClassName | 自定义高亮元素类名 | `string` | - |
| highlightStyle | 自定义高亮元素样式 | `object` | - |
| highlightTag | 自定义高亮元素 | `node \| function` | `mark`|
| searchWords | 需要高亮的字符 | `Array<String &#124; RegExp>` | - |
| textToHighlight | 需要处理的字符串 | `string` | - |
| unhighlightClassName | 不需要高亮值的类名 | `string` | - |
| unhighlightStyle | 不需要高亮值的样式 | `object` | - |

> 基于[react-highlight-words](https://github.com/bvaughn/react-highlight-words)与[highlight-words-core](https://www.npmjs.com/package/highlight-words-core) 更多接口查看
