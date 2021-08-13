---
title: events
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# EventEmitter

events 只提供了一个对象： events.EventEmitter。 EventEmitter 的核心就是`事件触发`与`事件监听器功能`的封装。

## 基本用法

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/base/index.jsx" />

## 只执行一次
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/once.jsx" />

## API
属性如下

| 参数 | 说明 |
| --- | --- |
| `addListener/on`(event, listener) | 为指定事件添加一个监听器到监听器数组的尾部。 |
| `removeListener/off`(event, listener) | 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。 它接受两个参数，第一个是事件名称，第二个是回调函数名称。 |
| removeAllListeners(event, listener) | 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。|
| setMaxListeners(event, listener) | 为指定事件添加一个监听器到监听器数组的尾部。 |
| emit(event, listener) | 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。 |

> 全部api请看Node.js [EventEmitter docs](https://nodejs.org/dist/v11.13.0/docs/api/events.html)， 当前events匹配的是11.13.0 API [events lib address](https://github.com/browserify/events)


