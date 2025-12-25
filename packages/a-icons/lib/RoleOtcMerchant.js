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
function RoleOtcMerchant(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M15.666 8.633a9.32 9.32 0 005.334.88v10.463a2 2 0 01-2 2H5a2 2 0 01-2-2V9.512a9.318 9.318 0 005.334-.879 8.38 8.38 0 007.332 0zM7.073 12.34c-.68 0-1.2.235-1.62.655-.588.588-.587 1.312-.587 2.302v.164c0 .99-.001 1.714.587 2.302.42.42.94.654 1.62.654.68 0 1.193-.234 1.613-.654.596-.596.595-1.332.595-2.343v-.084c0-1.01 0-1.745-.595-2.341-.42-.42-.933-.655-1.613-.655zm9.863 0c-.638 0-1.176.218-1.613.655-.26.26-.419.554-.486.898-.067.336-.102.83-.102 1.485 0 .655.035 1.151.102 1.487.067.335.226.638.486.898.437.437.975.654 1.613.654 1.141 0 1.997-.671 2.199-1.888H17.95c-.126.512-.445.848-1.008.848-.319 0-.57-.101-.747-.311-.243-.26-.294-.53-.294-1.688 0-1.157.051-1.426.294-1.686.176-.21.428-.312.747-.312.563 0 .882.337 1.008.849h1.184c-.202-1.217-1.05-1.889-2.2-1.889zm-7.076.05v1.041h1.562v4.937h1.167V13.43h1.561v-1.04H9.86zm-2.787.99c.32 0 .58.127.747.32.227.252.294.529.294 1.678 0 1.15-.067 1.428-.294 1.68a.97.97 0 01-.747.319.989.989 0 01-.755-.319c-.226-.252-.286-.53-.286-1.68s.06-1.427.286-1.678a.989.989 0 01.755-.32zM18.878 2.04a2 2 0 011.707.957l2.635 4.311-.36.154a7.817 7.817 0 01-6.82-.323.78.78 0 00-.747 0 6.878 6.878 0 01-6.586 0 .78.78 0 00-.747 0 7.817 7.817 0 01-6.82.323l-.36-.154 2.635-4.311a2 2 0 011.706-.957h13.757z",
      fill: "#47A92A"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
RoleOtcMerchant.displayName = 'RoleOtcMerchant';
exports["default"] = RoleOtcMerchant;