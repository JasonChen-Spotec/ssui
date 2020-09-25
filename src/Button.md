Basic button:

```jsx
<Button>Push Me</Button>
```

Big pink button:

```jsx inside Markdown
import React from 'react'
const click = () => console.log("-----:");

<Button size="large" color="deeppink" onClick={click}>
  Click Me
</Button>
```

And you _can_ **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `js`, `jsx` or `javascript` languages are rendered as an interactive playgrounds:

```jsx
<Button>Push Me</Button>
```

You can disable an editor by passing a `noeditor` modifier (` ```js noeditor `):

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier (` ```js static `):

```js static
import React from 'react'
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```
