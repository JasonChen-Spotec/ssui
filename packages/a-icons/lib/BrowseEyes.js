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
function BrowseEyes(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("rect", {
      x: 0.556,
      y: 0.556,
      width: 18.889,
      height: 18.889,
      rx: 9.444,
      fill: "#47A92A"
    }), React.createElement("rect", {
      x: 0.556,
      y: 0.556,
      width: 18.889,
      height: 18.889,
      rx: 9.444,
      stroke: "#fff",
      strokeWidth: 1.111
    }), React.createElement("path", {
      d: "M8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
      fill: "#fff"
    }), React.createElement("path", {
      d: "M10 5.5a6.253 6.253 0 00-5.955 4.348L3.996 10l.049.152a6.253 6.253 0 0011.91 0l.048-.152-.048-.152A6.253 6.253 0 0010 5.5zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z",
      fill: "#fff"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
BrowseEyes.displayName = 'BrowseEyes';
exports["default"] = BrowseEyes;