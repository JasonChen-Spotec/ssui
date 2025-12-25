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
function SocialMediaTwitter(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 12,
      fill: "#000"
    }), React.createElement("path", {
      d: "M18.885 7.79c-.45.187-.922.317-1.406.387.227-.037.56-.431.692-.591.201-.24.355-.515.453-.81 0-.022.022-.053 0-.069a.08.08 0 00-.075 0 7.257 7.257 0 01-1.664.626.12.12 0 01-.117-.028 1.588 1.588 0 00-.145-.147 3.045 3.045 0 00-.795-.498 2.88 2.88 0 00-1.238-.197c-.41.025-.81.132-1.176.313-.36.191-.677.45-.93.763-.268.322-.46.695-.566 1.095a2.91 2.91 0 00-.03 1.157c0 .066 0 .075-.058.066-2.304-.329-4.195-1.12-5.74-2.818-.067-.075-.103-.075-.158 0-.672.988-.346 2.552.495 3.324.113.104.23.204.352.297a2.96 2.96 0 01-1.105-.297c-.065-.04-.1-.018-.104.057-.009.104-.009.208 0 .312.068.5.27.972.589 1.37.318.397.74.706 1.221.895.117.048.24.085.365.11a3.417 3.417 0 01-1.082.03c-.078-.015-.107.025-.078.097.475 1.251 1.506 1.633 2.262 1.846.104.015.207.015.323.04l-.019.02c-.223.393-1.125.659-1.538.797a5.7 5.7 0 01-2.36.294c-.126-.02-.155-.016-.187 0-.032.015 0 .05.036.08a7.88 7.88 0 002.068.907c2.838.758 6.03.201 8.16-1.848 1.674-1.607 2.263-3.824 2.263-6.045 0-.084.106-.135.168-.178.423-.32.797-.697 1.108-1.12a.322.322 0 00.078-.225c0-.047 0-.038-.062-.013z",
      fill: "#fff"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaTwitter.displayName = 'SocialMediaTwitter';
exports["default"] = SocialMediaTwitter;