"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useQrcode = void 0;
var React = __importStar(require("react"));
var qrcode_1 = __importDefault(require("qrcode"));
var useMount_1 = __importDefault(require("ahooks/lib/useMount"));
var useQrcode_1 = __importDefault(require("./useQrcode"));
exports.useQrcode = useQrcode_1["default"];
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
    width: 134
  };
  var finallyOptions = __assign(__assign({}, defaultOptions), options);
  (0, useMount_1["default"])(function () {
    qrcode_1["default"].toCanvas(value, finallyOptions, function (err, result) {
      var _a;
      if (err) {
        throw err;
      }
      getCanvasInstance && getCanvasInstance(result);
      (_a = domElRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(result);
    });
  });
  return React.createElement("div", {
    ref: domElRef
  });
};
RcQrcode.useQrcode = useQrcode_1["default"];
exports["default"] = RcQrcode;