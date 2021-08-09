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

function FileTextCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), React.createElement("path", {
      fill: "inherit",
      d: "M10.34 4.08H5.66a.68.68 0 00-.66.67v6.5a.68.68 0 00.68.67h2.73a.35.35 0 00.36-.34v-1a.72.72 0 01.72-.71h1.15a.36.36 0 00.36-.38V4.75a.68.68 0 00-.66-.67zm-.48 2.61H6.14a.26.26 0 110-.51h3.72a.26.26 0 110 .51zm0-1.08H6.14a.26.26 0 110-.51h3.72a.26.26 0 110 .51z"
    }), React.createElement("path", {
      fill: "inherit",
      d: "M9.18 10.82v.8a.3.3 0 00.51.22l1.13-1.13a.3.3 0 00-.22-.51h-.8a.62.62 0 00-.62.62z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

FileTextCircleFilled.displayName = "FileTextCircleFilled";
exports["default"] = FileTextCircleFilled;