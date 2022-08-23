---
mobile: false
title: ASelect
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---
# ASelect
可以自定义value render的select
##  1. 代码演示
### 1.1. 基础用法

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" />

### 1.3. API
| 属性名      | 描述            | 类型                             | 默认值 |
| ----------- | --------------- | -------------------------------- | ------ |
| valueRender | 自定义value展示 | (value: any) => React.ReactNode; | -      |
更多接口参考 https://ant.design/components/select-cn/
