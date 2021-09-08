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
| parseDate         | 解析日期       | `(date: dayjs.ConfigType, format?: string) => dayjs.Dayjs`           | -      |
| parseTime         | 解析时间       | `(date: dayjs.ConfigType, format?: string) => dayjs.Dayjs`           | -      |
| parseDateTime     | 解析日期时间   | `(date: dayjs.ConfigType \| number, format?: string) => dayjs.Dayjs` | -      |
| formatDate        | 格式化日期     | `(date: dayjs.Dayjs, format?: string) => string`                     | -      |
| formatTime        | 格式化时间     | `(date: dayjs.Dayjs, format?: string) => string`                     | -      |
| formatDateTime    | 格式化日期时间 | `(key: string, value: any[] \| {[key: string]: any}) => void`        | -      |
| formatToTimestamp | 获取时间戳     | `(date?: dayjs.Dayjs \| Date) => number`                             | -      |
| getToday          | 获取当前时间   | `() => dayjs.Dayjs`                                                  | -      |
| getTimeZone       | 获取时区       | `() => string`                                                       | -      |

### 2.2. setter、getter方法
```js
DateUtils.locale; // 获取或设置语言
DateUtils.dateFormat; // 获取或设置默认日期格式
DateUtils.timeFormat; // 获取或设置默认时间格式
DateUtils.dateTimeFormat; // 获取或设置默认日期时间格式
```
