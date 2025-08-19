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
function ClockCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("mask", {
      id: "clock-circle-filled_svg__a",
      fill: "#fff"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3a9 9 0 100 18 9 9 0 000-18zm-.3 4a.7.7 0 00-.7.7v4.6c0 .07.01.137.029.2a.699.699 0 00.671.9h4.6a.7.7 0 100-1.4h-3.9V7.7a.7.7 0 00-.7-.7z"
    })), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3a9 9 0 100 18 9 9 0 000-18zm-.3 4a.7.7 0 00-.7.7v4.6c0 .07.01.137.029.2a.699.699 0 00.671.9h4.6a.7.7 0 100-1.4h-3.9V7.7a.7.7 0 00-.7-.7z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M11.029 12.5l1.342.4.119-.4-.12-.4-1.341.4zm5.271.9V12v1.4zM12.4 12H11v1.4h1.4V12zm-8 0A7.6 7.6 0 0112 4.4V1.6C6.256 1.6 1.6 6.256 1.6 12h2.8zm7.6 7.6A7.6 7.6 0 014.4 12H1.6c0 5.744 4.656 10.4 10.4 10.4v-2.8zm7.6-7.6a7.6 7.6 0 01-7.6 7.6v2.8c5.744 0 10.4-4.656 10.4-10.4h-2.8zM12 4.4a7.6 7.6 0 017.6 7.6h2.8c0-5.744-4.656-10.4-10.4-10.4v2.8zm.4 3.3a.7.7 0 01-.7.7V5.6a2.1 2.1 0 00-2.1 2.1h2.8zm0 4.6V7.7H9.6v4.6h2.8zm-.03-.2a.7.7 0 01.03.2H9.6c0 .206.03.408.087.6l2.684-.8zm.03.6a.7.7 0 01-.03.2l-2.683-.8a2.1 2.1 0 00-.087.6h2.8zm-.7-.7a.7.7 0 01.7.7H9.6c0 1.16.94 2.1 2.1 2.1V12zm4.6 0h-4.6v2.8h4.6V12zm-.7.7a.7.7 0 01.7-.7v2.8a2.1 2.1 0 002.1-2.1h-2.8zm.7.7a.7.7 0 01-.7-.7h2.8a2.1 2.1 0 00-2.1-2.1v2.8zm-3.9 0h3.9v-2.8h-3.9v2.8zM11 7.7V12h2.8V7.7H11zm.7.7a.7.7 0 01-.7-.7h2.8a2.1 2.1 0 00-2.1-2.1v2.8z",
      fill: "currentColor",
      mask: "url(#clock-circle-filled_svg__a)"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ClockCircleFilled.displayName = 'ClockCircleFilled';
exports["default"] = ClockCircleFilled;