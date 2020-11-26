"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _qrcode = _interopRequireDefault(require("qrcode"));

var _useMount = _interopRequireDefault(require("ahooks/lib/useMount"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var ReactQRcode = function ReactQRcode(props) {
  var value = props.value,
      method = props.method,
      options = props.options,
      getCanvasInstance = props.getCanvasInstance;
  var domElRef = (0, _react.useRef)(null);
  var defaultOptions = {
    errorCorrectionLevel: 'H',
    margin: 0,
    width: 134
  };
  var finalyOptions = Object.assign({}, defaultOptions, options);
  (0, _useMount["default"])(function () {
    _qrcode["default"][method](value, finalyOptions, function (err, result) {
      if (err) {
        throw err;
      }

      ;
      (0, _isFunction["default"])(getCanvasInstance) && getCanvasInstance(result);
      domElRef.current.appendChild(result);
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: domElRef
  });
};

ReactQRcode.defaultProps = {
  value: '',
  method: 'toCanvas',
  options: {}
};
var _default = ReactQRcode;
exports["default"] = _default;