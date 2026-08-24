var defaultOptions = {};
var downloadFile = function downloadFile(url, options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  var _options = options,
    fileName = _options.fileName,
    onProgress = _options.onProgress;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response);
      var resultFileName = fileName;
      var _url$split = url.split('?'),
        _url$split$ = _url$split[0],
        path = _url$split$ === void 0 ? '' : _url$split$;
      if (!resultFileName) {
        resultFileName = path.split('/').pop();
      } else {
        var _path$split$pop;
        var originalExt = (_path$split$pop = path.split('/').pop()) == null ? void 0 : _path$split$pop.split('.').pop();
        // 如果提供的 fileName 没有扩展名，则添加原始扩展名
        if (originalExt && !(fileName != null && fileName.toLowerCase().endsWith("." + originalExt.toLowerCase()))) {
          resultFileName = fileName + "." + originalExt;
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
        resultEvent.percent = e.loaded / e.total * 100;
      }
      onProgress == null || onProgress(resultEvent);
    };
    xhr.onerror = function (e) {
      reject(e);
    };
    xhr.send();
  });
};
export default downloadFile;