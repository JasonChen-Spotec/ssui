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
function SignalStopReviewOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.933 15.933 0 0012 5c-3.09 0-5.974.875-8.42 2.392l8.42 10.425L18 10.388v3.183l-5.222 6.466a1 1 0 01-1.556 0L1.319 7.774c-.347-.43-.282-1.061.166-1.384A17.918 17.918 0 0112.001 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SignalStopReviewOutlined.displayName = 'SignalStopReviewOutlined';
exports["default"] = SignalStopReviewOutlined;