---
title: ButtonDrawer
nav:
  title: assui
  path: /assui
group:
  title: 反馈
  path: /components/feedback
  order: 1
---

# ButtonDrawer
点击一个按钮或者其他元素需要弹框展示或者做其他操作。

## 1. 代码演示

### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Base.jsx" />

### 1.1. Ref打开关闭

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/RefDemo.jsx" />

### 1.1. FunctionChildren打开关闭

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/FunctionDemo.jsx" />


## API

| 属性名   | 描述                                        | 类型                 | 默认值 |
| -------- | ------------------------------------------- | -------------------- | ------ |
| content  | 弹框的内容, 会content注入`drawerAction: {open, close}`的props | `React.ReactElement` | -      |
| children | 触发弹框显示的`element`                     | `React.ReactElement | (drawerAction) => React.ReactElement ` | -      |
| onOpen   | 打开时候的回调函数                          | `()=> void`          | -      |
| onClose  | 关闭时候的回调函数                          | `()=> void`          | -      |

更多属性请参考 [antd drawer](https://ant.design/components/drawer-cn/)
