import React from 'react';
import { RichTextEditor } from 'assui';
import type * as Type from 'tinymce/tinymce';
import { Button } from 'antd';

export default function App() {
  const editRef = React.useRef<Type.Editor>();

  const onChange = (value) => {
    console.log('value', value);
  };

  return (
    <div>
      <RichTextEditor
        onEditorChange={onChange}
        init={{
          setup(editor: Type.Editor) {
            editRef.current = editor;
          },
        }}
      />
      <Button
        style={{ marginTop: 30 }}
        onClick={() => {
          editRef.current?.insertContent('<span>{{这是插入的tag}}</span>');
        }}
      >
        插入tag
      </Button>
    </div>
  );
}
