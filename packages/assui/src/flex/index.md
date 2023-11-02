---
mobile: false
title: Flex
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
  order: 2
---

# Flex
弹性布局

## 1. 代码演示

### 1.1. basic

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/basic.tsx" />

### 1.1. wrap

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/wrap.tsx" />


## Flex

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean | `false` |
| wrap | 设置元素单行显示还是多行显示 | 参考 [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) | nowrap |  |
| justify | 设置元素在主轴方向上的对齐方式 | 参考 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | normal |  |
| align | 设置元素在交叉轴方向上的对齐方式 | 参考 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) | normal |  |
| flex | flex CSS 简写属性 | 参考 [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) | normal |  |
| gap | 设置网格之间的间隙 | `small` \| `middle` \| `large` \| string \| number | - |  |
| component | 自定义元素类型 | React.ComponentType | `div` |  |

关于`Flex`更多属性请参考 [antd Flex](https://ant.design/components/flex-cn)
