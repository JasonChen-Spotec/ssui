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

function QrCode(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M0 7.5h7.5V0H0v7.5zm1.9-5.6h3.8v3.8H1.9V1.9zM8.5 0v7.5H16V0H8.5zm5.6 5.6h-3.8V1.9h3.8v3.7zM2.8 4.7h1.9V2.8H2.8v1.9zM0 16h7.5V8.5H0V16zm1.9-5.6h3.8v3.8H1.9v-3.8zm11.3-7.6h-1.9v1.9h1.9V2.8zM8.5 16h1.9v-1.9H8.5V16zm1.9-5.6v3.8h1.9v-3.8h-1.9zm3.7 3.7h-1.9V16H16v-3.8h-1.9v1.9zm0-3.7H16V8.5h-1.9v1.9zM8.5 8.5v1.9h1.9V8.5H8.5zm-5.7 4.7h1.9v-1.9H2.8v1.9z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

QrCode.displayName = "QrCode";
exports["default"] = QrCode;