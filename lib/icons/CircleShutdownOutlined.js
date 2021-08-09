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

function CircleShutdownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("g", {
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M8 16c-4.1 0-7.5-3.1-8-7.2S2.4 1 6.4.2s8 1.6 9.2 5.5-.7 8.1-4.5 9.7c-1 .4-2 .6-3.1.6zM8 .9C4.1.9.9 4.1.9 8c0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1C15.1 4.1 11.9.9 8 .9z"
    }), React.createElement("path", {
      d: "M8 8.5c-.3 0-.5-.2-.5-.4V4c0-.3.2-.5.5-.5s.5.3.5.5v4c0 .1-.1.2-.1.3-.1.1-.3.2-.4.2zm2.8-3.8c1 .8 1.6 2.1 1.7 3.4-.1 2.4-2.1 4.4-4.4 4.4s-4.4-1.9-4.4-4.4c0-1.3.6-2.6 1.7-3.4.1-.1.2-.1.3-.1.1-.1.3.1.3.4 0 .1-.1.2-.1.3C5 5.9 4.4 7 4.4 8.1c.1 2 1.6 3.5 3.6 3.5s3.5-1.5 3.6-3.5c0-1.1-.5-2.1-1.4-2.8-.1-.1-.2-.2-.2-.3 0-.2.2-.4.4-.4.2-.1.3 0 .4.1z"
    })));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CircleShutdownOutlined.displayName = "CircleShutdownOutlined";
exports["default"] = CircleShutdownOutlined;