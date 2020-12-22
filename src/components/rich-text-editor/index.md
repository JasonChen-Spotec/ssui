---
title: rich-text-editor
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
order: 1
---

### 空白的富文本编辑器

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Demo1.jsx" />

### 受控的富文本编辑器

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Demo2.jsx" />

### API

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- |
| language       | 组件语言\(en/zh-cn\) | string | 'en' |
| placeholder    | 占位符 | string | |
| data           | 编辑器的内容 | string | |
| readonly       | 编辑器是否只读, 等同于disabled, 只读时placeholder会失效 | boolean | false |
| height         | 编辑器编辑区域的高度样式 | string | |
| minHeight      | 编辑器编辑区域的最小高度样式 | string | |
| maxHeight      | 编辑器编辑区域的最小高度样式 | string | |
| config         | 编辑器的配置属性对象 | object | |
| generateConfig | 生成编辑器的配置属性对象的方法, 结果会覆盖掉`config` | function(defaultConfig: object, config: object) | |
| onReady        | 编辑器初始化完毕的回调函数 | function\(editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |
| onError        | 编辑器发生错误的回调函数 | function\(phase: string['initialization'\|'runtime'], willEditorRestart: boolean) | |
| onChange       | 编辑器内容改变的回调函数 | function\(e: [EventInfo](https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html), editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |
| onFocus        | 编辑器获得焦点的回调函数 | function\(e: [EventInfo](https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html), editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |
| onBlur         | 编辑器失去焦点的回调函数 | function\(e: [EventInfo](https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html), editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |

### Editor.defaultConfig

```javascript
{
  toolbar: {
    items: [
      'heading',
      '|',
      'fontFamily',
      'fontSize',
      'bold',
      'italic',
      'strikethrough',
      'underline',
      '|',
      'fontBackgroundColor',
      'fontColor',
      'highlight',
      '|',
      'alignment',
      'indent',
      'outdent',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'link',
      // 'imageUpload', // included by 'imageInsert'
      'imageInsert',
      'specialCharacters',
      'blockQuote',
      'undo',
      'redo',
      'CKFinder',
      'insertTable'
    ]
  },
  language: 'en',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side',
      'linkImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  }
}
```
