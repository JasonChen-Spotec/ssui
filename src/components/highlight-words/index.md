---
title: highlight-words
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
  order: 1
---

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />


## api

## Props

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| activeClassName | String |  | The class name to be applied to an active match. Use along with `activeIndex` |
| activeIndex | Number |  | Specify the match index that should be actively highlighted. Use along with `activeClassName` |
| activeStyle | Object |  | The inline style to be applied to an active match. Use along with `activeIndex` |
| autoEscape | Boolean |  | Escape characters in `searchWords` which are meaningful in regular expressions |
| className | String |  | CSS class name applied to the outer/wrapper `<span>` |
| caseSensitive | Boolean |  | Search should be case sensitive; defaults to `false` |
| findChunks | Function |  | Use a custom function to search for matching chunks. This makes it possible to use arbitrary logic when looking for matches. See the default `findChunks` function in [highlight-words-core](https://github.com/bvaughn/highlight-words-core) for signature. Have a look at the [custom findChunks example](https://codesandbox.io/s/k20x3ox31o) on how to use it. |
| highlightClassName | String or Object |  | CSS class name applied to highlighted text or object mapping search term matches to class names. |
| highlightStyle | Object |  | Inline styles applied to highlighted text |
| highlightTag | Node |  | Type of tag to wrap around highlighted matches; defaults to `mark` but can also be a React element (class or functional) |
| sanitize | Function |  | Process each search word and text to highlight before comparing (eg remove accents); signature `(text: string): string` |
| searchWords | Array<String &#124; RegExp> | ✓ | Array of search words. String search terms are automatically cast to RegExps unless `autoEscape` is true. |
| textToHighlight | String | ✓ | Text to highlight matches in |
| unhighlightClassName | String |  | CSS class name applied to unhighlighted text |
| unhighlightStyle | Object |  | Inline styles applied to unhighlighted text |
| * | any | | Any other props (such as `title` or `data-*`) are applied to the outer/wrapper `<span>` |

## Custom highlight tag

By default this component uses an HTML Mark Text element (`<mark>`) to wrap matched text, but you can inject a custom tag using the `highlightTag` property. This tag should be a React component that accepts the following properties:

| Property | Type | Description |
|:---|:---|:---|
| children | String | Text to be highlighted |
| highlightIndex | Number | Index of matched text |
