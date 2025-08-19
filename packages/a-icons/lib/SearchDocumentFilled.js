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
function SearchDocumentFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M14.17 9.14h4.62a.56.56 0 00.39-1l-5.55-5.45a.56.56 0 00-1 .39v4.57a1.49 1.49 0 001.54 1.49z",
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.07 10.24h4.78a.5.5 0 01.5.5v6.92a4 4 0 01-4 4H8.46a4 4 0 01-4-4V6.5a4 4 0 014-4h2.67a.51.51 0 01.5.5v4.78a2.45 2.45 0 002.44 2.46zm-5.22 8.04a2.87 2.87 0 001.51.44l.04-.05a2.84 2.84 0 10-2.84-2.84c.002.461.119.915.34 1.32a.996.996 0 00-.13.09l-1.06 1.1a.75.75 0 00.54 1.27.7.7 0 00.54-.23l1.06-1.1z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M10.36 14.53a1.35 1.35 0 10-.02 2.7 1.35 1.35 0 00.02-2.7z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SearchDocumentFilled.displayName = 'SearchDocumentFilled';
exports["default"] = SearchDocumentFilled;