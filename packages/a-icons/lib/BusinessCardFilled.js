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
function BusinessCardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 3a2 2 0 00-2 2v14a2 2 0 002 2h20a2 2 0 002-2V5a2 2 0 00-2-2H2zm5.004 3.8H6.46c-1.177.021-2.12.981-2.12 2.158v.659a2.435 2.435 0 104.87 0v-.659A2.167 2.167 0 007.004 6.8zm.736 2.817a1.002 1.002 0 11-2.005 0v-.659c0-.4.325-.725.725-.725h.544c.403 0 .73.323.736.725v.659zm2.596 4.535a1.986 1.986 0 00-1.909-1.604h-3.38a1.976 1.976 0 00-1.91 1.604l-.095.44a2.062 2.062 0 00.43 1.727c.362.453.91.716 1.49.716h3.541a1.91 1.91 0 001.5-.716 2.09 2.09 0 00.42-1.728l-.087-.44zm-1.441 1.26a.544.544 0 01-.392.191H4.961a.496.496 0 01-.382-.19.601.601 0 01-.124-.536l.086-.439a.544.544 0 01.506-.458h3.37a.554.554 0 01.516.458l.086.44a.668.668 0 01-.124.534zM12.8 9a.7.7 0 01.7-.7h7a.7.7 0 110 1.4h-7a.7.7 0 01-.7-.7zm.7 2.3a.7.7 0 100 1.4h7a.7.7 0 100-1.4h-7zm-.7 3.7a.7.7 0 01.7-.7h7a.7.7 0 110 1.4h-7a.7.7 0 01-.7-.7z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
BusinessCardFilled.displayName = 'BusinessCardFilled';
exports["default"] = BusinessCardFilled;