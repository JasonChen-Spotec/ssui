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

function PieChartFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 200 200"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M93.8 23.9c0-4.3-3.8-7.7-8.1-7.2-47.8 5.1-84.3 44.4-82.9 90.9v.4c-1.2 49.5 39.8 90.6 91.8 91.9 43.9-.9 80.7-30.6 89.5-70.7 1.1-5-2.6-9.7-7.7-9.7H102c-4.5 0-8.2-3.7-8.2-8.2V23.9zm17.3 67.2c0 4 3.2 7.2 7.2 7.2h71.8c4 0 7.2-3.2 7.2-7.2.3-44.8-34.1-86.4-78.7-90.7-4-.4-7.6 2.8-7.6 6.8v83.9z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

PieChartFilled.displayName = "PieChartFilled";
exports["default"] = PieChartFilled;