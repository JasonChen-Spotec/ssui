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
function ResourceOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.814 3H15.186c.928 0 1.627-.001 2.264.219a4 4 0 011.495.923c.481.472.794 1.098 1.208 1.928l.068.136 2.167 4.333.026.052c.164.328.288.576.377.842a4 4 0 01.17.72c.04.278.04.555.039.922v2.166c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 16.71 1 16.046 1 15.242v-2.109-.058c0-.367 0-.644.039-.921a4 4 0 01.17-.721c.09-.266.213-.514.377-.842l.026-.052.895.447.006.003m-.006-.003l-.895-.447L3.78 6.206l.068-.136c.414-.83.727-1.456 1.208-1.928A4 4 0 016.55 3.22c.637-.22 1.336-.22 2.264-.22M3.618 11l1.95-3.9c.514-1.027.676-1.322.887-1.529a2 2 0 01.747-.462C7.482 5.013 7.817 5 8.967 5h6.066c1.15 0 1.486.013 1.765.11a2 2 0 01.747.461c.211.207.373.502.887 1.53L20.382 11h-2.264a2.809 2.809 0 00-2.512 1.553.809.809 0 01-.724.447H9.118a.809.809 0 01-.724-.447A2.809 2.809 0 005.882 11H3.618zM3 13v2.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.82.18C5.361 19 5.942 19 6.8 19h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.067V13h-2.882a.81.81 0 00-.724.447A2.809 2.809 0 0114.882 15H9.118a2.809 2.809 0 01-2.512-1.553.809.809 0 00-.724-.447H3z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ResourceOutlined.displayName = 'ResourceOutlined';
exports["default"] = ResourceOutlined;