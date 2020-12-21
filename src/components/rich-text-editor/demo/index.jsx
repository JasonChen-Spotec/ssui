import React, { useRef } from 'react';
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

  const onReady = editor => {
    console.log('=== editor', editor);
  };

  const onError = errorObject => {
    console.error('===', errorObject);
  };

  const editorProps = {
    language: 'zh-cn',
    placeholder: 'This is a rich-text editor.',
    uploadOptions
  };

  return (
    <RichTextEditor
      minHeight={'200px'}
      maxHeight={'400px'}
      onReady={onReady}
      onError={onError}
      config={editorProps}
    />
  );
};

RichTextEditorDemo.displayName = 'RichTextEditorDemo';

export default RichTextEditorDemo;
