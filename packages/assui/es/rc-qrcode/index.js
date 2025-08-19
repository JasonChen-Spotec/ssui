var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import useMount from 'ahooks/es/useMount';
import QRCode from 'qrcode';
import * as React from 'react';
import useQrcode from './useQrcode';
var initEmptyObject = {};
var RcQrcode = function RcQrcode(props) {
  var _a = props.value,
    value = _a === void 0 ? '' : _a,
    _b = props.options,
    options = _b === void 0 ? initEmptyObject : _b,
    getCanvasInstance = props.getCanvasInstance;
  var domElRef = React.useRef(null);
  var defaultOptions = {
    errorCorrectionLevel: 'H',
    margin: 0,
    width: 134,
  };
  var finallyOptions = __assign(__assign({}, defaultOptions), options);
  useMount(function () {
    QRCode.toCanvas(value, finallyOptions, function (err, result) {
      var _a;
      if (err) {
        throw err;
      }
      getCanvasInstance && getCanvasInstance(result);
      (_a = domElRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(result);
    });
  });
  return /*#__PURE__*/ React.createElement('div', {
    ref: domElRef,
  });
};
RcQrcode.useQrcode = useQrcode;
export default RcQrcode;
export { useQrcode };
