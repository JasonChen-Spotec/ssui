"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQRCode = void 0;
var tslib_1 = require("tslib");
var qrcode_1 = tslib_1.__importDefault(require("qrcode"));
var react_1 = require("react");
var useQRCode = function useQRCode(value, options) {
  if (options === void 0) {
    options = {};
  }
  var _ref = (0, react_1.useState)(''),
    dataURL = _ref[0],
    setDataURL = _ref[1];
  (0, react_1.useEffect)(function () {
    if (!value) {
      setDataURL('');
      return;
    }
    qrcode_1["default"].toDataURL(value, options, function (err, url) {
      if (err) {
        throw err;
      }
      setDataURL(url);
    });
  }, [value, options]);
  return dataURL;
};
exports.useQRCode = useQRCode;
exports["default"] = exports.useQRCode;