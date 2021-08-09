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

function UmbrellaOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M8.48 1.26V.53A.52.52 0 008 0a.53.53 0 00-.53.53v.74A7.3 7.3 0 00.7 8.54a.52.52 0 00.53.52h6.2v4.71a1.18 1.18 0 11-2.35 0 .52.52 0 00-.53-.52.52.52 0 00-.52.52 2.23 2.23 0 104.45 0V9.06h6.29a.52.52 0 00.53-.52 7.32 7.32 0 00-6.82-7.28zM5.31 8c0-1 .12-4.52 2.68-5.67C10.4 3.52 10.7 6.93 10.73 8zm.55-5.33A8.43 8.43 0 004.26 8H1.78a6.23 6.23 0 014.08-5.32zM11.78 8A9.06 9.06 0 0010 2.64 6.26 6.26 0 0114.23 8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

UmbrellaOutlined.displayName = "UmbrellaOutlined";
exports["default"] = UmbrellaOutlined;