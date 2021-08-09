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

function FileDownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M12.9 16H2.6c-1.2 0-2.1-.8-2.1-1.8V4.6c0-.5.2-.9.7-1.3L4.3.6c.6-.4 1-.6 1.5-.6h7.4c1.2 0 2.1.8 2.1 1.8v12.4c0 1.1-1.4 1.8-2.4 1.8zM5.8.9c-.1 0-.5.1-.8.3L1.9 3.9c-.3.2-.4.5-.4.7v9.6c0 .5.5 1 1.1 1h10.3c.6 0 1.4-.5 1.4-1V1.8c0-.5-.5-1-1.1-1-.1.1-7.4.1-7.4.1z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M7.9 12.4c-.1 0-.3 0-.4-.1l-1.9-1.9c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l1.9 1.9c.2.2.2.5 0 .7 0 .1-.2.1-.3.1z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M7.9 12.4c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.9-1.9c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-1.9 1.9c0 .1-.2.1-.3.1z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M7.9 11.5c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5s.5.2.5.5v6c0 .3-.2.5-.5.5z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

FileDownOutlined.displayName = "FileDownOutlined";
exports["default"] = FileDownOutlined;