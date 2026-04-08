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
function ShieldCheckedOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M19 7.218c0-.881-.016-1.057-.066-1.188a1.001 1.001 0 00-.273-.394c-.105-.092-.264-.168-1.089-.478l-5.361-2.01c-.112-.042-.168-.063-.208-.076L12 3.07h-.003c-.041.014-.097.035-.208.077l-5.361 2.01c-.825.31-.985.386-1.09.478a1.002 1.002 0 00-.273.394C5.015 6.16 5 6.337 5 7.218V12c0 2.082 1.14 3.966 2.641 5.53 1.491 1.554 3.229 2.676 4.164 3.222a9.949 9.949 0 00.195.11l.06-.033.134-.077c.936-.546 2.673-1.668 4.164-3.221C17.86 15.966 19 14.082 19 12V7.217zM16.914 9l-5.207 5.207a1 1 0 01-1.414 0L7.586 11.5 9 10.086l2 2 4.5-4.5L16.914 9zM21 12c0 2.827-1.538 5.184-3.2 6.915-1.672 1.743-3.586 2.973-4.598 3.564-.19.11-.442.268-.783.341-.26.056-.579.056-.838 0-.341-.073-.593-.23-.783-.341-1.013-.59-2.926-1.821-4.599-3.564-1.662-1.731-3.2-4.088-3.2-6.915V7.218c0-.718-.015-1.342.197-1.898a3 3 0 01.82-1.184c.447-.394 1.037-.599 1.71-.85l5.36-2.011c.168-.063.389-.151.628-.186.142-.02.286-.026.43-.016l.142.016.175.035c.17.043.326.103.452.15l5.361 2.011c.672.252 1.262.457 1.71.851a3 3 0 01.82 1.184c.211.556.196 1.18.196 1.898V12z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ShieldCheckedOutlined.displayName = 'ShieldCheckedOutlined';
exports["default"] = ShieldCheckedOutlined;