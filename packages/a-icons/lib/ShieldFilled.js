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
function ShieldFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.4 5.52l-5.89-3.28a3.12 3.12 0 00-3 0L4.6 5.52A3.08 3.08 0 003 8.23v6.35c-.003.26.034.52.11.77a3.26 3.26 0 00-.93 2.31 3.31 3.31 0 001 2.36l2.32 2.21a2.72 2.72 0 003.77 0l1-.91.62-.59a3.14 3.14 0 002.69-.16l5.89-3.28A3.1 3.1 0 0021 14.58V8.23a3.08 3.08 0 00-1.6-2.71zM10.5 19l-1 1-.32.3-1 .92a1.22 1.22 0 01-1.69 0L4.21 19a1.84 1.84 0 01-.09-2.49l.09-.11a1.85 1.85 0 012.61 0l.54.54.54-.54a1.8 1.8 0 011.3-.54c.488 0 .956.194 1.3.54a1.85 1.85 0 010 2.6zm2.76-7.85l4.41-2.45A.84.84 0 0018 7.56a.82.82 0 00-1.15-.32l-4.41 2.45a1 1 0 01-.9 0L7.13 7.24A.82.82 0 006 7.56a.84.84 0 00.33 1.14l4.41 2.45c.136.065.277.122.42.17v2.26a.84.84 0 001.68 0v-2.26a3.7 3.7 0 00.42-.17z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ShieldFilled.displayName = 'ShieldFilled';
exports["default"] = ShieldFilled;