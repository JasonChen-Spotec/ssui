---
mobile: false
title: downloadFile
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# downloadFile
用于处理日期常用格式化

## 1. 代码演示
### 1.1. 格式化

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />


## 2. API
`downloadFile(url, options)`

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| url  | 文件地址 | `string` | -      |
| options  | 文件地址 | `string` | -      |

### options
```ts
export interface UploadProgressEvent extends Partial<ProgressEvent> {
  percent?: number;
}
```

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| fileName  | 文件名字 | `string` | -      |
| onProgress  | 下载进度 | `(e: UploadProgressEvent) => void;` | -      |

