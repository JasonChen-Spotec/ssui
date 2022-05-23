---
mobile: false
title: RcTransitionGroup
nav:
  title: assui
  path: /assui
group:
  title: animation
  path: /animation
  order: 4
---

# RcTransitionGroup
定义简单组件进入和退出时候的过渡效果 [react-transition-group](http://reactcommunity.org/react-transition-group/transition)

## 1. CSSTransition
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/CSSTransition.jsx" />

## 2. SwitchTransition
实现不同状态变化时的过渡效果
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/switch-transition/index.jsx" />


## 3. CSSTransition API
| 属性名     | 描述                                                           | 类型                                           | 默认值 |
| ---------- | -------------------------------------------------------------- | ---------------------------------------------- | ------ |
| in         | 触发组件显示还是隐藏                                           | boolean                                        | false  |
| children   | 加动画的节点                                                   | ReactNode                                      | -      |
| classNames | 应用于组件各个阶段动的画类名                                   | string \| CSSTransitionClassNames \| undefined | -      |
| onEnter    | 在`enter` or `appear` class应用上触发                          | Function(node: HtmlElement, isAppearing: bool) | -      |
| onEntering | 在`enter-active` or `appear-active` class应用上触发            | Function(node: HtmlElement, isAppearing: bool) | -      |
| onEntered  | 在`enter` or `appear` class移除掉并且 `done` class应用上后触发 | Function(node: HtmlElement, isAppearing: bool) | -      |
| onExit     | 在`exit` class应用上触发                                       | Function(node: HtmlElement)                    | -      |
| onExiting  | 在`exit-active` class应用上触发                                | Function(node: HtmlElement)                    | -      |
| onExited   | 在`exit` class移除掉并且 `exit-done` class应用上后触发         | Function(node: HtmlElement)                    | -      |

### 3.1. classNames 例子
如果classNames为string
```
classNames="fade"

fade-appear, fade-appear-active, fade-appear-done
fade-enter, fade-enter-active, fade-enter-done
fade-exit, fade-exit-active, fade-exit-done
```
如果classNames为object
```
classNames={{
 appear: 'my-appear',
 appearActive: 'my-active-appear',
 appearDone: 'my-done-appear',
 enter: 'my-enter',
 enterActive: 'my-active-enter',
 enterDone: 'my-done-enter',
 exit: 'my-exit',
 exitActive: 'my-active-exit',
 exitDone: 'my-done-exit',
}}
```

## 4. SwitchTransition API
| 属性名   | 描述                                       | 类型                                | 默认值   |
| -------- | ------------------------------------------ | ----------------------------------- | -------- |
| mode     | 触发组件显示还是隐藏                       | `out-in` \| `in-out` \| `undefined` | `out-in` |
| children | `Transition` or `CSSTransition` component. | `ReactElement`                      | -        |

>* `out-in`: 当前Element消失完成新的Element在出现
>* `in-out`: 新的Element出现完成后，当前Element在消失

> `Transition`、`TransitionGroup`例子请看 [react-transition-group](http://reactcommunity.org/react-transition-group/transition)

## export code

```ts
import * as RcTransitionGroup from 'react-transition-group';

export default RcTransitionGroup;

```
