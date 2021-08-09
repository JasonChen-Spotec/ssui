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

function DashboardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      "data-name": "\\u56FE\\u5C42 1",
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M12.08 14.77a.6.6 0 01-.5-.27.61.61 0 01.17-.83A6.77 6.77 0 0014.8 8a6.88 6.88 0 00-.21-1.7A6.81 6.81 0 008 1.2a6.56 6.56 0 00-2 .31 6.8 6.8 0 00-1.75 12.16.6.6 0 11-.67 1A8 8 0 1115.75 6 7.89 7.89 0 0116 8a8 8 0 01-3.58 6.67.61.61 0 01-.34.1z"
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 8.04,
      cy: 8.01,
      r: 0.97
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M10.77 12.58a.6.6 0 01-.34-1.1 4.41 4.41 0 002-3.68 4.54 4.54 0 00-.14-1.1 4.41 4.41 0 10-6.7 4.78.6.6 0 11-.67 1 5.62 5.62 0 011.43-10A5.87 5.87 0 018 2.19a5.61 5.61 0 015.43 4.21 5.49 5.49 0 01.18 1.4 5.6 5.6 0 01-2.51 4.68.6.6 0 01-.33.1z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M7.53 7.18l2.65-1.45c.21-.13.42 0 .27.29L8.93 8.39z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

DashboardOutlined.displayName = "DashboardOutlined";
exports["default"] = DashboardOutlined;