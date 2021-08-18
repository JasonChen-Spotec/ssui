---
title: scrollIntoView
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---
# domScrollIntoView

滚动容器使容器内的节点在可视范围

## 使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

## api
`scrollIntoView(source, container, config)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 需求显示的节点 | `HTMLElement` | - |
| container | 容器节点 | `HTMLElement` | - |
| alignWithLeft | 是否与左侧边缘对齐 | `number` | - |
| alignWithTop | - | 是否与顶侧边缘对齐 | `number` |
| offsetTop | - | number | - |
| offsetLeft | - | number | - |
| offsetBottom | - | number | - |
| offsetRight | - | number | - |
| allowHorizontalScroll | 是否允许使用水平滚动操作的容器 | `boolean` | - |
| onlyScrollIfNeeded | 当目标节点可见时是否会滚动容器 | `boolean` | - |
