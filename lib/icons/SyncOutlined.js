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

function SyncOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.9 9.8l-1.3-2.2c0-.1-.1-.1-.1-.1l-.1-.1c-.1 0-.1-.1-.1-.1-.1 0-.1-.1-.1-.1h-.3c-.1 0-.1 0-.1.1-.1 0-.1 0-.1.1l-2.2 1.4c-.2.1-.3.3-.3.4s0 .4.1.5c.1.2.4.4.6.3.1 0 .2 0 .3-.1l.8-.5c-.4 2.6-2.6 4.4-5.2 4.4-2 0-3.8-1.1-4.7-2.9-.1-.2-.2-.3-.4-.3s-.4 0-.5.1c-.2 0-.3.2-.4.3-.1.2 0 .4.1.5 1.3 2.6 4 4 6.9 3.6 2.8-.4 5-2.6 5.5-5.4l.5.8c.1.2.4.4.6.3.1 0 .2 0 .3-.1.3-.1.4-.6.2-.9zm-14-1.1l.1.2.1.1h.3c.1 0 .2 0 .3-.1.1 0 .1 0 .1-.1L4.7 7c.3-.3.3-.7 0-1s-.7-.3-.9 0l-.9.8c.3-2.7 2.6-4.7 5.2-4.7 2 0 3.8 1.1 4.6 2.9.2.3.6.5.9.3.4-.1.6-.5.4-.8C12.9 2.3 10.6.8 8.1.8 4.8.8 2 3.2 1.5 6.5l-.3-.6c-.3-.3-.7-.3-.9 0-.3.2-.4.6-.2.9l1.8 1.9z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

SyncOutlined.displayName = "SyncOutlined";
exports["default"] = SyncOutlined;