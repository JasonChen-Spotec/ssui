---
title: formattedNumberFunc
nav:
  title: func
  path: /func
group:
  title: func
  path: /func
  order: 1
---


## 基本用法
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { Descriptions } from 'antd'
import formattedNumberFunc from 'aa-utils/lib/formattedNumberFunc';

export default ()=>(
  <div>
    <Descriptions column={1}>
      <Descriptions.Item label="33333">{formattedNumberFunc({ value: 33333 })}</Descriptions.Item>
      <Descriptions.Item label="0.12 percent">{formattedNumberFunc({ value: 0.12, numberStyle: 'percent' })}</Descriptions.Item>
      <Descriptions.Item label="-12 decimalinreport">{formattedNumberFunc({ value: -12, numberStyle: 'decimalinreport' })}</Descriptions.Item>
      <Descriptions.Item label="12 decimalinreport">{formattedNumberFunc({ value: 12, numberStyle: 'decimalinreport' })}</Descriptions.Item>
      </Descriptions>
  </div>
)
```

## 保留小数

```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { Descriptions } from 'antd'
import formattedNumberFunc from 'aa-utils/src/formattedNumberFunc';

export default ()=>(
  <div>
    <Descriptions column={1} title="固定保留两位小数" >
      <Descriptions.Item label="1.2365">{formattedNumberFunc({ value: 1.2, minimumFractionDigits: 2 })}</Descriptions.Item>
      <Descriptions.Item label="1.2">{formattedNumberFunc({ value: 1.2, minimumFractionDigits: 2 })}</Descriptions.Item>
    </Descriptions>

    <Descriptions column={1} title="最大保留两位小数" >
      <Descriptions.Item label="1.2365">{formattedNumberFunc({ value: 1.2365 })}</Descriptions.Item>
      <Descriptions.Item label="1.2">{formattedNumberFunc({ value: 1.2 })}</Descriptions.Item>
      <Descriptions.Item label="0.1232 percent">{formattedNumberFunc({ value: 0.1232, numberStyle: 'percent', maximumFractionDigits: 4 })}</Descriptions.Item>
      <Descriptions.Item label="0.553 percent">{formattedNumberFunc({ value: 0.553, numberStyle: 'percent', maximumFractionDigits: 4 })}</Descriptions.Item>
    </Descriptions>
  </div>
)
```


## 1. API
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 需要处理的数字 | Number | 0 |
| numberStyle | 需要格式化的类型 | String | - |
| minimumFractionDigits | 保留小数位数的最小数目 | Number | 0 |
| maximumFractionDigits | 保留的小数位数的最大数目 | Number | 2 |

本方法基于 `Intl.NumberFormat`, 更多参数参照[MDN Intl.NumberFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
