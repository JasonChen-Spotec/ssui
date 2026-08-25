import { localStorage } from 'aa-utils';
var getMultipartUploadHandler = function getMultipartUploadHandler(resultUrl) {
  var multipartUploadHandler = function multipartUploadHandler(file, progress) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', resultUrl);
      xhr.setRequestHeader('token', localStorage.get('token') || '');
      xhr.upload.onprogress = function (e) {
        progress == null || progress(e.loaded / e.total * 100);
      };
      xhr.onload = function () {
        if (xhr.status === 403) {
          reject("HTTP Error: " + xhr.status);
          return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
          reject("HTTP Error: " + xhr.status);
          return;
        }
        var json = JSON.parse(xhr.responseText);
        if ((json == null ? void 0 : json.header.code) !== 200) {
          reject("Invalid JSON: " + xhr.responseText);
          return;
        }
        resolve(json.body);
      };
      xhr.onerror = function () {
        reject("Image upload failed due to a XHR Transport error. Code: " + xhr.status);
      };
      var formData = new FormData();
      formData.append('file', file);
      xhr.send(formData);
    });
  };
  return multipartUploadHandler;
};
export default getMultipartUploadHandler;