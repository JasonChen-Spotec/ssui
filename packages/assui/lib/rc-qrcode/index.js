"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQrcode = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var qrcode_1 = tslib_1.__importDefault(require("qrcode"));
var useMount_1 = tslib_1.__importDefault(require("ahooks/lib/useMount"));
var useQrcode_1 = tslib_1.__importDefault(require("./useQrcode"));
exports.useQrcode = useQrcode_1["default"];
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
  (0, useMount_1["default"])(function () {
    qrcode_1["default"].toCanvas(value, finallyOptions, function (err, result) {
      var _domElRef$current;
      if (err) {
        throw err;
      }
      getCanvasInstance && getCanvasInstance(result);
      (_domElRef$current = domElRef.current) == null || _domElRef$current.appendChild(result);
    });
  });
  return (0, jsx_runtime_1.jsx)("div", {
    ref: domElRef
  });
};
RcQrcode.useQrcode = useQrcode_1["default"];
exports["default"] = RcQrcode;