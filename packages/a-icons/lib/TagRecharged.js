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
function TagRecharged(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M2.32 6.087c0 2.459 4.203 4.45 9.387 4.45s9.387-1.991 9.387-4.45c0-2.458-4.203-4.45-9.387-4.45S2.32 3.628 2.32 6.086zm9.387 6.497c-3.834 0-7.132-1.09-8.587-2.654-.514.551-.8 1.16-.8 1.8 0 2.46 4.203 4.451 9.387 4.451s9.387-1.992 9.387-4.45c0-.64-.286-1.25-.8-1.798-1.455 1.56-4.753 2.65-8.587 2.65zm0 5.416c-3.884 0-7.216-1.118-8.644-2.714-.478.534-.743 1.12-.743 1.737 0 2.458 4.203 4.45 9.387 4.45s9.387-1.992 9.387-4.45c0-.617-.265-1.203-.743-1.737C18.923 16.88 15.59 18 11.707 18z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
TagRecharged.displayName = 'TagRecharged';
exports["default"] = TagRecharged;