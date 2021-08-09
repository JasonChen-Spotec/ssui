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

function OneShovelOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.58 3.44l-3-3a1.4 1.4 0 00-1-.41 1.42 1.42 0 00-1 .41l-.13.13a1.39 1.39 0 000 2l.45.43L6 7.92 4.3 6.25a.63.63 0 00-.46-.19.61.61 0 00-.45.19L1.32 8.32a4.48 4.48 0 006.34 6.34l2.07-2.07a.65.65 0 000-.91L8.07 10 13 5.09l.47.46a1.4 1.4 0 002 0l.13-.13a1.39 1.39 0 00-.02-1.98zm-3.43.8L6.38 10l.52.52.12.12.2.2 1.27 1.27-1.68 1.7a3.29 3.29 0 01-4.65-4.65l1.68-1.68 1.29 1.28-1.3 1.3a.65.65 0 00-.16.4.62.62 0 00.62.62.65.65 0 00.4-.16l7.08-7.14.41.41zm2.59.34l-.13.13a.21.21 0 01-.15.06.19.19 0 01-.14-.06l-3-3a.21.21 0 01-.06-.15.19.19 0 01.06-.14l.13-.13a.19.19 0 01.14-.06.21.21 0 01.15.06l3 3a.19.19 0 01.06.14.21.21 0 01-.06.15z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

OneShovelOutlined.displayName = "OneShovelOutlined";
exports["default"] = OneShovelOutlined;