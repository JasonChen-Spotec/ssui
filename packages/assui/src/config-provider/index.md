---
title: ConfigProvider
nav:
  title: assui
  path: /assui
group:
  title: 其他
  path: /components/other
  
---

# ConfigProvider

为组件提供统一的全局化配置

使用#
ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

现只支持组件国际化配置
## 1. 代码演示

### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" />


## ConfigProvider
| 属性名  |  描述  | 类型        | 默认值 |
| ------ |  ---- | ---------- | ------- |
| locale |  语言  | `en-US zh-CN`  | 'zh-CN'    |


