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
function DiamondFileFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M14.242 9.073h4.62a.56.56 0 00.39-1l-5.55-5.45a.56.56 0 00-1 .39v4.57a1.49 1.49 0 001.54 1.49z",
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.072 13.933h3.43a.4.4 0 01.41.27l.6 2.89-2.73 2-2.71-2.07.61-2.78a.4.4 0 01.39-.31zm1.74 3.47l1-1v-.03a.75.75 0 000-1.03.74.74 0 00-1.06 0l-1 1a.75.75 0 000 1.06.79.79 0 00.53.22.77.77 0 00.53-.22z",
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.142 10.173h4.78a.5.5 0 01.5.5v6.92a4 4 0 01-4 4h-6.89a4 4 0 01-4-4V6.433a4 4 0 014-4h2.67a.51.51 0 01.5.5v4.78a2.45 2.45 0 002.44 2.46zm-3.5 10.15l2.73-2a1.47 1.47 0 00.57-1.58l-.59-2.81a1.89 1.89 0 00-1.8-1.53h-3.48a1.89 1.89 0 00-1.9 1.53l-.56 2.71c-.21.618.01 1.3.54 1.68l2.73 2a1.48 1.48 0 001.76 0z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
DiamondFileFilled.displayName = 'DiamondFileFilled';
exports["default"] = DiamondFileFilled;