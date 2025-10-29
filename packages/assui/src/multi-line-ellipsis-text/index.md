---
mobile: false
title: MultiLineEllipsisText
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
---


# MultiLineEllipsisText

> 多行溢出省略...点击省略文案可通过弹窗或浮窗展示完整内容

## 1. 代码演示

### 1.1. 基础使用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx"></code>

## API

| 属性名 | 描述 | 类型 | 默认值 |
| ------| --- | ---- | ----- |
| text | 需要处理的文案 | `string` | - |
| lines | 展示的行数 | `number` | 3 |
| className | 文案的样式 | `string` | - |
| tipType | 展示完整内容的交互类型，不传则不提示 | `'modal' | 'tooltip'` | - |
| buttonModalProps | 弹窗的属性，仅tipType=modal时生效 | `Omit<ButtonModalProps, 'children'> & {children?: ButtonModalProps['children']}` | - |
| tooltipProps | 浮窗的属性，仅tipType=tooltip时生效 | `Omit<TooltipProps, 'title'>` | - |
| onEllipsisChange | 省略的回调 | `(isEllipsis: boolean) => void` | - |
| onClick | 点击的回调 | `()=> void` | - |

更多属性请参考 [assuis button-modal](http://192.168.0.129:8000/assuis/button-modal#api) 和 [antd tooltip](https://4x.ant.design/components/tooltip-cn/#API)
