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

function CardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M12.5 4.5h-1c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V4.9c0-.2-.2-.4-.5-.4zm1.5-3H2c-1.1 0-2 .8-2 1.9v9.1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3.4c0-1.1-.9-1.9-2-1.9zM8.5 12.6h-6c-.3 0-.6-.2-.6-.4 0-.3.2-.6.4-.6h6.1c.3 0 .5.2.6.4 0 .3-.1.5-.4.6 0-.1 0-.1-.1 0zm0-2h-6c-.3 0-.5-.1-.6-.4 0-.3.1-.5.4-.6h6.1c.4-.1.6.1.7.4 0 .3-.1.5-.4.6h-.2zm5.5-3c0 .6-.5 1-1 1h-2c-.5 0-1-.4-1-1V4.5c0-.5.4-1 1-1h2c.5 0 1 .4 1 1v3.1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CardFilled.displayName = "CardFilled";
exports["default"] = CardFilled;