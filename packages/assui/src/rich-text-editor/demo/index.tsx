import React from 'react';
import { RichTextEditor } from 'assui';

const firstToolbar =
  'undo redo | blocks fontsize | ' +
  'bold italic underline strikethrough forecolor backcolor charmap emoticons | ' +
  'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent';

const defaultToolbar = [firstToolbar, 'link code table image removeformat | preview help'];

export default function App() {
  const onChange = (value) => {
    console.log('value', value);
  };

  const imagesUploadHandler = (blobInfo, progress) => {
    return new Promise((resolve, reject) => {
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
          reject('HTTP Error: ' + xhr.status);
          return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
          reject('HTTP Error: ' + xhr.status);
          return;
        }

        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != 'string') {
          reject('Invalid JSON: ' + xhr.responseText);
          return;
        }

        resolve(json.location);
      };

      xhr.onerror = function () {
        reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      xhr.send(formData);
    });
  };

  return (
    <RichTextEditor
      onEditorChange={onChange}
      init={{
        toolbar: defaultToolbar,
        images_upload_handler: imagesUploadHandler,
      }}
    />
  );
}
