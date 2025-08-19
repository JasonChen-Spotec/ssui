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
function CallRecordOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.808 2.877a3 3 0 00-2.708 0c-.433.22-.809.596-1.243 1.031l-.321.321c-.466.466-.823.823-1.094 1.305a4.365 4.365 0 00-.512 1.97c.001.552.116.955.263 1.474l.016.056a20.038 20.038 0 005.129 8.718 20.038 20.038 0 008.717 5.128l.057.016c.519.148.921.262 1.473.264a4.364 4.364 0 001.971-.513c.482-.27.839-.628 1.304-1.093l.321-.321c.436-.435.812-.81 1.031-1.243a3 3 0 000-2.708c-.219-.433-.595-.808-1.03-1.243l-.354-.353c-.287-.287-.533-.534-.8-.707a3 3 0 00-3.27 0c-.267.173-.513.42-.8.707l-.062.063a6.299 6.299 0 01-.11.107l-.005.001-.006.001-.03-.014-.076-.036a13.602 13.602 0 01-3.735-2.652 13.601 13.601 0 01-2.689-3.812l-.013-.03v-.006l.001-.005c.02-.022.05-.051.108-.109l.063-.063c.287-.286.534-.533.707-.8a3 3 0 000-3.27c-.173-.266-.42-.513-.707-.799l-.354-.354c-.434-.435-.81-.812-1.242-1.03zM5.002 4.662a1 1 0 01.903 0c.107.054.24.17.827.756l.195.195c.385.386.464.473.507.538a1 1 0 010 1.09c-.043.066-.122.153-.507.539l-.024.023c-.09.09-.204.204-.302.34a2.045 2.045 0 00-.294 1.724c.047.16.11.292.16.395l.012.024a15.602 15.602 0 003.04 4.284 15.604 15.604 0 004.285 3.04l.024.012c.102.05.234.113.395.16a2.045 2.045 0 001.724-.294c.136-.098.25-.212.34-.302l.023-.023c.386-.386.472-.465.538-.508a1 1 0 011.09 0c.066.043.153.122.538.508l.195.195c.587.587.703.72.756.827a1 1 0 010 .902c-.053.107-.169.24-.756.827l-.157.158c-.56.56-.723.71-.938.832-.249.14-.7.257-.985.256-.254 0-.407-.038-.99-.204a18.04 18.04 0 01-7.85-4.618 18.038 18.038 0 01-4.618-7.85c-.165-.582-.203-.735-.203-.99-.001-.285.116-.736.256-.985.12-.215.272-.377.832-.937l.158-.158c.587-.587.72-.702.826-.756z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M12 5h10V3H12v2zM15 10h7V8h-7v2z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
CallRecordOutlined.displayName = 'CallRecordOutlined';
exports["default"] = CallRecordOutlined;