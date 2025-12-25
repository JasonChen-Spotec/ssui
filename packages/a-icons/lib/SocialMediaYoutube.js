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
function SocialMediaYoutube(componentProps) {
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
      d: "M19.13 8.534a1.838 1.838 0 00-1.316-1.274c-1.16-.3-5.814-.3-5.814-.3s-4.651 0-5.814.3A1.837 1.837 0 004.87 8.534C4.56 9.657 4.56 12 4.56 12s0 2.344.31 3.466c.17.619.675 1.107 1.316 1.274 1.163.3 5.814.3 5.814.3s4.654 0 5.814-.3a1.837 1.837 0 001.316-1.274c.31-1.122.31-3.466.31-3.466s0-2.343-.31-3.466z",
      fill: "#fff"
    }), React.createElement("path", {
      d: "M10.514 14.16L14.379 12l-3.865-2.16v4.32z",
      fill: "#fff"
    }), React.createElement("path", {
      d: "M10.513 14.16L14.38 12l-3.866-2.16v4.32z",
      fill: "#000"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaYoutube.displayName = 'SocialMediaYoutube';
exports["default"] = SocialMediaYoutube;