var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var defaultOptions = {};
var downloadFile = function downloadFile(url, options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  var fileName = options.fileName,
    onProgress = options.onProgress;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var _a;
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response);
      var resultFileName = fileName;
      var _b = __read(url.split('?'), 1),
        path = _b[0];
      if (!resultFileName) {
        resultFileName = path.split('/').pop();
      } else {
        var originalExt =
          (_a = path.split('/').pop()) === null || _a === void 0
            ? void 0
            : _a.split('.').pop();
        // 如果提供的 fileName 没有扩展名，则添加原始扩展名
        if (
          originalExt &&
          !(fileName === null || fileName === void 0
            ? void 0
            : fileName.toLowerCase().endsWith('.'.concat(originalExt.toLowerCase())))
        ) {
          resultFileName = ''.concat(fileName, '.').concat(originalExt);
        }
      }
      a.download = decodeURIComponent(resultFileName);
      a.click();
      window.URL.revokeObjectURL(a.href);
      resolve(xhr.response);
    };
    xhr.onprogress = function (e) {
      var resultEvent = e;
      if (e.total > 0) {
        resultEvent.percent = (e.loaded / e.total) * 100;
      }
      onProgress === null || onProgress === void 0 ? void 0 : onProgress(resultEvent);
    };
    xhr.onerror = function (e) {
      reject(e);
    };
    xhr.send();
  });
};
export default downloadFile;
