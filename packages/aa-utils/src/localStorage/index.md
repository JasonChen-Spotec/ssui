---
title: localStorage
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# 存储
封装`window.localStorage`,方便存取`string、object、array`类型数据

## 代码演示
### 1.1. 存取string
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Base.jsx" />

### 1.5. 存取 `object、array`

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Object.jsx" />


## API
| 参数      | 说明     | 类型                                                        | 默认值 |
| --------- | -------- | ----------------------------------------------------------- | ------ |
| set       | 存string | `(key: string, value: string)=> void`                       | -      |
| get       | 取string | `(key: string)=> string`                                    | -      |
| setObject | 存string | `(key: string, value: any[] | {[key: string]: any})=> void` | -      |
| getObject | 取string | `(key: string)=> any[] | {[key: string]: any}`              | -      |
