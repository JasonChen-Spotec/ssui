---
title: events
nav:
  title: func
  path: /func
group:
  title: func
  path: /func
  order: 1
---

## Node's event emitter for all engines.

```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import EventEmitter from 'aa-utils/lib/events';

const ee = new EventEmitter()

const TextButton = () => (<Button onClick={() => ee.emit('message', 'hello world')}>触发事件</Button>)

export default () => {
  useEffect(()=>{
    ee.on('message', function (text) {
      console.log('TextButton')
      message.info(text)
    })
  },[])
  return (
    <div>
      <TextButton />
    </div>
  )
}
```

API
See the Node.js [EventEmitter docs](https://nodejs.org/dist/v11.13.0/docs/api/events.html). events currently matches the Node.js 11.13.0 API.

[lib address](https://github.com/browserify/events)
