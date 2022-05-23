---
mobile: false
title: LabelTextArea
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---

# LabelTextArea

输入 LabelTextArea 组件 不允许value开头输入空格

## 1. 代码演示

### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" />

## API
| 属性名    | 描述       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 输入框内容 | `any`                       | -      |
| formatter | 指定输入框展示值的格式   | `(value: string) => string` | -      |
| onChange | 变化回调   | `(value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void` | -      |
