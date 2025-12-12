"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQRCode = void 0;
var qrcode_1 = __importDefault(require("qrcode"));
var react_1 = require("react");
var useQRCode = function useQRCode(value, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = __read((0, react_1.useState)(''), 2),
    dataURL = _a[0],
    setDataURL = _a[1];
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