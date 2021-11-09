---
title: dateUtils
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# dateUtils
用于处理日期常用格式化

## 1. 代码演示
### 1.1. 格式化

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 1.2. 解析
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/parseDate.jsx" />

### 1.3. 其他功能

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/other.jsx" />

## 2. API
### 2.1. 实例方法

| 参数              | 说明           | 类型                                                                 | 默认值 |
| ----------------- | -------------- | -------------------------------------------------------------------- | ------ |
| parseDate         | 解析日期       | `(date: moment.MomentInput, format?: string) => moment.Moment`           | -      |
| parseTime         | 解析时间       | `(date: moment.MomentInput, format?: string) => moment.Moment`           | -      |
| parseDateTime     | 解析日期时间   | `(date: moment.MomentInput \| number, format?: string) => moment.Moment` | -      |
| formatDate        | 格式化日期     | `(date: moment.Moment, format?: string) => string`                     | -      |
| formatTime        | 格式化时间     | `(date: moment.Moment, format?: string) => string`                     | -      |
| formatDateTime    | 格式化日期时间 | `(date: moment.Moment, format?: string) => string`| -      |
| formatToTimestamp | 获取时间戳     | `(date?: moment.Moment \| Date) => number`                             | -      |
| getToday          | 获取当前时间   | `() => moment.Moment`                                                  | -      |
| getTimeZone       | 获取时区       | `() => string`                                                       | -      |

### 2.2. setter、getter方法
```js
DateUtils.locale; // 获取或设置语言
DateUtils.dateFormat; // 获取或设置默认日期格式
DateUtils.timeFormat; // 获取或设置默认时间格式
DateUtils.dateTimeFormat; // 获取或设置默认日期时间格式
```

> 更多时间对象的操作 [moment](http://momentjs.cn/)
