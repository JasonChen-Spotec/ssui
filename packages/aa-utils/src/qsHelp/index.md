---
title: qsHelp
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# path和query string的常用方法

## 1. getQueryString
获取当前的query string
```jsx
/**
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { qsHelp } from 'aa-utils';

export default () => (
  <div>
    /utils/qs-help?name=lixiaoalong&age=32 => {qsHelp.getQueryString('?name=lixiaoalong&age=32')}
  </div>
)
```


## 2. getQueryObject
```jsx
/**
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { qsHelp } from 'aa-utils';

export default () => (
  <div>
    /utils/qs-help?name=lixiaoalong&age=32 => {
      JSON.stringify(qsHelp.getQueryObject('name=lixiaoalong&age=32'))
    }
  </div>
)
```

## 3. toQueryString
```jsx
/**
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { qsHelp } from 'aa-utils';

export default () => (
  <div>
    {JSON.stringify({ name: 'bin', age: 23, id: 2 })} => {
      qsHelp.toQueryString({ name: 'bin', age: 23, id: 2 }) }
  </div>
)
```

## 4. toPath
```jsx
/**
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { qsHelp } from 'aa-utils';

export default () => (
  <div>
    /userCenter/:name/age/:age => {
      qsHelp.toPath('/userCenter/:name/age/:age', { name: 'bin', age: 23 }) }
  </div>
)
```

## 5. urlToList
```jsx
/**
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { qsHelp } from 'aa-utils';

console.log('qsHelp', qsHelp.urlToList('/user/list/detail'));

export default () => (
  <div>
    /user/list/detail =>
    {
      JSON.stringify(qsHelp.urlToList('/user/list/detail') )
    }
  </div>
)
```

## 6. getPathAndQueryObject
```jsx
/**
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import { qsHelp } from 'aa-utils';

export default () => (
  <div>
    /user/list/detail?name=lixiaoalong&age=32 =>
    {
      JSON.stringify(
        qsHelp.getPathAndQueryObject('/user/list/detail?name=lixiaoalong&age=32')
      )
    }
  </div>
)
```
