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

function CopyOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M13.2 0c1.2 0 2.2 1 2.2 2.2V11c0 1.2-1 2.2-2.2 2.2h-.6v.6c0 1.2-1 2.2-2.2 2.2H2.8c-1.2 0-2.2-1-2.2-2.2V4.9c0-1.2 1-2.2 2.2-2.2h.6v-.5C3.3 1 4.3 0 5.5 0h7.7zm-2.7 3.8H2.8c-.6 0-1 .4-1.1 1v8.9c0 .6.4 1 1 1.1h7.8c.6 0 1-.4 1.1-1V4.9c0-.6-.5-1.1-1.1-1.1zm2.7-2.7H5.5c-.6 0-1 .4-1.1 1v.7h6.1c1.2 0 2.2 1 2.2 2.2v7.2h.6c.6 0 1-.4 1.1-1v-9c-.1-.6-.5-1.1-1.2-1.1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CopyOutlined.displayName = "CopyOutlined";
exports["default"] = CopyOutlined;