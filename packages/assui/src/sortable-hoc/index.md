---
title: SortableHoc
nav:
  title: assui
  path: /assui
group:
  title: 反馈
  path: /components/feedback
---

# SortableHoc 拖拽

## 1. 代码演示

### 1.1. 基本应用

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/VerticalListBase/index.jsx" />

## 2. Grid
### 2.1. 基本应用
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Grid/Base.jsx" />

### 2.2. 第一个总是变大
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Grid/LargeFirstItem.jsx" />

## 3. 使用手柄拖拽
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/DragHandle/index.jsx" />


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


> 详情api [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc)
