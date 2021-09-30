---
title: RcMotion
nav:
  title: assui
  path: /assui
group:
  title: animation
  path: /animation
  order: 4
---

# RcMotion

## 1. Transition Class
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" />

## 2. animation Class
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/animation.tsx" />


## API

### CSSMotion

| 属性名                 |                              描述                              | 类型                                     | 默认值 |
| ---------------------- | :------------------------------------------------------------: | ---------------------------------------- | ------ |
| motionName             |               动画类名前缀, 状态改变时将动态改变               | `string`                                 | -      |
| visible                |                         触发动画的变量                         | `boolean`                                | true   |
| motionAppear           |                  Use motion when appear(显示)                  | `boolean`                                | true   |
| motionEnter            |                 Use motion when enter(已进入)                  | `boolean`                                | true   |
| motionLeave            |                  Use motion when leave(离开)                   | `boolean`                                | true   |
| motionLeaveImmediately |                Will trigger leave even on mount                | `boolean`                                | -      |
| motionDeadline         |  Trigger motion status change even when motion event not fire  | `number`                                 | -      |
| removeOnLeave          |              Remove element when motion leave end              | `boolean`                                | true   |
| leavedClassName        |                  Set leaved element className                  | `string`                                 | -      |
| onAppearStart          | Trigger when appear start, return style will patch to element  | `(HTMLElement, Event) => CSSProperties`  | void;  | -
| onEnterStart           |  Trigger when enter start, return style will patch to element  | `(HTMLElement, Event) => CSSProperties ` | void;  | -
| onLeaveStart           |  Trigger when leave start, return style will patch to element  | `(HTMLElement, Event) => CSSProperties`  | void;  | -
| onAppearActive         | Trigger when appear active, return style will patch to element | `(HTMLElement, Event) => CSSProperties`  | void;  | -
| onEnterActive          | Trigger when enter active, return style will patch to element  | `(HTMLElement, Event) => CSSProperties`  | void;  | -
| onLeaveActive          | Trigger when leave active, return style will patch to element  | `(HTMLElement, Event) => CSSProperties`  | void;  | -
| onAppearEnd            |   Trigger when appear end, will not finish when return false   | `(HTMLElement, Event) => boolean`        | void;  | -
| onEnterEnd             |   Trigger when enter end, will not finish when return false    | `(HTMLElement, Event) => boolean`        | void;  | -
| onLeaveEnd             |   Trigger when leave end, will not finish when return false    | `(HTMLElement, Event) => boolean`        | void;  | -
