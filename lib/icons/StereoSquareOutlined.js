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
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
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

var Icon_1 = __importDefault(require("assui/lib/Icon"));

function StereoSquareOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.3 3.7L8.3.1c-.2-.1-.4-.1-.7 0l-7 3.6c-.2.1-.3.4-.3.7v7.4c0 .3.2.6.4.7l7 3.5c.2.1.5.1.7 0l7-3.5c.3-.1.4-.4.4-.7V4.4c-.1-.3-.2-.5-.5-.7zM7.9 7.2L5.3 5.9l5.9-3.2L13.8 4c0 .1-5.9 3.2-5.9 3.2zM8 1.1l2.1 1.1-6 3.2-2.3-1.2L8 1.1zm-6.7 4l2.5 1.2V9c0 .3.2.5.5.5s.5-.2.5-.5V6.8l2.7 1.3v6.5l-6.2-3.1V5.1zm7.2 9.6V8.1l6.2-3.3v6.8l-6.2 3.1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

StereoSquareOutlined.displayName = "StereoSquareOutlined";
exports["default"] = StereoSquareOutlined;