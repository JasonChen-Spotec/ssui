function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }
  if (!value || !value.then) {
    value = Promise.resolve(value);
  }
  return then ? value.then(then) : value;
}
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
function _rethrow(thrown, value) {
  if (thrown) throw value;
  return value;
}
function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }
  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }
  return finalizer(false, result);
}
function _empty() {}
function _continueIgnored(value) {
  if (value && value.then) {
    return value.then(_empty);
  }
}
function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
var htmlToPdf = _async(function (element, options) {
  var _options$heightPerPag = options.heightPerPage,
    heightPerPage = _options$heightPerPag === void 0 ? 840 : _options$heightPerPag,
    _options$fileName = options.fileName,
    fileName = _options$fileName === void 0 ? 'document.pdf' : _options$fileName,
    _options$html2canvasO = options.html2canvasOptions,
    html2canvasOptions = _options$html2canvasO === void 0 ? {} : _options$html2canvasO,
    _options$jsPDFOptions = options.jsPDFOptions,
    jsPDFOptions = _options$jsPDFOptions === void 0 ? {} : _options$jsPDFOptions,
    onSuccess = options.onSuccess,
    onError = options.onError,
    onSettled = options.onSettled,
    onBeforeCapture = options.onBeforeCapture;
  if (!element) {
    return;
  }
  var CANVAS_CHROME_FF_LIMIT = 32767;
  var CANVAS_SAFARI_LIMIT = 4096;
  element.style.gap = '0px';
  var MAX_CANVAS_HEIGHT = navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Firefox') ? CANVAS_CHROME_FF_LIMIT % heightPerPage * heightPerPage : CANVAS_SAFARI_LIMIT % heightPerPage * heightPerPage;
  onBeforeCapture == null || onBeforeCapture();
  return _continueIgnored(_finallyRethrows(function () {
    return _catch(function () {
      var pdf = new JsPDF(_extends({
        orientation: 'l',
        unit: 'px',
        format: [element.offsetWidth, heightPerPage],
        compress: true
      }, jsPDFOptions));
      var totalHeight = element.scrollHeight;
      var totalWidth = element.scrollWidth;
      var capturedHeight = 0;
      var canvasPromises = [];
      while (capturedHeight < totalHeight) {
        var remainingHeight = totalHeight - capturedHeight;
        var captureHeight = Math.min(remainingHeight, MAX_CANVAS_HEIGHT);
        var canvasPromise = html2canvas(element, _extends({
          logging: false,
          windowWidth: totalWidth,
          windowHeight: totalHeight,
          x: 0,
          y: capturedHeight,
          width: totalWidth,
          height: captureHeight
        }, html2canvasOptions));
        canvasPromises.push(canvasPromise);
        capturedHeight += captureHeight;
      }
      return _await(Promise.all(canvasPromises), function (canvases) {
        canvases.forEach(function (canvas) {
          var contentWidth = canvas.width;
          var contentHeight = canvas.height;
          var pageHeight = contentWidth / element.offsetWidth * heightPerPage;
          var position = 0;
          var imgWidth = element.offsetWidth;
          var imgHeight = element.offsetWidth / contentWidth * contentHeight;
          var imgData = canvas.toDataURL('image/jpeg');
          if (contentHeight < pageHeight) {
            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
          } else {
            while (contentHeight > 0) {
              pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
              contentHeight -= pageHeight;
              position -= heightPerPage;
              if (contentHeight > 0) {
                pdf.addPage();
              }
            }
          }
        });
        pdf.save(fileName);
        onSuccess == null || onSuccess();
      });
    }, function (error) {
      onError == null || onError(error);
    });
  }, function (_wasThrown, _result) {
    onSettled == null || onSettled();
    return _rethrow(_wasThrown, _result);
  }));
});
export default htmlToPdf;