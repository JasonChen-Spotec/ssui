---
mobile: false
title: SignaturePad
nav:
  title: assui
  path: /assui
group:
  title: 数据录入
  path: /components/input
---
# SignaturePad
基于[signature_pad](https://github.com/szimek/signature_pad?tab=readme-ov-file)的手写签名组件，支持撤销、保存、清除等功能。

##  1. 代码演示
### 1.1. 基础用法

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" ></code>

### 1.2. 安装依赖

#### 安装核心依赖
npm install signature_pad
### 或
yarn add signature_pad

### 1.3. SignaturePad Props
| 属性名           | 描述            | 类型           | 默认值 |
| ---------------- | --------------- | -------------- | ------ |
| width            | 画布宽度         | number          | 500 |
| height           | 画布高度        | number         | 300      |
| defaultText      | 默认背景文字 | string         | "请在此处签名"      |
| penColor      | 画笔颜色 | string         | "black"      |
| backgroundColor      | 背景颜色 | string         | "white"    |
| backgroundTextColor      | 背景文字颜色 | string         | "#ccc"    |
| backgroundTextSize      | 背景文字大小 | string         | "30px"    |
| className      | 自定义css类名 | string         | ""  |
| onBegin      |  签名开始回调 | () => void         | -  |
| onEnd      |  签名结束回调 | () => void         | -  |

### 1.4. SignaturePadRef 方法
| 方法名           | 描述            | 返回值 |
| ---------------- | --------------- | ------ |
| undo             | 撤销            | boolean      |
| clearSignature            | 清除            | void     |
| saveSignature             | 保存            | string / null      |
| isEmpty        | 检查画布是否为空 | boolean     |








 