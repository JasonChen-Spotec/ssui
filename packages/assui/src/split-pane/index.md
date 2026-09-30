---
mobile: false
title: SplitPane
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
---

# SplitPane(分割面板)
水平或者垂直分割面板。支持 React 19，保留 `assui` 的双窗口 API，无需自行包裹 `Pane`。

## 1. 代码演示
### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Demo1.tsx" ></code>

### 1.2. 多窗口水平分割

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Demo2.jsx" ></code>


`split="vertical"` 表示左右排列，`split="horizontal"` 表示上下排列。`primary` 指定 `size`、`defaultSize`、`minSize`、`maxSize` 和回调数值对应的窗口，默认为第一个。百分比尺寸按整个容器计算；负数 `maxSize` 表示为另一个窗口预留空间，例如 `maxSize={-100}` 至少预留 100px。

`size` 的值变化时会同步窗口尺寸，拖动仍会更新内部尺寸并触发 `onChange`，与旧版行为一致；要固定尺寸并禁止手动调整，请同时设置 `allowResize={false}`。`defaultSize` 设置初始尺寸。保留现有的 `SplitPane`、`Pane1`、`Pane2` 和 `Resizer` 样式类，通过组件的 style 入口引入样式即可。

分隔条支持鼠标、触摸和方向键操作。`step` 对拖动和键盘操作均生效，拖动位置按最接近的步进值取整；`allowResize={false}` 同时禁用拖动和键盘调整。

> 更多详情[react-split-pane](https://github.com/tomkp/react-split-pane)

