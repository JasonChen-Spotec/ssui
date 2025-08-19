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
function ChainOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.568 2H5.432c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.004.044.007.09.009.138h8.016c.003-.048.005-.094.009-.138.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C18.07 2 18.316 2 18.568 2h.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.044.004-.09.007-.138.009v8.016c.048.003.094.005.138.009.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.208.017-.454.017-.706.017h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77 4.264 4.264 0 01-.009-.138H7.992a4.022 4.022 0 01-.009.138 2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201C5.93 22 5.684 22 5.432 22h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C2 19.93 2 19.684 2 19.432v-.864c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201.044-.004.09-.006.138-.009V7.992a4.033 4.033 0 01-.138-.009 2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C2 5.93 2 5.684 2 5.432V4.6v-.032c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C4.07 2 4.316 2 4.568 2zM6 7.992v8.016c.048.003.094.005.138.009.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.004.044.007.09.009.138h8.016c.003-.048.005-.094.009-.138.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201.044-.004.09-.006.138-.009V7.992a4.022 4.022 0 01-.138-.009 2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77A4.28 4.28 0 0116.008 6H7.992a4.036 4.036 0 01-.009.138 2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.044.004-.09.007-.138.009zM6 4.6a8.184 8.184 0 00-.011-.589h-.014A8.185 8.185 0 005.4 4h-.8a8.186 8.186 0 00-.589.011v.014C4 4.14 4 4.303 4 4.6v.8a8.185 8.185 0 00.011.589h.014C4.14 6 4.303 6 4.6 6h.8a8.183 8.183 0 00.589-.011v-.014C6 5.86 6 5.697 6 5.4v-.8zm12 .8a8.205 8.205 0 00.012.589h.013c.116.01.279.011.575.011h.8a8.185 8.185 0 00.589-.011v-.014C20 5.86 20 5.697 20 5.4v-.8a8.205 8.205 0 00-.012-.589h-.013A8.187 8.187 0 0019.4 4h-.8a8.187 8.187 0 00-.588.011l-.002.014C18 4.14 18 4.303 18 4.6v.8zm.6 12.6a8.207 8.207 0 00-.588.012l-.002.013c-.01.116-.01.279-.01.575v.8a8.207 8.207 0 00.012.588l.013.002c.116.01.279.01.575.01h.8a8.207 8.207 0 00.589-.012v-.013c.01-.116.011-.279.011-.575v-.8a8.207 8.207 0 00-.012-.588l-.013-.002A8.207 8.207 0 0019.4 18h-.8zM6 18.6a8.185 8.185 0 00-.011-.588l-.014-.002A8.205 8.205 0 005.4 18h-.8a8.205 8.205 0 00-.589.012v.013C4 18.14 4 18.304 4 18.6v.8a8.187 8.187 0 00.011.588l.014.002c.116.01.278.01.575.01h.8a8.205 8.205 0 00.589-.012v-.013C6 19.86 6 19.696 6 19.4v-.8z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ChainOutlined.displayName = 'ChainOutlined';
exports["default"] = ChainOutlined;