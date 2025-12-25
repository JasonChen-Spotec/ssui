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
var React = __importStar(require("react"));
var icon_1 = __importDefault(require("a-base-icon/lib/icon"));
function ShapeFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.862 1.017C9.07 1 9.316 1 9.568 1h4.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.183.541.201.77l.01.146c.394.013.733.045 1.042.128a4 4 0 012.829 2.829C21 6.476 21 7.067 21 7.862v9.38c0 .804 0 1.469-.044 2.01-.046.562-.145 1.079-.392 1.564a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 18.71 3 18.046 3 17.242v-9.38c0-.795 0-1.386.136-1.897a4 4 0 012.829-2.829c.31-.083.648-.115 1.043-.128.002-.05.005-.1.009-.146.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.272-.138.541-.182.77-.201zM15 3.6c0-.297 0-.459-.01-.575l-.001-.014h-.014A8.187 8.187 0 0014.4 3H9.6c-.296 0-.459 0-.575.01l-.013.001-.002.014C9 3.14 9 3.303 9 3.6v.8c0 .297 0 .459.01.575l.002.014h.013C9.14 5 9.304 5 9.6 5h4.8c.297 0 .459 0 .575-.01l.014-.001v-.014C15 4.86 15 4.697 15 4.4v-.8zM7 8.705h10v2H7v-2zm0 4h8v2H7v-2zm0 4h4v2H7v-2z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ShapeFilled.displayName = 'ShapeFilled';
exports["default"] = ShapeFilled;