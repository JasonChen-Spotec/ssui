---
mobile: false
title: SortableHoc
nav:
  title: assui
  path: /assui
group:
  title: 反馈
  path: /components/feedback
---

# SortableHoc 拖拽

## React 19 适配

`sortableHoc` 使用兼容 React 19 的 `@lumel/react-sortable-hoc`，保留 `sortableContainer`、`sortableElement`、`sortableHandle` 和 `arrayMove` 接口。

React 19 移除了 `findDOMNode`。容器、条目和拖拽手柄都需要把 HOC 提供的 `ref` 传给对应的真实 DOM 元素；旧的函数组件需要按下面方式适配。不要给 DOM 再增加包裹层，以免改变列表或网格布局。

```tsx | pure
const SortableItem = sortableHoc.sortableElement(
  React.forwardRef<HTMLDivElement, { value: string }>(({ value }, ref) => (
    <div ref={ref}>{value}</div>
  )),
);

const SortableList = sortableHoc.sortableContainer(
  React.forwardRef<HTMLDivElement, { items: string[] }>(({ items }, ref) => (
    <div ref={ref}>
      {items.map((value, index) => (
        <SortableItem key={value} index={index} value={value} />
      ))}
    </div>
  )),
);
```

使用自定义拖拽手柄时，同样用 `React.forwardRef` 把 `ref` 交给手柄 DOM。旧类组件也应改为以上转发 DOM ref 的形式；HOC 获取的是 DOM 节点，不能传入类组件实例。

## 1. 代码演示

### 1.1. 基本应用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/VerticalListBase/index.jsx" ></code>

## 2. Grid
### 2.1. 基本应用
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Grid/Base.jsx" ></code>

### 2.2. 第一个总是变大
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Grid/LargeFirstItem.jsx" ></code>

## 3. 使用手柄拖拽
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/DragHandle/index.jsx" ></code>


## 4. API
| 属性名                            | 描述                              | 类型                 | 默认值                       |
| --------------------------------- | --------------------------------- | -------------------- | ---------------------------- |
| axis                              | 条目可以拖动的方向                | `'x' \| 'y' \| 'xy'` | y                            |
| lockAxis                          | 锁住水平或者垂直方向的拖动        | `'x' \| 'y'`         | -                            |
| helperClass                       | 自定义拖动容器类名                | string               | -                            |
| transitionDuration                | 拖动容器是过渡动画时间            | number               | 300                          |
| keyboardSortingTransitionDuration | 键盘拖动时的过渡动画              | number               | 默认为transitionDuration的值 |
| pressDelay                        | 触发拖动延时                      | number               | 0                            |
| pressThreshold                    | 忽略拖动的距离                    | number               | 0                            |
| distance                          | 按下拖动多少距离后开始挪动        | number               | 0                            |
| onSortStart                 | 开始拖动回调            | ({node, index, collection, isKeySorting}, e)=>void | - |
| onSortMove                        | 拖动中回调 |(event)=>void| -                            |
| onSortOver                        | 拖动结束回调 |({node, index, collection, isKeySorting}, e)=>void | -                            |
| onSortEnd                         | 排序结束回调 |{node, index, collection, isKeySorting}, e)=>void| -                            |
| useDragHandle                     | 如果使用`SortableHandle` HOC 设置为`true` | boolean            | false                           |
| useWindowAsScrollContainer        | 已window为容器 | boolean            | false                           |
| hideSortableGhost                 | 是否隐藏原拖动的元素 | boolean            | true                           |
| lockToContainerEdges              | 锁定父元素的移动 | boolean            | false                           |
| helperContainer                   | cloned sortable 元素插入的容器 | document.body            | -                            |
| disableAutoscroll                 | 禁止拖动时候窗口滚动| boolean            | false                           |


> 兼容版本与迁移说明：[@lumel/react-sortable-hoc](https://www.npmjs.com/package/@lumel/react-sortable-hoc)
