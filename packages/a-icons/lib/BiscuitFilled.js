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
function BiscuitFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.213 7.767a2.27 2.27 0 01-.573 2.553 2.27 2.27 0 00-.01 3.36A2.27 2.27 0 0120 17.63 2.27 2.27 0 0017.63 20a2.27 2.27 0 01-3.9 1.63 2.27 2.27 0 00-3.36 0 2.27 2.27 0 01-4-1.63A2.27 2.27 0 004 17.63a2.27 2.27 0 01-1.63-3.9 2.27 2.27 0 000-3.36 2.27 2.27 0 011.63-4A2.27 2.27 0 006.37 4a2.27 2.27 0 013.95-1.63 2.27 2.27 0 003.36 0A2.27 2.27 0 0117.63 4 2.27 2.27 0 0020 6.37a2.27 2.27 0 012.213 1.397zM10.16 9.75A.75.75 0 009.41 9a.76.76 0 00-.75.75.75.75 0 001.5 0zM14.68 15a.75.75 0 11.75-.75.76.76 0 01-.75.75zm-5.03.41l5.76-5.77v.01a.75.75 0 00-1.06-1.06l-5.76 5.76a.74.74 0 000 1.06.71.71 0 00.53.22.74.74 0 00.53-.22z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
BiscuitFilled.displayName = 'BiscuitFilled';
exports["default"] = BiscuitFilled;