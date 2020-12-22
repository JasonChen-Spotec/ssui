import React, { useState } from 'react';
import RichTextEditor from '../index';

const uploadOptions = {
  uploadUrl: 'http://34.87.87.52:9000/api/image/upload',
  handleUploadSuccess: response => {
    const { body: { fileId } } = response;
    return {
      default: `http://34.87.87.52:9000/api/image/${fileId}`
    };
  }
};

const RichTextEditorDemo = () => {
  const [data, setData] = useState('This is default data value.');
  const onReady = editor => {
    console.log('=== editor', editor);
  };

  const onChange = (e, editor) => {
    const editorData = editor.getData();
    console.log('=== demo2 data', editorData);
    setData(editorData)
  }

  const onError = errorObject => {
    console.error('===', errorObject);
  };

  const editorProps = {
    uploadOptions
  };

  return (
    <RichTextEditor
      data={data}
      minHeight={'200px'}
      maxHeight={'400px'}
      onReady={onReady}
      onChange={onChange}
      onError={onError}
      config={editorProps}
    />
  );
};

RichTextEditorDemo.displayName = 'RichTextEditorDemo';

export default RichTextEditorDemo;
