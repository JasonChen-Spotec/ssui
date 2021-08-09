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

function UndoOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M8.2 14.1c0-.4.3-.7.7-.7 1.5.1 2.9-.5 3.9-1.5 1.1-1 1.7-2.4 1.7-3.8.1-1.5-.5-2.9-1.5-3.9-1-1.1-2.4-1.7-3.8-1.7S6.5 3 5.4 4C4.3 5 3.7 6.3 3.6 7.8l1.6-1.1c.3-.2.7-.1 1 .2.1.1.1.2.1.4s-.1.4-.3.5l-2.9 2c-.3.2-.7.1-1-.2l-2-2.8c-.2-.4-.1-.8.2-1 .3-.2.7-.1.9.2l1.1 1.5c.1-.8.3-1.6.6-2.3.4-.9.9-1.6 1.6-2.2s1.4-1.1 2.2-1.4c.9-.3 1.8-.5 2.7-.4.9 0 1.8.2 2.6.6.8.4 1.5.9 2.1 1.5s1.1 1.4 1.4 2.2c.4.9.5 1.8.5 2.7 0 .9-.2 1.8-.6 2.6-.4.8-.9 1.5-1.5 2.1s-1.4 1.1-2.2 1.4c-.9.3-1.8.5-2.7.4-.5.1-.8-.2-.8-.6z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

UndoOutlined.displayName = "UndoOutlined";
exports["default"] = UndoOutlined;