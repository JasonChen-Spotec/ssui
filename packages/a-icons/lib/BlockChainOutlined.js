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
function BlockChainOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.568 2h.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.295.43L19.437 16h.995c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.208.017-.454.017-.706.017h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.02 2.02 0 01-.201-.77 3.993 3.993 0 01-.009-.138H6.992a4.022 4.022 0 01-.009.138 2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201C4.93 22 4.684 22 4.432 22h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C1 19.93 1 19.684 1 19.432v-.864c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C3.07 16 3.316 16 3.568 16h.994l4.95-8.663a2 2 0 01-.294-.429 2.022 2.022 0 01-.201-.77C9 5.93 9 5.684 9 5.432V4.6v-.032c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C11.07 2 11.316 2 11.568 2zm-.454 3.995l-.107-.06A10.251 10.251 0 0111 5.4v-.8a8.205 8.205 0 01.011-.589h.014C11.14 4 11.303 4 11.6 4h.8a8.187 8.187 0 01.589.011v.014c.01.116.011.278.011.575v.8c0 .263 0 .42-.007.534l-.107.061C12.776 6 12.628 6 12.4 6h-.8c-.228 0-.377 0-.486-.005zM11.437 8l-4.95 8.663c.116.129.215.273.295.429.138.271.182.541.201.77.004.044.007.09.009.138h10.016c.003-.048.005-.094.009-.138a2.02 2.02 0 01.201-.77c.08-.156.179-.3.295-.43L12.563 8h-1.125zm7.575 11.988l.013.002c.116.01.279.01.575.01h.8a8.207 8.207 0 00.589-.012v-.013c.01-.116.011-.279.011-.575v-.8a8.207 8.207 0 00-.012-.588l-.013-.002A8.207 8.207 0 0020.4 18h-.8c-.228 0-.377 0-.486.005l-.107.06c-.006.114-.007.272-.007.535v.8a8.207 8.207 0 00.012.588zm-14.02-1.922l-.106-.061C4.776 18 4.628 18 4.4 18h-.8a8.205 8.205 0 00-.589.012v.013C3 18.14 3 18.304 3 18.6v.8a8.187 8.187 0 00.011.588l.014.002c.116.01.278.01.575.01h.8a8.205 8.205 0 00.589-.012v-.013C5 19.86 5 19.696 5 19.4v-.8c0-.263 0-.42-.007-.534z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
BlockChainOutlined.displayName = 'BlockChainOutlined';
exports["default"] = BlockChainOutlined;