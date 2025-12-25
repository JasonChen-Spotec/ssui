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
function CirclePointsTriangleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M11.925 7.22a2.23 2.23 0 100-4.46 2.23 2.23 0 000 4.46zM4.925 21.09a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zM8.325 11.27c-.25.519-.4 1.098-.4 1.716v-.006.01-.004c.002 2.496.951 3.935 2.48 5.454.3.31.64.57 1 .82-.67.26-1.26.37-1.76.34-.66-.04-1.23-.3-1.73-.7a2.981 2.981 0 00-2.77-2.89c.06-1.96.98-3.29 2.19-4.16.31-.22.65-.41.99-.58z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M12.175 8.97c1.61.1 2.95 1.19 3.48 2.64.04-.17.08-.35.1-.52.17-1.27-.2-2.69-1.69-4.01-.55.56-1.31.91-2.15.91-.97 0-1.82-.47-2.37-1.18-.65.14-1.39.45-1.92 1.01-.49.51-.85 1.29-.7 2.5 1.67-1.02 3.65-1.42 5.24-1.35h.01z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M11.925 15.94c-1.63 0-2.95-1.32-2.95-2.95v-.01a2.949 2.949 0 115.04 2.08.259.259 0 01-.049.05l-.009.009a2.901 2.901 0 01-2.032.821z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M18.765 13.71c-.11-.75-.51-1.65-1.5-2.58 0 .05 0 .11-.01.16-.23 1.69-1.19 3.22-2.32 4.3-.73.85-1.8 1.39-3.01 1.39-.33 0-.65-.05-.97-.13.039.04.077.082.116.124.122.132.247.267.384.396 1.06 1.06 2.53 1.74 4.48 1.48.06-1.33.98-2.43 2.23-2.76.37-.47.75-1.35.6-2.39v.01z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M21.175 18.99a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
CirclePointsTriangleFilled.displayName = 'CirclePointsTriangleFilled';
exports["default"] = CirclePointsTriangleFilled;