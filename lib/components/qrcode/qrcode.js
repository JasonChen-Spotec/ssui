"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _qrcode = _interopRequireDefault(require("qrcode"));

var _useMount = _interopRequireDefault(require("ahooks/lib/useMount"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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