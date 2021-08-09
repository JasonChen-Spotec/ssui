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

function TipCirccleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M11.78 4.83h-1L9 3.2a1.44 1.44 0 00-2 0L5.18 4.83h-1a1.5 1.5 0 00-1.5 1.5v4.56a1.5 1.5 0 001.5 1.5h7.56a1.5 1.5 0 001.5-1.5V6.33a1.5 1.5 0 00-1.46-1.5zM7.49 3.72a.75.75 0 011 0l1.27 1.11H6.22zm5.1 7.17a.81.81 0 01-.81.81H4.22a.81.81 0 01-.81-.81V6.33a.8.8 0 01.81-.8h7.56a.8.8 0 01.81.8v4.56z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M10.68 7.91H5.23a.35.35 0 110-.7h5.45a.35.35 0 110 .7zm-1.63 2H5.23a.35.35 0 01-.35-.35.35.35 0 01.35-.34h3.82a.35.35 0 01.35.34.35.35 0 01-.35.37z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

TipCirccleOutlined.displayName = "TipCirccleOutlined";
exports["default"] = TipCirccleOutlined;