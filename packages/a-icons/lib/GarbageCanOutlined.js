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
function GarbageCanOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 2h8v2H8V2zM4.992 5H2v2h2.064l.642 9.625c.05.756.092 1.381.167 1.89.078.53.201 1.014.458 1.465a4 4 0 001.731 1.62c.468.226.959.317 1.493.36.512.04 1.139.04 1.896.04h3.098c.757 0 1.384 0 1.896-.04.534-.043 1.026-.134 1.493-.36a4 4 0 001.73-1.62c.258-.451.381-.935.46-1.465.074-.509.116-1.134.166-1.89L19.936 7H22V5H4.992zm12.94 2H6.068l.63 9.453c.054.805.09 1.35.153 1.771.06.41.133.619.217.766a2 2 0 00.865.81c.153.074.367.133.779.166.424.033.97.034 1.778.034h3.018c.807 0 1.354 0 1.778-.034.412-.033.626-.092.779-.166a2 2 0 00.865-.81c.084-.147.157-.357.217-.766.062-.42.1-.966.153-1.771L17.93 7zM11 9.5v7H9v-7h2zm4 0v7h-2v-7h2z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
GarbageCanOutlined.displayName = 'GarbageCanOutlined';
exports["default"] = GarbageCanOutlined;