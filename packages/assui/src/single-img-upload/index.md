---
mobile: false
title: SingleImgUpload
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---
# SingleImgUpload 上传单个图片

##  1. 代码演示
### 1.1. 基础用法

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 1.2. 通过value回填已上传的图片

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/value.jsx" />

### 1.3. disabled

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/disabled.jsx" />

### 1.3. API
| 属性名           | 描述            | 类型           | 默认值 |
| ---------------- | --------------- | -------------- | ------ |
| value            |                 | 上传组件的内容 | string | - |
| wrapperClassName | 组件容器样式类  | string         | -      |
| className        | rc-upload样式类 | string         | -      |

> 详情api [rc-upload](https://github.com/react-component/upload)

### 1.4. rc-upload props

|name|type|default| description|
|-----|---|--------|----|
|name | string | file| file param post to server |
|style | object | {}| root component inline style |
|className | string | - | root component className |
|disabled | boolean | false | whether disabled |
|component | "div"|"span" | "span"| wrap component name |
|action| string &#124; function(file): string &#124; Promise&lt;string&gt; | | form action url |
|method | string | post | request method |
|directory| boolean | false | support upload whole directory |
|data| object/function(file) | | other data object to post or a function which returns a data object(a promise object which resolve a data object) |
|headers| object | {} | http headers to post, available in modern browsers |
|accept | string | | input accept attribute |
|multiple | boolean | false | only support ie10+|
|onStart | function| | start upload file |
|onError| function| | error callback |
|onSuccess | function | | success callback |
|onProgress | function || progress callback, only for modern browsers|
|beforeUpload| function |null| before upload check, return false or a rejected Promise will stop upload, only for modern browsers|
|customRequest | function | null | provide an override for the default xhr behavior for additional customization|
|withCredentials | boolean | false | ajax upload with cookie send |
|openFileDialogOnClick | boolean | true | useful for drag only upload as it does not trigger on enter key or click event |

#### 1.4.1. onError arguments

1. `err`: request error message
2. `response`: request response, not support on iframeUpload
3. `file`: upload file

### 1.5. onSuccess arguments

1. `result`: response body
2. `file`: upload file
3. `xhr`: xhr header, only for modern browsers which support AJAX upload. since
   2.4.0


### 1.6. customRequest

Allows for advanced customization by overriding default behavior in AjaxUploader. Provide your own XMLHttpRequest calls to interface with custom backend processes or interact with AWS S3 service through the aws-sdk-js package.

customRequest callback is passed an object with:

* `onProgress: (event: { percent: number }): void`
* `onError: (event: Error, body?: Object): void`
* `onSuccess: (body: Object): void`
* `data: Object`
* `filename: String`
* `file: File`
* `withCredentials: Boolean`
* `action: String`
* `headers: Object`
