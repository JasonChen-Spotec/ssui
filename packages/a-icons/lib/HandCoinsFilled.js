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
function HandCoinsFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M9.4 12.5h1.927c1.06 0 2.076.424 2.826 1.18.75.754 1.17 1.779 1.17 2.846H9.106l.001.895h7.106v-.895a5.018 5.018 0 00-.787-2.684h2.564c.84 0 1.662.24 2.372.69A4.464 4.464 0 0122 16.394C19.9 19.186 16.498 21 12.66 21c-2.453 0-4.531-.528-6.219-1.454v-8.325A6.167 6.167 0 019.4 12.5zm-3.847 6.71a.898.898 0 01-.26.633.885.885 0 01-.628.262H2.888a.885.885 0 01-.628-.262.898.898 0 01-.26-.633v-8.052c0-.237.094-.465.26-.633a.885.885 0 01.628-.262h1.777c.235 0 .461.094.628.262.166.168.26.396.26.633v8.053zM17.1 6.684c.707 0 1.385.283 1.885.786a2.694 2.694 0 010 3.796 2.655 2.655 0 01-3.769 0 2.694 2.694 0 010-3.796 2.655 2.655 0 011.884-.786zM10.883 4c.706 0 1.384.283 1.884.786a2.694 2.694 0 010 3.796 2.655 2.655 0 01-3.769 0 2.694 2.694 0 010-3.796A2.655 2.655 0 0110.883 4z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
HandCoinsFilled.displayName = 'HandCoinsFilled';
exports["default"] = HandCoinsFilled;