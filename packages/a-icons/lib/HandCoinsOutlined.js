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
function HandCoinsOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("rect", {
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 5.5a4.5 4.5 0 017.726-3.137 4.5 4.5 0 11-1.453 7.274A4.5 4.5 0 017 5.5zm5.22 2.395A4.495 4.495 0 0112 6.5c0-1.12.41-2.145 1.086-2.932a2.5 2.5 0 10-.866 4.327zM16.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3.568 12h.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.079.155.127.31.158.456l1.593-.666.01-.004a12.352 12.352 0 01.29-.126c.19-.08.456-.187.755-.294.553-.198 1.38-.458 2.055-.458.48 0 .956.057 1.421.17l2.386.58a2.544 2.544 0 011.955 2.334l1.483-1.082a2.61 2.61 0 013.347.234 2.503 2.503 0 010 3.602l-2.157 2.1a5.205 5.205 0 01-2.634 1.372l-3.05.593a5.278 5.278 0 01-2.254-.052l-2.757-.67-.003-.001a3.229 3.229 0 00-.77-.093H6.987a2.022 2.022 0 01-.205.82 2 2 0 01-.874.875 2.022 2.022 0 01-.77.201C4.93 23 4.684 23 4.432 23h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C1 20.93 1 20.684 1 20.432v-5.864c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C3.07 12 3.316 12 3.568 12zM7 19.087h1.61c.42 0 .838.05 1.246.15h.001l2.756.67c.458.112.936.123 1.4.033m0 0l3.049-.593a3.206 3.206 0 001.621-.843l2.158-2.1a.504.504 0 000-.734.61.61 0 00-.775-.052l-2.513 1.834c-.534.39-1.18.598-1.84.598h-2.427a1 1 0 010-2h1.545c.345 0 .577-.265.577-.534v-.307c0-.225-.16-.45-.43-.515l-2.385-.58a4.025 4.025 0 00-.95-.114c-.29 0-.818.14-1.38.34a13.547 13.547 0 00-.851.34l-.05.022-.012.005-.002.001a1.09 1.09 0 01-.03.013L7 15.691v3.396m-2-4.039V20.4a8.185 8.185 0 01-.011.588l-.014.002C4.86 21 4.697 21 4.4 21h-.8a8.205 8.205 0 01-.589-.012v-.013A8.187 8.187 0 013 20.4v-5.8a8.187 8.187 0 01.011-.589h.014C3.14 14 3.303 14 3.6 14h.8c.297 0 .459 0 .575.01l.014.001v.014c.01.116.011.278.011.575v.448z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
HandCoinsOutlined.displayName = 'HandCoinsOutlined';
exports["default"] = HandCoinsOutlined;