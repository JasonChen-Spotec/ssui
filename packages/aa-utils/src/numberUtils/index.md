---
title: numberUtils
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# 格式化数字
```js
const = {
  formatNumber, formatPercent, BigNumber, strip,
  plus, minus, times, divide, float2Fixed, digitLength
} =  numberUtils;
```
## 1. formatNumber
### 1.1. 基本使用(formatNumber)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

### 1.2. usePlus(formatNumber)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/usePlus.jsx" />

### 1.3. 截取浮点数,不会四舍五入(formatNumber)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/roundingMode.jsx" />

### 1.4. 大数据
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/bigData.jsx" />

### 1.5. formatNumber API（基于bignumber.js）

`formatNumber(value, options)`

### 1.6. value
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 需要处理的数字 | `number` \| `string` | - |

### 1.7. options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useGrouping | 分组分隔符，如千位分隔符或千/万/亿分隔符 | `boolean` | true |
| usePlus | 正数加入prefix '+' | `boolean` | false |
| minFractionDigits | 保留小数位数的最小数目 | `number` | 2 |
| maxFractionDigits | 保留的小数位数的最大数目 | `number` | 2 |
| roundingMode | 舍入的方式 |`up \| down \| ceil \| floor \| halfUp \| halfDown \| halfEven \| halfCeil \| halfFloor` | halfUp |

> roundingMode说明： 默认值 `halfUp`是四舍五入，其他值：`down`总是向下舍去， `up`总是向上入，其他值可以看bignumber.js api


## 2. 百分比(formatPercent)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/formatPercent.jsx" />


### 2.1. formatPercent API（formatNumber）

`formatNumber(value, options)`

### 2.2. value
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 需要处理的数字 | `number` \| `string` | - |

### 2.3. options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useUnit | 是否需要百分号 | `boolean` | true |
更多属性请参考 `formatNumber`

# 数据精度问题
1. `0.1 + 0.2 = 0.30000000000000004`
2. `1.0 - 0.9 = 0.09999999999999998`
3. `toFixed` 的问题 `0.105.toFixed(2) = 0.10 // not 0.11`

## 3. strip
把错误的数据转正

```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
 import { Descriptions, Typography } from 'antd';
 import numberUtils from 'aa-utils/lib/numberUtils';

export default () => (
  <div>
     <Descriptions column={1}>
        <Descriptions.Item label="strip(0.09999999999999998)">
          {
            numberUtils.strip(0.09999999999999998)
          }
        </Descriptions.Item>
       </Descriptions>
  </div>
)
```
### 3.1. API

```js
strip(number, [precision=12])
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | Number | - |
| precision | 需要精确的位数 | Number | 12 |

## 4. times、plus、minus、divide
精确乘法
```js
times([Numbers])
```
精确加法
```js
plus([Numbers])
```
精确乘法
```js
minus([Numbers])
```
精确除法
```js
divide([Numbers])
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| Numbers | 需要乘的数字 | Number | - |

## 5. float2Fixed
把小数转成整数，支持科学计数法。如果是小数则放大成整数
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
 import { Descriptions, Typography } from 'antd';
 import numberUtils from 'aa-utils/lib/numberUtils';

export default () => (
  <div>
     <Descriptions column={1}>
        <Descriptions.Item label="strip(0.099999)">
          {
            numberUtils.float2Fixed(0.099999)
          }
        </Descriptions.Item>
       </Descriptions>
  </div>
)
```

```js
float2Fixed(Number)
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | Number | - |
