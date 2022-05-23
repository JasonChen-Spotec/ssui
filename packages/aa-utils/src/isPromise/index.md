---
mobile: false
title: isPromise
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# isPromise
判断某个值是否为Promise对象

## 基本用法
```tsx
import { isPromise } from 'aa-utils'

isPromise({})
// => false
isPromise(Promise.reject())
// => true
```

### API
参数
value (*): 要检查的值。
返回 (boolean)
