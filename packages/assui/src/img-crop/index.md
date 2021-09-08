---
title: ImgCrop
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---
# ImgCrop 裁剪固定尺寸的图片上传

##  1. 代码演示

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />


## 2. API

| 属性名           | 描述            | 类型           | 默认值 |
| ---------------- | --------------- | -------------- | ------ |
| value            |                 | 上传组件的内容 | string | - |
| wrapperClassName | 组件容器样式类  | string         | -      |
| className        | rc-upload样式类 | string         | -      |

| 属性名        | 说明                                                   | 类型                              | 默认         |
| ------------- | ------------------------------------------------------ | --------------------------------- | ------------ |
| prefix        | antd样式前缀                                           | `string`                          | `ant`        |
| zipImg        | 裁切区域宽高，`width / height`                         | `{width: number, height: number}` | `1 / 1`      |
| aspect        | 裁切区域宽高比，`width / height`                       | `number`                          | `1 / 1`      |
| shape         | 裁切区域形状，`'rect'` 或 `'round'`                    | `string`                          | `'rect'`     |
| grid          | 显示裁切区域网格（九宫格）                             | `boolean`                         | `false`      |
| quality       | 图片质量，`0 ~ 1`                                      | `number`                          | `0.4`        |
| fillColor     | 裁切图像小于画布时的填充颜色                           | `string`                          | `'white'`    |
| zoom          | 启用图片缩放                                           | `boolean`                         | `true`       |
| rotate        | 启用图片旋转                                           | `boolean`                         | `false`      |
| minZoom       | 最小缩放倍数                                           | `number`                          | `1`          |
| maxZoom       | 最大缩放倍数                                           | `number`                          | `3`          |
| modalTitle    | 弹窗标题                                               | `string`                          | `'编辑图片'` |
| modalWidth    | 弹窗宽度，`px` 的数值或百分比                          | `number` \| `string`              | `520`        |
| modalOk       | 弹窗确定按钮文字                                       | `string`                          | -            |
| modalCancel   | 弹窗取消按钮文字                                       | `string`                          | -            |
| onModalOK     | 点击弹窗确定回调                                       | `function`                        | -            |
| onModalCancel | 点击弹窗遮罩层、右上角叉、取消的回调                   | `function`                        | -            |
| beforeCrop    | 弹窗打开前调用，若返回 `false`，弹框将不会打开         | `function`                        | -            |
| onUploadFail  | 上传失败时的回调                                       | `function`                        | -            |
| cropperProps  | [react-easy-crop] 的 props（\* [已有 props] 无法重写） | `object`                          | -            |
