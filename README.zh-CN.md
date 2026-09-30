## 轻松上手

```bash
// 安装依赖
npm i assui --save
```

## Ant Design 6

本分支使用 `antd@^6.6.5`、React 18 和 React DOM 18。升级业务项目时应同时更新 antd 与 assui；旧版 assui 的 antd 4 peer 范围不兼容本分支。正式发布应使用新的主版本号。

```bash
yarn add antd@^6.6.5 react@18.3.1 react-dom@18.3.1
```

- 移除业务构建中针对 `antd` 的 `babel-plugin-import` 配置，以及 `antd/dist/antd.css`、`antd/dist/antd.less` 和旧的 `antd/lib/*/style` 导入。assui 自有 `style` 入口继续保留。
- antd 组件会自动加载样式。如需全局基础样式，在应用入口引入 `antd/dist/reset.css`。antd 组件主题通过 `ConfigProvider theme` 设置；assui 的 `ConfigProvider` 仍负责自有文案。原生 assui 控件在 antd CSS 变量作用域外使用原有样式回退值，不会自动获得 antd 的动态主题。
- `LabelDatePicker`、`LabelRangePicker` 和 `LabelCustomizeRangePicker` 继续接收和返回 Moment。antd 原生 `DatePicker` 默认使用 Day.js，两类组件的日期值不要混用。
- 自定义覆盖 `.ant-*` 内部层级的业务样式需要重新验证，尤其是 Select、TreeSelect、AutoComplete 和 Progress。优先使用 antd 的 `styles` / `classNames` 和主题 token。
- 浏览器需要支持现代 CSS 特性与 CSS 变量。

本仓库沿用 Lerna / Yarn 安装流程：

```bash
yarn install
yarn bootstrap
yarn build
yarn tsc
yarn test --runInBand
yarn dbuild
```
