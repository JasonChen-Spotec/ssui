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
function ContinueInvestFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18 12.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-1.06 3.25l1.5 1.5H15v1.5h3.44l-1.5 1.5L18 21.31l2.78-2.78a.75.75 0 000-1.06L18 14.69l-1.06 1.06z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M1.048 14.948c.496.325 1.04.593 1.593.814 1.804.721 4.145 1.119 6.62 1.119.448 0 .892-.015 1.328-.04A7.56 7.56 0 0010.5 18a7.47 7.47 0 00.76 3.293c.045.136.092.27.144.403a20.05 20.05 0 01-2.142.114c-4.537 0-8.214-1.472-8.214-3.287v-3.575zM17.477 10.52a7.5 7.5 0 00-6.155 4.065 20.1 20.1 0 01-2.06.105c-4.537 0-8.214-1.471-8.214-3.286V7.83a9.05 9.05 0 001.593.814c1.804.721 4.145 1.119 6.62 1.119 2.476 0 4.819-.398 6.623-1.12a9.053 9.053 0 001.593-.813v2.69zM9.262 1c3.402 0 6.322.828 7.57 2.007.415.393.645.826.645 1.28C17.476 6.1 13.798 7.57 9.262 7.57s-8.214-1.47-8.214-3.285C1.048 2.472 4.725 1 9.262 1z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ContinueInvestFilled.displayName = 'ContinueInvestFilled';
exports["default"] = ContinueInvestFilled;