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
function LoopFolderFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.949 6.194h-5.022a2.097 2.097 0 01-2.097-2.097A2.097 2.097 0 009.733 2H4.711A3.711 3.711 0 001 5.7v12.424a3.711 3.711 0 003.711 3.722H18.95a3.722 3.722 0 003.711-3.722V9.915a3.722 3.722 0 00-3.711-3.721zm-1.772 12.36H15.94a.776.776 0 01-.63 1.237.797.797 0 01-.534-.21l-1.321-1.236a.797.797 0 010-1.143l1.3-1.237a.786.786 0 011.111 0c.255.27.281.684.063.985h1.248a1.688 1.688 0 001.814-1.698.786.786 0 111.572 0 3.26 3.26 0 01-3.386 3.302zm1.845-4.403l1.3-1.237v-.021a.797.797 0 000-1.143l-1.31-1.237a.787.787 0 00-1.175 1.048H16.6a3.26 3.26 0 00-3.386 3.271.786.786 0 101.572 0 1.688 1.688 0 011.814-1.698h1.258a.776.776 0 001.164 1.017z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
LoopFolderFilled.displayName = 'LoopFolderFilled';
exports["default"] = LoopFolderFilled;