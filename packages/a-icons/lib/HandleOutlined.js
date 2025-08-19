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
function HandleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.668 2A3.333 3.333 0 007.43 6.124l.003.013c.038.152.07.285.092.393.02.102.045.243.035.39a1.224 1.224 0 01-.147.522c-.097.188-.263.353-.4.489l-.04.04-4.166 4.165a.748.748 0 001.057 1.058L8.03 9.029l.04-.04c.136-.137.3-.303.489-.4.177-.092.323-.133.522-.147.147-.01.287.015.39.035.108.022.24.054.393.091l.013.003a3.333 3.333 0 004.105-3.609L12.88 6.065a6.117 6.117 0 01-.341.325 1.348 1.348 0 01-.458.268 1.333 1.333 0 01-.824 0 1.348 1.348 0 01-.457-.268c-.107-.09-.223-.206-.341-.325l-.522-.522c-.12-.119-.235-.235-.325-.34a1.348 1.348 0 01-.268-.458 1.333 1.333 0 010-.824c.063-.193.169-.341.268-.458.09-.106.206-.222.325-.34l1.102-1.103a3.379 3.379 0 00-.37-.02zM6.001 5.332a4.667 4.667 0 016.588-4.254.667.667 0 01.197 1.079L10.894 4.05c-.14.14-.216.216-.267.276l-.005.007.005.006c.05.06.127.137.267.277l.491.491c.14.14.217.216.276.266l.007.006.007-.006c.06-.05.136-.126.276-.266l1.892-1.892a.667.667 0 011.08.196A4.667 4.667 0 019.56 9.866a10.3 10.3 0 00-.39-.088 6.067 6.067 0 00-.2.195l-4.165 4.164a2.08 2.08 0 11-2.943-2.942L6.03 7.029a6.085 6.085 0 00.194-.2 4.676 4.676 0 01-.222-1.497zm.234 1.485a.19.19 0 00-.007.024",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
HandleOutlined.displayName = 'HandleOutlined';
exports["default"] = HandleOutlined;