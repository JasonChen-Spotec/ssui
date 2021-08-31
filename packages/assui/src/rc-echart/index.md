---
title: RcEchart
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
  order: 2
---

# RcEchart(基于echart)

## 1. 代码演示
### 1.1. 使用默认全量导入的echarts
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 1.2. 按需引入(js)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/MinimalOption.jsx" />

### 1.3. 按需引入(ts)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/MinimalOptionTs.tsx" />

### API

| 属性名     | 描述                                               | 类型    | 默认值                        |
| ---------- | -------------------------------------------------- | ------- | ----------------------------- |
| echarts    | 原生echarts对象                                    | echart  | core是空， index是全量echarts |
| option     | `echartsInstance.setOption` 第一个参数(option)     | Object  | -                             |
| notMerge   | `echartsInstance.setOption` 第二个参数(notMerge)   | Boolean | `false`                       |
| lazyUpdate | `echartsInstance.setOption` 第三个参数(lazyUpdate) | Boolean | `false`                       |
| onEvents   | `echartsInstance.on` 需要监听的事件函数            | Object  | {}                            |
| className  | css class name                                     | String  | -                             |
| style      | 内联样式                                           | Object  | -                             |


