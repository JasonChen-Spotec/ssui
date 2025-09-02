---
mobile: false
title: ConditionSelect
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---

# ConditionSelect
可配置的二级动态组件选择框

## 1. 代码演示

### 1.1. 基础用法

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" ></code>

### 1.2. API

| 属性名               | 描述                                              | 类型                           | 默认值         |
| -------------------- | ------------------------------------------------- | ------------------------------ | -------------- |
| value                | value值                                           | -                              | -              |
| onChange             | value 变化时，调用此函数                             | `(value: ValueType) => void`   | -              |
| option               | 配置项                                             | `DynamicComponentType[]`   | -              | 
| id                   | Form.Item传递下来的name                             | `string`                  | -              |

