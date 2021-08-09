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

function DragOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M7.4 15.8L5 13.4c-.4-.3-.4-.8-.1-1.2.3-.4.8-.4 1.2-.1l.1.1.9.9v-2.6c0-.5.4-.8.8-.9.5 0 .8.4.9.8V13l1-.9c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-2.4 2.4c-.2.2-.4.3-.6.3-.2 0-.4-.1-.6-.2zm4.8-4.8c-.3-.3-.3-.9 0-1.2l.9-.9h-2.6c-.5 0-.8-.5-.8-.9s.4-.7.8-.8h2.6l-.9-1c-.4-.3-.4-.8-.1-1.2.3-.4.8-.4 1.2-.1l.1.1 2.4 2.4c.3.3.3.9 0 1.2L13.4 11c-.4.3-.9.3-1.2 0zm-9.5 0L.2 8.6c-.3-.3-.3-.9 0-1.2L2.7 5c.3-.4.8-.5 1.2-.2s.4.8.1 1.2c0 .1-.1.1-.2.2l-.9 1h2.6c.5 0 .8.5.8.9s-.4.7-.8.8H2.9l.9.9c.4.2.5.8.3 1.2-.3.4-.8.5-1.2.2-.1-.1-.2-.1-.2-.2zm4.5-5.5V2.9l-1 .9c-.3.4-.9.4-1.2 0-.3-.3-.3-.8 0-1.1L7.4.3c.2-.2.4-.3.6-.3.2 0 .4.1.6.2L11 2.7c.4.3.4.8.1 1.2-.3.3-.9.4-1.2.1l-.1-.1-.9-1v2.6c0 .5-.4.8-.9.8-.5-.1-.8-.4-.8-.8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

DragOutlined.displayName = "DragOutlined";
exports["default"] = DragOutlined;