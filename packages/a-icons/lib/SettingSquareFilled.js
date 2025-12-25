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
function SettingSquareFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M12 14.16c1.142 0 2.068-.96 2.068-2.144 0-1.184-.926-2.144-2.068-2.144s-2.068.96-2.068 2.144c0 1.184.926 2.144 2.068 2.144z",
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 2a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4H6zm4.946 3.834a.584.584 0 00-.684-.312 6.433 6.433 0 00-2.687 1.559.629.629 0 00-.128.72c.078.162.121.345.121.54 0 .677-.529 1.225-1.182 1.225H6.37a.593.593 0 00-.572.429 7.003 7.003 0 00-.166 3.378c.06.307.335.517.637.487.038-.004.078-.006.117-.006.653 0 1.182.548 1.182 1.225 0 .301-.104.575-.278.789a.63.63 0 00.026.82 6.463 6.463 0 002.827 1.786.587.587 0 00.731-.4c.152-.495.6-.852 1.126-.852.526 0 .973.357 1.126.852a.587.587 0 00.732.4 6.463 6.463 0 002.826-1.786.63.63 0 00.026-.82 1.244 1.244 0 01-.278-.79c0-.676.529-1.224 1.182-1.224.04 0 .079.002.117.006.301.03.576-.18.637-.487a7.01 7.01 0 00-.166-3.378.593.593 0 00-.572-.429h-.016c-.653 0-1.182-.548-1.182-1.225 0-.195.044-.378.12-.54a.628.628 0 00-.127-.72 6.433 6.433 0 00-2.687-1.559.584.584 0 00-.684.312c-.197.399-.595.67-1.054.67-.459 0-.857-.271-1.054-.67z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SettingSquareFilled.displayName = 'SettingSquareFilled';
exports["default"] = SettingSquareFilled;