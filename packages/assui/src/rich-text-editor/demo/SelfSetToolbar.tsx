import React from 'react';
import { RichTextEditor } from 'assui';
import { defaultToolbar } from 'assui/lib/rich-text-editor';
import type * as Type from 'tinymce/tinymce';

export default function App() {
  const editRef = React.useRef<Type.Editor>();

  const onChange = (value) => {
    console.log('value', value);
  };

  const setup = (editor: Type.Editor) => {
    editRef.current = editor;

    editor.ui.registry.addButton('customInsertButton', {
      text: 'My Button',
      onAction(_) {
        editor.insertContent("&nbsp;<strong>It's my button!</strong>&nbsp;");
      },
    });

    // const toTimeHtml = function (date) {
    //   return `<time datetime="${date.toString()}">${date.toDateString()}</time>`;
    // };

    // editor.ui.registry.addButton('customDateButton', {
    //   icon: 'insert-time',
    //   tooltip: 'Insert Current Date',
    //   disabled: true,
    //   onAction(_) {
    //     editor.insertContent(toTimeHtml(new Date()));
    //   },
    //   onSetup(buttonApi) {
    //     const editorEventCallback = function (eventApi) {
    //       buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
    //     };
    //     editor.on('NodeChange', editorEventCallback);

    //     /* onSetup should always return the unbind handlers */
    //     return function (buttonApi) {
    //       editor.off('NodeChange', editorEventCallback);
    //     };
    //   },
    // });
  };

  return (
    <div>
      <RichTextEditor
        onEditorChange={onChange}
        init={{ setup, toolbar: `${defaultToolbar} | customInsertButton customDateButton ` }}
      />
    </div>
  );
}
