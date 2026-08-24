function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import QRCode from 'qrcode';
import useMount from "ahooks/es/useMount";
import useQrcode from './useQrcode';
var initEmptyObject = {};
var RcQrcode = function RcQrcode(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    _props$options = props.options,
    options = _props$options === void 0 ? initEmptyObject : _props$options,
    getCanvasInstance = props.getCanvasInstance;
  var domElRef = React.useRef(null);
  var defaultOptions = {
    errorCorrectionLevel: 'H',
    margin: 0,
    width: 134
  };
  var finallyOptions = _extends({}, defaultOptions, options);
  useMount(function () {
    QRCode.toCanvas(value, finallyOptions, function (err, result) {
      var _domElRef$current;
      if (err) {
        throw err;
      }
      getCanvasInstance && getCanvasInstance(result);
      (_domElRef$current = domElRef.current) == null || _domElRef$current.appendChild(result);
    });
  });
  return _jsx("div", {
    ref: domElRef
  });
};
RcQrcode.useQrcode = useQrcode;
export default RcQrcode;
export { useQrcode };