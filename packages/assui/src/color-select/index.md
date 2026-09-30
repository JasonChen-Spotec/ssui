---
mobile: false
title: ColorSelect
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
  order: 1
---

# ColorSelect
基于 [react-color](https://github.com/casesandberg/react-color) 和 [@rc-component/trigger](https://github.com/react-component/trigger)。

`value` / `onChange` 使用 `{ hex, rgb }`，`rgb` 是 `"r,g,b"` 字符串。需要透明度时，通过 `reactColorProps.onChangeComplete` 获取完整颜色结果。

`RcTriggerProps` 使用 `@rc-component/trigger` 的属性。旧的 `destroyPopupOnHide` 改用 `autoDestroy`，动画配置使用 `popupMotion` / `maskMotion`。`renderValueNode` 返回自定义组件时，需要将事件和 ref 透传到实际 DOM 节点。

## 1. 代码演示

### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" ></code>

 
