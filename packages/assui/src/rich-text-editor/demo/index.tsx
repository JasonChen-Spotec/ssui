import React from 'react';
import { RichTextEditor } from 'assui';

export default function App() {
  const onChange = (value) => {
    console.log('value', value);
  };

  const imagesUploadHandler = (blobInfo, success, failure, progress) => {
    let xhr, formData;

    // 这是官方例子，本质是通过blobInfo 拿到file对象，通过FormData 传给后端，然后用success将结果返回给编辑器
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', '/api/url');

    xhr.upload.onprogress = function (e) {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function () {
      let json;

      if (xhr.status === 403) {
        failure('HTTP Error: ' + xhr.status, { remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }

      success(json.location);
    };

    xhr.onerror = function () {
      failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };

    formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  };

  return (
    <RichTextEditor
      onEditorChange={onChange}
      init={{
        images_upload_handler: imagesUploadHandler,
      }}
    />
  );
}
