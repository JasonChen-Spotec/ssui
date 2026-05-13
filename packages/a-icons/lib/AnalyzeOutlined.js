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
function AnalyzeOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M4 12.6c0-.297.001-.459.01-.576l.003-.012.011-.001C4.141 12 4.304 12 4.6 12H8v8H4.6c-.297 0-.46-.001-.576-.01l-.011-.003-.002-.011A8.102 8.102 0 014 19.4v-6.8zm6-8c0-.297.001-.459.01-.576l.003-.012.011-.001A8.1 8.1 0 0110.6 4h2.8c.297 0 .459.001.576.01l.012.002.001.012c.01.117.011.28.011.576V20h-4V4.6zm10 14.8a8.04 8.04 0 01-.012.587l-.012.002c-.117.01-.28.011-.576.011H16V8h3.4c.297 0 .459.001.576.01l.012.002.001.012c.01.117.011.28.011.576v10.8zM8 10H4.6c-.264 0-.522-.001-.739.017a2.023 2.023 0 00-.77.2c-.328.169-.604.424-.796.737l-.077.138-.087.203c-.072.2-.1.395-.114.566-.018.217-.017.475-.017.739v6.8c0 .264-.001.522.017.739.018.228.063.498.2.77a2 2 0 00.875.873c.271.139.54.183.77.201.216.018.474.017.738.017h14.8c.264 0 .522.001.739-.017.228-.018.498-.063.77-.2a2 2 0 00.873-.875c.138-.271.183-.54.201-.77.018-.216.017-.474.017-.738V8.6c0-.264.001-.522-.017-.739a2.023 2.023 0 00-.2-.77 2 2 0 00-.875-.873 2.022 2.022 0 00-.77-.201C19.923 5.999 19.665 6 19.4 6H16V4.6c0-.264.001-.522-.017-.739a2.023 2.023 0 00-.2-.77 2 2 0 00-.875-.873 2.022 2.022 0 00-.77-.201C13.923 1.999 13.665 2 13.4 2h-2.8c-.264 0-.522-.001-.739.017a2.022 2.022 0 00-.77.2 2 2 0 00-.796.737l-.077.138-.087.203c-.072.2-.1.395-.114.566C7.999 4.078 8 4.336 8 4.6V10z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
AnalyzeOutlined.displayName = 'AnalyzeOutlined';
exports["default"] = AnalyzeOutlined;