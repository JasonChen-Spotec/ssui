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
function LocationOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      d: "M19 10a7 7 0 10-14 0c0 1.892.853 3.678 2.292 5.547 1.28 1.662 2.937 3.285 4.708 5.043 1.77-1.758 3.428-3.381 4.708-5.043C18.148 13.678 19 11.892 19 10zm-5 0a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0zm5 0c0 2.526-1.147 4.74-2.708 6.767-1.551 2.014-3.618 3.973-5.585 5.94a1 1 0 01-1.414 0c-1.967-1.967-4.034-3.926-5.585-5.94C4.148 14.74 3 12.527 3 10a9 9 0 0118 0z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
LocationOutlined.displayName = 'LocationOutlined';
exports["default"] = LocationOutlined;