---
mobile: false
title: TextArea
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---

# TextArea 多行的文本输入组件件。
基于`antd Input.TextArea` 不允许value开头输入空格


## 代码演示
### 基本应用
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Index.jsx" />

### Formatter
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Formatter.jsx" />

## API
| 属性名    | 描述       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 输入框内容 | `any`                       | -      |
| formatter | 指定输入框展示值的格式   | `(value: string) => string` | -      |
| onChange | 变化回调   | `(value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void` | -      |
>更多api [Input.TextArea](https://ant.design/components/input-cn/)
