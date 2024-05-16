---
mobile: false
title: ConditionSelectInput
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---

# ConditionSelectInput
联动select框(基于antd组件库的Select实现) ConditionInput基于assui组件库
## 1. 代码演示

### 1.1. 基础用法

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" />

### 1.2. API

| 属性名               | 描述                                              | 类型                           | 默认值         |
| -------------------- | ------------------------------------------------- | ------------------------------ | -------------- |
| value                | value值                                           | -                              | -              |
| hiddenInputKeys      | 不需要展示联动输入框的字段值                      | `ValueType['selectValue'][]`   | -              |
| selectProps          | 选择框props                                       | `SelectProps`                  | -              |
| conditionInputProps  | 联动inputProps                                    | `ConditionInputProps`          | -              |
| conditionSelectProps | 联动selectProps                                   | `SelectProps`                  | -              |
| onChange             | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: ValueType) => void`   | -              |
| inputType            | 输入框类型                                        | `'conditionInput' ｜ 'select'` | conditionInput |
| optionsList          | 输入框类型                                        | `{ label, value, children }[]` | []             |
| onBlur               | 失去焦点，调用此函数                              | `(value: ValueType) => void`   | -              |

