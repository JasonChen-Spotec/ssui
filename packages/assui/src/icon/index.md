---
title: Icon
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components
---
## 1. 使用
使用 `webpack`，可以通过配置 [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) 来将 `svg` 图标作为 `React` 组件导入。`@svgr/webpack` 的 `options` 选项请参阅 [svgr 文档](https://github.com/smooth-code/svgr#options)。

```js
// webpack.config.js
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
}
```
## 2. 基本应用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/base.tsx" />


## 3. 双色图标
1. 使用CSS[`inherit`关键字](http://tympanus.net/codrops/css_reference/inherit)给内容添加样式
通过给svg 图形元素设置`fill= inherit` 图形元素得颜色会自动集成父级fill得颜色
1. 使用CSS的`currentColor`变量来给内容添加样式
通过给svg 图形元素设置`fill= currentColor` 图形元素得颜色会自动集成父级color得颜色
> 通过这两种技术可以给一个元素指定**`两种不同的颜色`**，而不仅是一种

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/twoColor.tsx" />


## 4. API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | ComponentType<CustomIconComponentProps\> | - |  |
| className | 设置图标的样式名 | string | - |  |
| rotate | 图标旋转角度（IE9 无效） | number | - |  |
| spin | 是否有旋转动画 | boolean | false |  |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |  |

`Icon` 中的 `component` 组件的接受的属性如下：

| 字段      | 说明                    | 类型             | 只读值         | 版本 |
| --------- | ----------------------- | ---------------- | -------------- | ---- |
| className | 计算后的 `svg` 类名     | string           | -              |      |
| fill      | `svg` 元素填充的颜色    | string           | `currentColor` |      |
| height    | `svg` 元素高度          | string \| number | `1em`          |      |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -              |      |
| width     | `svg` 元素宽度          | string \| number | `1em`          |      |

