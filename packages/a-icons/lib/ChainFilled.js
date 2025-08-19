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
function ChainFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("rect", {
      x: 6.9,
      y: 16.3,
      width: 0.8,
      height: 0.8,
      rx: 0.23,
      fill: "currentColor"
    }), React.createElement("rect", {
      x: 16.3,
      y: 16.3,
      width: 0.8,
      height: 0.8,
      rx: 0.23,
      fill: "currentColor"
    }), React.createElement("rect", {
      x: 6.9,
      y: 6.9,
      width: 0.8,
      height: 0.8,
      rx: 0.23,
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.56 2.44H8.44a6 6 0 00-6 6v7.12a6 6 0 006 6h7.12a6 6 0 006-6V8.44a6 6 0 00-6-6zM5.35 7.13c0-.983.797-1.78 1.78-1.78h.35a1.79 1.79 0 011.66 1.18h3.57a.78.78 0 010 1.55H9.14a1.78 1.78 0 01-1.66 1.17h-.35a1.78 1.78 0 01-1.78-1.77v-.35zm2.13 11.52a1.78 1.78 0 001.77-1.78v-.35a1.78 1.78 0 00-1.17-1.66v-3.57a.77.77 0 00-.78-.77.76.76 0 00-.77.77v3.57a1.79 1.79 0 00-1.18 1.66v.35c0 .983.797 1.78 1.78 1.78h.35zm11.17-1.78a1.78 1.78 0 01-1.78 1.78h-.35a1.79 1.79 0 01-1.66-1.18h-3.57a.76.76 0 01-.77-.77.77.77 0 01.77-.78h3.57a1.78 1.78 0 011.66-1.17h.35c.98 0 1.774.79 1.78 1.77v.35zm-1.18-7.73a1.79 1.79 0 001.18-1.66v-.35a1.78 1.78 0 00-1.78-1.78h-.35c-.98.006-1.77.8-1.77 1.78v.35a1.78 1.78 0 001.17 1.66v3.57a.78.78 0 001.55 0V9.14z",
      fill: "currentColor"
    }), React.createElement("rect", {
      x: 16.3,
      y: 6.9,
      width: 0.8,
      height: 0.8,
      rx: 0.23,
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ChainFilled.displayName = 'ChainFilled';
exports["default"] = ChainFilled;