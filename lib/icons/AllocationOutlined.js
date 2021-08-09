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

function AllocationOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.7 5.4l-4-4.5c-.2-.2-.5-.4-.7-.4-.3 0-.6.1-.7.4-.2.2-.3.5-.3.7v1.9H8.5c-.3 0-.5.2-.5.5s.2.5.5.5h2c.3 0 .5-.2.5-.5V1.6v-.1L15 6v.2l-4 4.5V8c0-.3-.2-.5-.5-.5H6V5.4c0-.6-.5-1.1-1-1.1-.3 0-.6.1-.7.3l-4 4.6c-.4.4-.4 1.1 0 1.5l3.9 4.4c.2.2.5.4.7.4.3 0 .6-.1.8-.4.2-.2.3-.5.3-.7v-1.9h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2.5L1 10v-.2l4-4.4V8c0 .3.2.5.5.5H10v2.1c0 .6.5 1.1 1 1.1.3 0 .6-.1.7-.3l4-4.5c.4-.5.4-1.1 0-1.5z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

AllocationOutlined.displayName = "AllocationOutlined";
exports["default"] = AllocationOutlined;