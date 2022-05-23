---
mobile: false
title: cookieUtils
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# cookieUtils
操作cookie的各种方法(基于[universal-cookie](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie))

## API - Cookies class

### `constructor([cookieHeader])`
Create a cookies context
 - cookieHeader (string|object): specify the cookie header or object

### `get(name, [options])`
Get a cookie value
 - name (string): cookie name
 - options (object):
   - doNotParse (boolean): do not convert the cookie into an object no matter what

### `getAll([options])`
Get all cookies
 - options (object):
   - doNotParse (boolean): do not convert the cookie into an object no matter what

### `set(name, value, [options])`
Set a cookie value
- name (string): cookie name
- value (string|object): save the value and stringify the object if needed
- options (object): Support all the cookie options from RFC 6265
  - path (string): cookie path, use `/` as the path if you want your cookie to be accessible on all pages
  - expires (Date): absolute expiration date for the cookie
  - maxAge (number): relative max age of the cookie from when the client receives it in seconds
  - domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
  - secure (boolean): Is only accessible through HTTPS?
  - httpOnly (boolean): Is only the server can access the cookie? **Note: You cannot get or set httpOnly cookies from the browser, only the server.**
  - sameSite (boolean|none|lax|strict): Strict or Lax enforcement

### `remove(name, [options])`
Remove a cookie
- name (string): cookie name
- options (object): Support all the cookie options from RFC 6265
  - path (string): cookie path, use `/` as the path if you want your cookie to be accessible on all pages
  - expires (Date): absolute expiration date for the cookie
  - maxAge (number): relative max age of the cookie from when the client receives it in seconds
  - domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
  - secure (boolean): Is only accessible through HTTPS?
  - httpOnly (boolean): Is only the server can access the cookie? **Note: You cannot get or set httpOnly cookies from the browser, only the server.**
  - sameSite (boolean|none|lax|strict): Strict or Lax enforcement

### `addChangeListener(callback)`
Add a listener to when a cookie is set or removed.
 - callback (function): Call that will be called with the first argument containing `name`, `value` and `options` of the changed cookie.

### `removeChangeListener(callback)`
Remove a listener from the change callback.

## Browser Example

```js
import {cookieUtils} from 'aa-utils';


cookieUtils.set('myCat', 'Pacman', { path: '/' });
console.log(cookieUtils.get('myCat')); // Pacman
```

## Server Example

```js
import {cookieUtils} from 'aa-utils';
const { Cookies } = cookieUtils;

const cookies = new Cookies(req.headers.cookie);

console.log(cookies.get('myCat')); // Pacman or undefined if not set yet
```
