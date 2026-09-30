## 轻松上手

```bash
// 安装依赖
npm i assui --save
```

## Ant Design 6

本分支使用 `antd@^6.6.5`、React 19 和 React DOM 19。升级业务项目时应同时更新 antd 与 assui；旧版 assui 的 antd 4 peer 范围不兼容本分支。正式发布应使用新的主版本号。

```bash
yarn add antd@^6.6.5 react@19.3.0 react-dom@19.3.0
yarn add -D @types/react@^19 @types/react-dom@^19
```

- 移除业务构建中针对 `antd` 的 `babel-plugin-import` 配置，以及 `antd/dist/antd.css`、`antd/dist/antd.less` 和旧的 `antd/lib/*/style` 导入。assui 自有 `style` 入口继续保留。
- antd 组件会自动加载样式。如需全局基础样式，在应用入口引入 `antd/dist/reset.css`。antd 组件主题通过 `ConfigProvider theme` 设置；assui 的 `ConfigProvider` 仍负责自有文案。原生 assui 控件在 antd CSS 变量作用域外使用原有样式回退值，不会自动获得 antd 的动态主题。
- `LabelDatePicker`、`LabelRangePicker` 和 `LabelCustomizeRangePicker` 继续接收和返回 Moment。antd 原生 `DatePicker` 默认使用 Day.js，两类组件的日期值不要混用。
- 自定义覆盖 `.ant-*` 内部层级的业务样式需要重新验证，尤其是 Select、TreeSelect、AutoComplete 和 Progress。优先使用 antd 的 `styles` / `classNames` 和主题 token。
- 浏览器需要支持现代 CSS 特性与 CSS 变量。

## React 19 下游迁移

- 安装 `assui` 需要 Node.js 20 或更高版本，以满足新版 `react-split-pane` 的运行环境要求。本仓库构建和测试使用 Node.js 24。
- React 与 React DOM 保持相同版本，移除项目里强制锁定 React 18 类型的 `resolutions` / `overrides`。应用、组件库和测试应共享同一份 React 实例。
- 应用入口使用 `react-dom/client` 的 `createRoot` / `hydrateRoot`；卸载使用 `root.unmount()`。移除 `ReactDOM.render`、`hydrate`、`unmountComponentAtNode` 和 `findDOMNode`，以显式 DOM ref 取代节点查找。
- 使用新的 JSX 编译方式：TypeScript 配置 `jsx: "react-jsx"`，Babel 的 `@babel/preset-react` 配置 `runtime: "automatic"`。不要在业务构建中把依赖的 JSX runtime 改回旧模式。
- 自有函数组件的默认值改为参数默认值；`useRef` 显式传入初值，读取元素引用时使用 `element.props.ref`。ref 回调使用代码块，避免隐式返回赋值结果；原来写作全局 `JSX.Element` 的类型改为 `React.JSX.Element`。
- `sortableHoc` 使用支持 React 19 的实现。传给 `sortableContainer`、`sortableElement`、`sortableHandle` 的业务组件必须把收到的 `ref` 传给实际 DOM 节点；推荐 `React.forwardRef` 包装，不能只在普通组件内部截留 ref，否则拖拽无法获取节点。迁移示例见组件文档。
- `KeepTab` 显式依赖 `react-router@^5 || ^6`，消费方需要安装并使用对应版本的路由库。
- `SplitPane` 升级至官方 `react-split-pane@3.2`，保留原有 props 适配，但内部增加了容器层。业务样式如果依赖 `.SplitPane > .Pane` 这类直接子元素选择器，需要调整；`step` 的取整差异见组件文档。
- `ColorSelect` 的 `value` / `onChange` 仍使用 `{ hex, rgb }`，其中 `rgb` 为 `"r,g,b"` 字符串；`reactColorProps` 继续使用原来的 SketchPicker 属性。透明度仍由 `reactColorProps.onChangeComplete` 的完整颜色结果提供，不会新增到外层值对象。
- `ColorSelect.RcTriggerProps` 改为 `@rc-component/trigger` 的属性：`destroyPopupOnHide` 改用 `autoDestroy`，旧的弹层动画名称配置改用 `popupMotion` / `maskMotion`。已有 `popupVisible`、`popupAlign`、`getPopupContainer` 等常用配置继续保留；`renderValueNode` 返回自定义组件时，需要把 ref 透传到真实 DOM 节点。
- `amssui` 使用的 `react-vant@3.3.5` 静态 `Dialog` / `Toast` / `Notify` 方法仍依赖旧的挂载入口；业务直接调用这些第三方静态方法时需要单独迁移。本库的 `ButtonModal` 使用声明式 `Dialog`，不调用该入口。

完整变化及类型迁移见 [React 19 官方升级指南](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)。

本仓库沿用 Lerna / Yarn 安装流程：

```bash
yarn install
yarn bootstrap
yarn build
yarn tsc
yarn test --runInBand
yarn dbuild
```
