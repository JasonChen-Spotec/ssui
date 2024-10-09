---
mobile: false
title: KeepTab
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
  order: 2
---

# KeepTab 持久化标签页
选项卡切换组件，刷新页面后保持最后一次的选项

## 1. 代码演示

### 1.1. 非受控

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Base.jsx" />

### 1.1. 受控

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Control.jsx" />


### 1.2. TabPane显示count

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Count.jsx" />


关于`Badge`的更多属性请参考 [antd Badge](https://ant.design/components/badge-cn/)


## Tabs.TabPane
| 属性名      | 描述                                            | 类型      | 默认值 |
| ----------- | ----------------------------------------------- | --------- | ------ |
| closeIcon   | 自定义关闭图标，`在 type="editable-card"`时有效 | ReactNode | -      |
| forceRender | 被隐藏时是否渲染 DOM 结构                       | boolean   | false  |
| key         | 对应 activeKey                                  | string    | -      |
| tab         | 选项卡头显示文字                                | ReactNode | -      |
| count       | 展示的数字(Badge组件的count 属性)               | ReactNode | -      |

关于`Tabs`与`Tabs.TabPane`更多属性请参考 [antd Tabs](https://ant.design/components/tabs-cn/)与[rc-tabs](https://www.npmjs.com/package/rc-tabs)
