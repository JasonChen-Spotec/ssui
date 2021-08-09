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
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
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

var react_1 = __importStar(require("react"));

var qrcode_1 = __importDefault(require("qrcode"));

var useMount_1 = __importDefault(require("ahooks/lib/useMount"));

var isFunction_1 = __importDefault(require("lodash/isFunction"));

var ReactQRcode = function ReactQRcode(props) {
  var value = props.value,
      method = props.method,
      options = props.options,
      getCanvasInstance = props.getCanvasInstance;
  var domElRef = react_1.useRef(null);
  var defaultOptions = {
    errorCorrectionLevel: 'H',
    margin: 0,
    width: 134
  };

  var finalyOptions = __assign(__assign({}, defaultOptions), options);

  useMount_1["default"](function () {
    qrcode_1["default"][method](value, finalyOptions, function (err, result) {
      if (err) {
        throw err;
      }

      ;
      isFunction_1["default"](getCanvasInstance) && getCanvasInstance(result);
      domElRef.current.appendChild(result);
    });
  });
  return react_1["default"].createElement("div", {
    ref: domElRef
  });
};

ReactQRcode.defaultProps = {
  value: '',
  method: 'toCanvas',
  options: {}
};
exports["default"] = ReactQRcode;