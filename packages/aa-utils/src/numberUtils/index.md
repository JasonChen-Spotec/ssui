---
title: numberUtils
nav:
  title: func
  path: /func
group:
  title: func
  path: /func
  order: 1
---

### 1. 基于`Intl.NumberFormat`格式化数字
<code desc="以上保留小数位均会四舍入" hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 2. 截取浮点数(不会四舍五入)
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { Descriptions } from 'antd'
import numberUtils from 'aa-utils/src/numberUtils';

export default ()=>(
  <div>
    <Descriptions column={1}>
      <Descriptions.Item label="0.252523(默认保留两位小数)">
        {
          numberUtils.formatBigFloatNumber('-17777772377.77777', { useGrouping: true,
          minimumFractionDigits: 8,
          maximumFractionDigits: 8
          })
        } </Descriptions.Item>
      <Descriptions.Item label="0.252523(保留3位小数)">
        {numberUtils.formatBigFloatNumber('0.252523')}
      </Descriptions.Item>
    </Descriptions>
  </div>
)
```

### 3. 格式化数据类API
`numberUtil[method](value, options={})`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 需要处理的数字 | Number | 0 |

#### 3.1. options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useGrouping | 分组分隔符，如千位分隔符或千/万/亿分隔符 | Boolean | true |
| minimumFractionDigits | 保留小数位数的最小数目 | Number | 0 |
| maximumFractionDigits | 保留的小数位数的最大数目 | Number | 2 |
| usePlus | 正数加入prefix '+' | Boolean | false |



本方法基于 `Intl.NumberFormat`, 更多参数参照[MDN Intl.NumberFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### 数据精度方法
1. `0.1 + 0.2 = 0.30000000000000004`
2. `1.0 - 0.9 = 0.09999999999999998`
3. `toFixed` 的问题 `0.105.toFixed(2) = 0.1 // not 0.11`

#### 处理方法
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/precision.jsx" />
