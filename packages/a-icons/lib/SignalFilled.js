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
function SignalFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.24 2H10a8 8 0 00-8 8v4.24a8 8 0 008 8h4.24a8 8 0 008-8V10a8 8 0 00-8-8zm-.74 14.36a1.38 1.38 0 11-2.75 0 1.39 1.39 0 011.37-1.37 1.39 1.39 0 011.37 1.32l.01.05zM14.97 15a.73.73 0 00.6-.3.74.74 0 00-.15-1.06 5.57 5.57 0 00-6.61 0 .754.754 0 00.9 1.21 4 4 0 014.81 0 .78.78 0 00.45.15zm2.32-2.45a.75.75 0 01-1.05.14 6.69 6.69 0 00-4.1-1.4 6.82 6.82 0 00-4.12 1.41.76.76 0 01-1.05-.14.75.75 0 01.14-1 8.34 8.34 0 015-1.72 8.2 8.2 0 015 1.71.74.74 0 01.18 1zm1.1-1.84a.73.73 0 00.6-.29.75.75 0 00-.09-1.05 11 11 0 00-13.46 0 .76.76 0 00-.14 1.06.75.75 0 001 .13 9.47 9.47 0 0111.64 0 .74.74 0 00.45.15z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SignalFilled.displayName = 'SignalFilled';
exports["default"] = SignalFilled;