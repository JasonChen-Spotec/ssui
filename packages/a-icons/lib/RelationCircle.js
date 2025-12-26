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
function RelationCircle(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("rect", {
      x: 1,
      y: 1,
      width: 22,
      height: 22,
      rx: 11,
      fill: "#47A92A"
    }), React.createElement("path", {
      d: "M16.011 8.236a1.473 1.473 0 10-1.39-1.965h-2.539c-1.584 0-2.455.871-2.455 2.456v2.782H6.926a1.474 1.474 0 100 .982h2.7v2.783c0 1.585.872 2.456 2.456 2.456h2.54a1.474 1.474 0 100-.983h-2.54c-1.034 0-1.473-.438-1.473-1.473v-2.783h4.013a1.474 1.474 0 100-.982h-4.013V8.727c0-1.035.439-1.474 1.473-1.474h2.54c.202.573.748.983 1.39.983z",
      fill: "#fff"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
RelationCircle.displayName = 'RelationCircle';
exports["default"] = RelationCircle;