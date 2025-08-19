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
function UnbindChainFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.276 2h7.448A6.276 6.276 0 0122 8.276v7.448A6.276 6.276 0 0115.724 22H8.276A6.276 6.276 0 012 15.724V8.276A6.276 6.276 0 018.276 2zm2.757 4.163a.785.785 0 00-1.569 0V7.33a.785.785 0 001.57 0V6.163zm6.062.742a3.12 3.12 0 00-4.411 0l-1.239 1.238a.785.785 0 001.11 1.11l1.238-1.239a1.55 1.55 0 012.193 2.193l-1.239 1.238a.784.784 0 101.11 1.11l1.238-1.239a3.12 3.12 0 000-4.411zm-9.502-.422a.785.785 0 10-1.11 1.11l.826.825A.785.785 0 108.42 7.31l-.826-.826zm-1.43 2.981a.785.785 0 000 1.57H7.33a.784.784 0 100-1.57H6.163zm3.09 3.09a.784.784 0 10-1.11-1.109l-1.238 1.239a3.12 3.12 0 004.411 4.411l1.239-1.238a.784.784 0 10-1.11-1.11l-1.238 1.239a1.55 1.55 0 11-2.193-2.193l1.239-1.238zm7.417.413a.784.784 0 100 1.569h1.167a.785.785 0 000-1.57H16.67zm.021 2.614a.784.784 0 10-1.11 1.11l.826.826a.784.784 0 101.11-1.11l-.826-.825zm-2.155 1.089a.784.784 0 10-1.57 0v1.167a.784.784 0 101.57 0V16.67z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
UnbindChainFilled.displayName = 'UnbindChainFilled';
exports["default"] = UnbindChainFilled;