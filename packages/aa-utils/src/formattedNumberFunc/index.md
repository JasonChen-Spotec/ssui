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


```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import formattedNumberFunc from 'a-utils/lib/formattedNumberFunc';

export default ()=>(
  <div>
    <ul className="number-precision">
      <li>33333 = <span>{formattedNumberFunc({ value: 33333 })} </span> </li>
      <li>-33333 = <span>{formattedNumberFunc({ value: -33333, minimumFractionDigits: 2 })}</span></li>
      <li>12 percent = <span>{formattedNumberFunc({ value: 12, numberStyle: 'percent' })}</span></li>
      <li>-12 decimalinreport = <span>{formattedNumberFunc({ value: -12, numberStyle: 'decimalinreport' })} </span> </li>
      <li>12 decimalinreport = <span>{formattedNumberFunc({ value: 12, numberStyle: 'decimalinreport' })} </span></li>
    </ul>
  </div>
)
```
