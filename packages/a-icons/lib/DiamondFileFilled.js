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
function DiamondFileFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M13 7a2 2 0 002 2h6v3.875a5.5 5.5 0 00-4.323 10.111C16.258 23 15.78 23 15.24 23H8.76c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3 18.711 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564a4.001 4.001 0 011.748-1.748c.485-.248 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1H13v6zm6.648 7.206a.36.36 0 01.421-.192c.627.18 1.192.513 1.654.959.117.113.15.294.079.443a.772.772 0 00-.075.332.74.74 0 00.727.754h.01a.365.365 0 01.352.264 4.288 4.288 0 01.103 2.079.366.366 0 01-.392.3.741.741 0 00-.8.75c0 .185.065.354.171.485a.388.388 0 01-.015.505 3.98 3.98 0 01-1.74 1.1.362.362 0 01-.45-.248.731.731 0 00-.693-.523c-.324 0-.6.22-.693.523a.362.362 0 01-.45.247 3.98 3.98 0 01-1.74-1.1.388.388 0 01-.015-.504c.106-.131.17-.3.17-.485a.741.741 0 00-.8-.75.366.366 0 01-.39-.3 4.308 4.308 0 01.102-2.08.365.365 0 01.351-.263h.01a.74.74 0 00.728-.754.772.772 0 00-.075-.332.388.388 0 01.08-.443 3.958 3.958 0 011.653-.96.36.36 0 01.42.193c.121.245.367.411.649.411a.724.724 0 00.648-.41zM19 16.69c-.703 0-1.272.591-1.273 1.32 0 .728.57 1.32 1.273 1.32s1.273-.592 1.273-1.32c0-.729-.57-1.32-1.273-1.32zM20.414 7H15V1.586L20.414 7z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
DiamondFileFilled.displayName = 'DiamondFileFilled';
exports["default"] = DiamondFileFilled;