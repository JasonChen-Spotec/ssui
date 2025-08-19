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
function FilterCupOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.533 2h14.933c.529 0 .992 0 1.355.033.35.031.828.105 1.216.425a2 2 0 01.725 1.621c-.02.503-.285.909-.494 1.19-.218.292-.527.637-.88 1.031l-5.735 6.411c-.081.09-.121.136-.149.17l-.002.002v.003a6.253 6.253 0 00-.002.225V18.496c.002.138.005.423-.095.69a1.5 1.5 0 01-.396.586c-.211.19-.477.294-.605.344l-.036.014-3.428 1.37a6.108 6.108 0 01-.49.181 1.53 1.53 0 01-.755.05 1.5 1.5 0 01-.946-.64 1.529 1.529 0 01-.235-.721c-.014-.161-.014-.35-.014-.522v-6.737c0-.12 0-.181-.002-.225v-.003l-.003-.003a6.047 6.047 0 00-.148-.169L2.64 6.334a78.63 78.63 0 00-.03-.034c-.353-.394-.662-.739-.88-1.032-.209-.28-.473-.686-.493-1.189a2 2 0 01.725-1.621c.388-.32.866-.394 1.215-.425C3.541 2 4.005 2 4.533 2zm-1.23 2.03l.032.044c.158.211.405.489.796.926l5.706 6.378.032.035c.117.13.265.295.375.491a2 2 0 01.208.544c.049.219.048.44.048.616v6.459l3-1.2v-5.212-.047c0-.176-.001-.397.047-.616a2 2 0 01.208-.544c.11-.196.258-.36.376-.491l.031-.035L19.868 5c.392-.437.639-.715.796-.926l.032-.044a2.425 2.425 0 00-.054-.005C20.38 4 20.008 4 19.422 4H4.577c-.587 0-.958.001-1.22.025l-.055.005z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
FilterCupOutlined.displayName = 'FilterCupOutlined';
exports["default"] = FilterCupOutlined;