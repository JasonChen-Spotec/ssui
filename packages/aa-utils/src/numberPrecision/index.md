---
title: numberPrecision
nav:
  title: func
  path: /func
group:
  title: func
  path: /func
  order: 1
---


```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import numberPrecision from 'a-utils/lib/numberPrecision';

export default ()=>(
  <div>
    <ul className="number-precision">
      <li>strip(0.09999999999999998)= <span>{numberPrecision.strip(0.09999999999999998)} </span> </li>
      <li>plus(0.1, 0.2) = <span>{numberPrecision.plus(0.1, 0.2)}</span> not 0.30000000000000004</li>
      <li>plus(2.3, 2.4) = <span>{numberPrecision.plus(2.3, 2.4)}</span> not 4.699999999999999</li>
      <li>minus(1.0, 0.9) = <span>{numberPrecision.minus(1.0, 0.9)} </span> not 0.09999999999999998</li>
      <li>times(3, 0.3) = <span>{numberPrecision.times(3, 0.3)} </span> not 0.8999999999999999</li>
      <li>times(0.362, 100) = <span>{numberPrecision.times(0.362, 100)}</span> not 36.199999999999996</li>
      <li>divide(1.21, 1.1) = <span>{numberPrecision.divide(1.21, 1.1)}</span> not 1.0999999999999999</li>
      <li>round(0.105, 2) = <span>{numberPrecision.round(0.105, 2)}</span> not 0.1</li>
    </ul>
  </div>
)
```

## 1. API
### 1.1. strip
把错误的数据转正 `strip(0.09999999999999998)=0.1`
```js
strip(number, [precision=12])
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | Number | - |
| precision | 需要精确的位数 | Number | 12 |

### 1.2. times、plus、minus、divide
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

### 1.3. float2Fixed
把小数转成整数，支持科学计数法。如果是小数则放大成整数
```js
float2Fixed(Number)
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| number | 需要处理的数字 | Number | - |

### 1.3. round
四舍五入
```js
round(Number, ratio)
```
