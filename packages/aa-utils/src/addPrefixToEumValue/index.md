---
mobile: false
title: addPrefixToEumValue
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# addPrefixToEumValue

## API
```ts
const types = {
  GET_CURRENT_USER: 'getCurrentUser',
  TRY_LOGIN: 'tryLogin',
};

expect(addPrefixToEumValue(types, 'dashboard')).toEqual({
  GET_CURRENT_USER: 'dashboard/getCurrentUser',
  TRY_LOGIN: 'dashboard/tryLogin',
});
```
