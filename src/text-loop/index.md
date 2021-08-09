---
title: text-loop
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
  order: 1
---

## 基本
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import TextLoop from 'react-text-loop';

export default () => (
  <div>
    <TextLoop>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);
```

## Fast
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import TextLoop from 'react-text-loop';

export default () => (
  <div>
    <TextLoop interval={1000}>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);
```

## Smooth
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import TextLoop from 'react-text-loop';

export default () => (
  <div>
    <TextLoop
      springConfig={{ stiffness: 70, damping: 31 }}
      adjustingSpeed={500}
    >
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);
```

## Variable
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import TextLoop from 'react-text-loop';

export default () => (
  <div>
    <TextLoop interval={[3000, 1000]}>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);
```

## Masked
```jsx
/**
 * title: 代码块
 * hideActions: ["CSB", "EXTERNAL"]
 */
import React from 'react';
import TextLoop from 'react-text-loop';

export default () => (
  <div>
    <TextLoop mask>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);
```

## API
### Props

| Prop           | Type            | Default                           | Definition                                                                                                                                    |
| -------------- | --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| interval       | number \| array | `3000`                            | The frequency (in ms) that the words change. Can also pass an array if you want a different interval per children |
| delay       | number | `0`                            | A delay (in ms) for the animation to start. This allows to use multiple instances to create a staggered animation effect for example. |
| adjustingSpeed | number          | `150`                             | The speed that the container around each word adjusts to the next one (in ms). Usually you don't need to change this.                                                                 |
| fade           | boolean         | `true`                            | Enable or disable the fade animation on enter and leave                                                                                       |
| mask           | boolean         | `false`                           | Mask the animation around the bounding box of the animated content                                                                            |
| noWrap           | boolean         | `true`                           | Disable `whitepace: nowrap` style for each element. This is used by default so we can always get the right width of the element but can have issues sometimes. |
| springConfig   | object          | `{ stiffness: 340, damping: 30 }` | Configuration for [react-motion spring](https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig) |
| className | string | | Any additional CSS classes you might want to use to style the image |
| children       | node            |                                   | The words you want to loop (required)
