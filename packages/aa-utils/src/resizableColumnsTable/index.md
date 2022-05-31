---
mobile: false
title: resizableColumnsTable
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# resizableColumnsTable
table 拖动 工具方法

## 1. 代码演示

### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />


## API
### 使用api
```js
resizableColumnsTable(tableDom, options);
```
### options

| 属性名          | 描述                  | 类型        | 默认值 |
| --------------- | --------------------- | ----------- | ------ |
| liveDrag        | 是否实时拖动          | `boolean`   | true   |
| defaultMinWidth | 默认没列最小宽度      | `number`    | 30     |
| headerOnly      | 拖动竖线是否只有thead | `boolean`   | true   |
| disabledColumns | 不能拖动的th          | `number[]`  | -      |
| onResizing      | 正在拖动callback      | `()=> void` | -      |
| onResized       | 拖动结束callback      | `()=> void` | -      |
