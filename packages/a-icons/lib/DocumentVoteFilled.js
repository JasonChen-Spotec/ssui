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
function DocumentVoteFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M14.432 1c.252 0 .498 0 .707.017.228.018.498.063.77.2a2 2 0 01.873.875c.138.271.183.54.201.77l.01.146c.394.013.733.046 1.042.129a4 4 0 012.83 2.828C21 6.476 21 7.067 21 7.862v9.38c0 .804 0 1.469-.044 2.01-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.011-.044-.562-.046-1.078-.145-1.563-.392a4.002 4.002 0 01-1.748-1.748c-.248-.485-.347-1.002-.393-1.564C3 18.711 3 18.046 3 17.242v-9.38c0-.795 0-1.386.137-1.897a4 4 0 012.828-2.828c.31-.083.648-.116 1.043-.13.002-.05.005-.099.009-.146.018-.228.063-.498.2-.77a2 2 0 01.875-.873c.271-.139.542-.183.77-.201C9.07 1 9.316 1 9.568 1h4.864zM12 13.086l-2.5-2.5L8.086 12l2.5 2.5-2.5 2.5L9.5 18.414l2.5-2.5 2.5 2.5L15.914 17l-2.5-2.5 2.5-2.5-1.414-1.414-2.5 2.5zM9.6 3c-.296 0-.459.001-.576.01l-.012.002-.001.012C9 3.141 9 3.304 9 3.6v.8c0 .297.001.459.01.576l.002.012.012.001c.117.01.28.011.577.011h4.8c.296 0 .458-.001.575-.01l.012-.002.002-.012c.01-.117.01-.28.01-.576v-.8c0-.297 0-.459-.01-.576l-.002-.012-.012-.001A8.102 8.102 0 0014.4 3H9.6z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
DocumentVoteFilled.displayName = 'DocumentVoteFilled';
exports["default"] = DocumentVoteFilled;