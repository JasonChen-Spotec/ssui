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
function ChainFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.568 2h.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.004.044.007.09.009.138h8.016c.003-.048.005-.094.009-.138.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C18.07 2 18.316 2 18.568 2h.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.044.004-.09.007-.138.009v8.016c.048.003.094.005.138.009.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.208.017-.454.017-.706.017h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77 4.264 4.264 0 01-.009-.138H7.992a4.022 4.022 0 01-.009.138 2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201C5.93 22 5.684 22 5.432 22h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C2 19.93 2 19.684 2 19.432v-.864c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201.044-.004.09-.006.138-.009V7.992a4.033 4.033 0 01-.138-.009 2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C2 5.93 2 5.684 2 5.432v-.864c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C4.07 2 4.316 2 4.568 2zM6 7.992v8.016c.048.003.094.005.138.009.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.004.044.007.09.009.138h8.016c.003-.048.005-.094.009-.138.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201.044-.004.09-.006.138-.009V7.992a4.022 4.022 0 01-.138-.009 2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77A4.28 4.28 0 0116.008 6H7.992a4.036 4.036 0 01-.009.138 2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.044.004-.09.007-.138.009z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ChainFilled.displayName = 'ChainFilled';
exports["default"] = ChainFilled;