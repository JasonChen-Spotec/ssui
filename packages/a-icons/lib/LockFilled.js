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
function LockFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M18.222 10.2h.89c.235 0 .461.095.628.264.166.168.26.397.26.636v9a.906.906 0 01-.26.636.883.883 0 01-.629.264H4.89a.883.883 0 01-.629-.264A.906.906 0 014 20.1v-9c0-.239.094-.468.26-.636a.883.883 0 01.629-.264h.889v-.9c0-.827.16-1.647.473-2.41a6.306 6.306 0 011.35-2.045A6.218 6.218 0 019.618 3.48a6.156 6.156 0 014.762 0c.755.316 1.441.78 2.019 1.365a6.306 6.306 0 011.349 2.044c.312.764.473 1.584.473 2.411v.9zm-1.778 0v-.9a4.529 4.529 0 00-1.301-3.182A4.417 4.417 0 0012 4.8c-1.179 0-2.31.474-3.143 1.318A4.529 4.529 0 007.556 9.3v.9h8.888zm-5.333 3.6v3.6h1.778v-3.6H11.11z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
LockFilled.displayName = 'LockFilled';
exports["default"] = LockFilled;