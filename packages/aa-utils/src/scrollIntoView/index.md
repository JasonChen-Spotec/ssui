---
mobile: false
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

## 基本使用
检查目标元素的可见性，如果小于100%,则会滚动

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Base.jsx" />

## 滚动对齐
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Alignment.jsx" />

## 自定义过渡效果
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/CustomTransition/index.jsx" />


## api
`scrollIntoView(target, [options])`

### options(常用属性)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| behavior | 过渡的方式 | `'auto' \| 'smooth' \| Function` | - |
| block | 控制 y 轴上的滚动位置 | `'start' \| 'center' \| 'end' \| 'nearest'` | center |
| inline | 是否与左侧边缘对齐 | `number` | center |
| scrollMode | 滚动模式 |  `'always' \| 'if-needed'` | always |
| boundary | 默认没有边界。在滚动时会检查所有父元素 | number | - |

> 更多接口请看[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)

### boundary
具体作用
1. 防止浏览器窗口滚动。
2. 在不滚动容器元素的情况下，将元素滚动到列表中的视图中。
```js
const actions = computeScrollIntoView(target, {
  boundary: parent => {
    // By default `overflow: hidden` elements are allowed, only `overflow: visible | clip` is skipped as
    // this is required by the CSSOM spec
    if (getComputedStyle(parent).overflow === 'hidden') {
      return false;
    }

    return true;
  },
});
```
