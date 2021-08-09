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

### 非受控的富文本编辑器

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Demo1.jsx" />

### 受控的富文本编辑器

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/Demo2.jsx" />

### API

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- |
| language       | 编辑器工具的地区语言 | string['en'\|'zh-cn'] | 'en' |
| placeholder    | 占位符 | string | |
| data           | 编辑器的内容 | string | |
| readonly       | 编辑器是否只读, 等同于`disabled`, 只读时`placeholder`会失效 | boolean | false |
| height         | 编辑器编辑区域的高度样式 | string | |
| minHeight      | 编辑器编辑区域的最小高度样式 | string | |
| maxHeight      | 编辑器编辑区域的最小高度样式 | string | |
| config         | 编辑器的配置属性对象 | object | |
| generateConfig | 生成编辑器的配置属性对象的方法, 结果会覆盖掉`config` | function(defaultConfig: object, config: object) | |
| onReady        | 编辑器初始化完毕的回调方法 | function\(editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |
| onError        | 编辑器发生错误的回调方法 | function\(phase: string['initialization'\|'runtime'], willEditorRestart: boolean) | |
| onChange       | 编辑器内容改变的回调方法 | function\(e: [EventInfo](https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html), editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |
| onFocus        | 编辑器获得焦点的回调方法 | function\(e: [EventInfo](https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html), editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |
| onBlur         | 编辑器失去焦点的回调方法 | function\(e: [EventInfo](https://ckeditor.com/docs/ckeditor5/latest/api/module_utils_eventinfo-EventInfo.html), editor: [Editor](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html)\) | |

---

### 上传图片的API\(`config.uploadOptions`)

- 必须设置`uploadUrl`, 否则无法初始化富文本编辑器
- 上传成功后需要[返回固定的格式](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html#responsive-images-and-srcset-attribute)告诉编辑器上传的图片的URL
```javascript
  {
    default: 'http://example.com/images/image–default-size.png'
  }
 ```


| 参数 | 说明 | 类型 | 
| --- | --- | --- | 
| uploadUrl           | URL | string |
| method              | HTTP-Method | string |
| handleUploadSuccess | 上传成功的回调方法 | function\(response: Response) |
| handleUploadError   | 上传错误的回调方法 | function\(response: Response) |

---

### 默认配置\(`defaultConfig`)

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
