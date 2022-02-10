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

### 1.5. API（基于bignumber.js）

`formatNumber(value, options)`

#### 1.5.1. value
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 需要处理的数字 | `number` \| `string` | - |

#### 1.5.2. options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useGrouping | 分组分隔符，如千位分隔符或千/万/亿分隔符 | `boolean` | true |
| usePlus | 正数加入prefix '+' | `boolean` | false |
| minFractionDigits | 保留小数位数的最小数目 | `number` | 2 |
| maxFractionDigits | 保留的小数位数的最大数目 | `number` | 2 |
| roundingMode | 舍入的方式 |`up \| down \| ceil \| floor \| halfUp \| halfDown \| halfEven \| halfCeil \| halfFloor` | halfUp |

> roundingMode说明： 默认值 `halfUp`是四舍五入，其他值：`down`总是向下舍去， `up`总是向上入，其他值可以看bignumber.js api

## 2. formatFixedFraction(固定小数位)


<code hideActions='["CSB", "EXTERNAL"]' src="./demo/formatFixedFraction.jsx" />

### 2.1. API
`formatFixedFraction(value, options)`
#### 2.1.1. options
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | `number \| stirng \| BigNumber.Instance` | - |

#### 2.1.2. options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useGrouping | 分组分隔符，如千位分隔符或千/万/亿分隔符 | `boolean` | true |
| usePlus | 正数加入prefix '+' | `boolean` | false |
| fractionDigits | 保留小数位数的数目 | `number` | 8 |
| roundingMode | 舍入的方式 |`up \| down \| ceil \| floor \| halfUp \| halfDown \| halfEven \| halfCeil \| halfFloor` | halfUp ||



## 3. 百分比(formatPercent)
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/formatPercent.jsx" />


### 3.1. API

`formatPercent(value, options)`

#### 3.1.1. value
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 需要处理的数字 | `number` \| `string` | - |

#### 3.1.2. options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| useUnit | 是否需要百分号 | `boolean` | true |
更多属性请参考 `formatNumber`

## 4. 数据精度问题
1. `0.1 + 0.2 = 0.30000000000000004`
2. `1.0 - 0.9 = 0.09999999999999998`
3. `toFixed` 的问题 `0.105.toFixed(2) = 0.10 // not 0.11`

### 4.1. 计算方法 times、plus、minus、divide（基于bigNumber）
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/claculateFunc.jsx" />

### 4.2. API
#### 4.2.1. 精确乘法
```js
times([Numbers])
```
#### 4.2.2. 精确加法
```js
plus([Numbers])
```
#### 4.2.3. 精确减法
```js
minus([Numbers])
```
#### 4.2.4. 精确除法
```js
divide([Numbers])
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `number \| stirng \| BigNumber.Instance` | 需要乘的数字 | - | - |

## 5. strip
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
### 5.1. API

```js
strip(number, [precision=12])
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | Number | - |
| precision | 需要精确的位数 | Number | 12 |

## 6. float2Fixed
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

### 6.1. API
```js
float2Fixed(Number)
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | Number | - |


## 7. 数字比较
1. `12345123451234512345 < 12345123451234512399`
2. `77777777.77777778 <= 77777777.77777777`
3. `12345123451234512399 > 12345123451234512345`
4. `77777777.77777777 >= 77777777.77777778`

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/compare.jsx" />

### 7.1. 小于
```js
isLessThan(numbers, base)
```
### 7.2. 小于等于
```js
isLessThanOrEqualTo(numbers, base)
```
### 7.3. 大于
```js
isGreaterThan(numbers, base)
```
### 7.4. 大于等于
```js
isGreaterThanOrEqualTo(numbers, base)
```

### 7.5. API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `number \| stirng \| BigNumber.Instance` | 数字 | - | - |
| `base \| stirng \| BigNumber.Instance` | 被比较的数字 | - | - |

