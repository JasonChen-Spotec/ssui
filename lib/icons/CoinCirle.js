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

function CoinCirle(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M8 9.9c-2 0-3.7-.6-3.7-1.7v1c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-1c0 1-1.7 1.7-3.7 1.7zm0 1.8c-2 0-3.7-.6-3.7-1.7v1c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-1c0 1.1-1.7 1.7-3.7 1.7zM8 8c-2 0-3.7-.6-3.7-1.7v1c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-1C11.7 7.4 10 8 8 8zm0-4.9c-2 0-3.7.8-3.7 1.9v.6c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-.7c0-1-1.7-1.8-3.7-1.8z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M8 .8c4 0 7.3 3.3 7.3 7.2S12 15.3 8 15.3.7 12 .7 8 4 .8 8 .8M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CoinCirle.displayName = "CoinCirle";
exports["default"] = CoinCirle;