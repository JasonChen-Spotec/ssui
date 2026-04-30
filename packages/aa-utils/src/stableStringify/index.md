---
mobile: false
title: stableStringify
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# stableStringify

稳定的 JSON 序列化工具函数。

与原生 `JSON.stringify` 的核心区别在于：它会**强制对对象的键（Key）进行字典序排序**，同时**严格保留数组元素的原始顺序**。常用于解决因为对象属性插入顺序不同，导致的数据严格相等（`===`）匹配失败的问题（例如：Ant Design 复杂对象 Select 回显失败、前端数据缓存对比等场景）。

它对边界条件（如 `undefined`、函数、`null` 等）的处理与原生 `JSON.stringify` 100% 保持一致，可放心作为全局替代方案。

## 代码演示

### 基础用法：消除对象键序差异

无论对象属性的书写顺序如何，序列化后的字符串永远保持一致：
```ts
import { stableStringify } from 'aa-utils';

const objA = { type: 1, channelId: 16 };
const objB = { channelId: 16, type: 1 };

console.log(stableStringify(objA) === stableStringify(objB));
// 输出结果: true
// 两者底层均被稳定格式化为: '{"channelId":16,"type":1}'
```
