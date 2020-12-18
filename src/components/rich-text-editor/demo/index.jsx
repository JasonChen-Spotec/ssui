import React from 'react';
import RichTextEditor from '../index';
import createXMLHttpUploadAdapterPlugin from '../editor/createXMLHttpUploadAdaptor';

const uploadAdapter = createXMLHttpUploadAdapterPlugin({
  url: 'http://34.87.87.52:9000/api/image/upload',
  handleUploadResponse: response => {
    const { body: { fileId } } = response;
    return {
      default: `http://34.87.87.52:9000/api/image/${fileId}`
    };
  }
});

const Index = () => {
  const onReady = editor => {
    console.log('=== editor', editor);
  };

  const onError = errorObject => {
    console.error('===', errorObject);
  };

  const config = {
    // extraPlugins: [ uploadAdapter ]
  };

  return (
    <RichTextEditor
      config={config}
      onReady={onReady}
      onError={onError}
    />
  );
};

Index.displayName = 'Index';

export default Index;
