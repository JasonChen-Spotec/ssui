/* eslint-disable prefer-promise-reject-errors */
import { localStorage } from 'aa-utils';

const getMultipartUploadHandler = (resultUrl: string) => {
  const multipartUploadHandler = (file: Blob, progress: (v: number) => any) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', resultUrl);
      xhr.setRequestHeader('token', localStorage.get('token') || '');

      xhr.upload.onprogress = function (e) {
        progress && progress((e.loaded / e.total) * 100);
      };

      xhr.onload = function () {
        if (xhr.status === 403) {
          reject(`HTTP Error: ${xhr.status}`);
          return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
          reject(`HTTP Error: ${xhr.status}`);
          return;
        }

        const json = JSON.parse(xhr.responseText);

        if (!json || json.header.code !== 200) {
          reject(`Invalid JSON: ${xhr.responseText}`);
          return;
        }

        resolve(json.body);
      };

      xhr.onerror = function () {
        reject(`Image upload failed due to a XHR Transport error. Code: ${xhr.status}`);
      };

      const formData = new FormData();
      formData.append('file', file);
      xhr.send(formData);
    });

  return multipartUploadHandler;
};

export default getMultipartUploadHandler;
