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

function Btc(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), React.createElement("path", {
      fill: "inherit",
      className: "btc_svg__st0",
      d: "M10.8 7.8c.3-.4.4-.8.4-1.3 0-1.1-.8-2-1.9-2.1H9V2.8c0-.1-.1-.2-.2-.2h-.5c-.1 0-.2.1-.2.2v1.6h-.9V2.8c0-.1-.1-.2-.2-.1h-.5c-.1 0-.2.1-.2.2v1.6H4.5c-.1 0-.2.1-.2.2v.5c0 .1.1.2.2.2.6 0 1 .4 1 1v3.4c0 .4-.3.8-.8.8-.1 0-.1.1-.2.1l-.1.6c0 .1.1.2.2.2h1.8v1.6c0 .1.1.2.2.2h.6c.1 0 .2-.1.1-.2v-1.6h.9v1.6c0 .1.1.2.2.1H9c.1 0 .2-.1.2-.2v-1.6h.8c1.1 0 1.9-1 1.9-2.1-.2-.5-.5-1.1-1.1-1.5zm-3.6-2h1.4c.5 0 .9.4.9.9s-.4.9-.9.9H7.2V5.8zM9 10.3H7.2V8.4H9c.5 0 .9.4.9.9s-.4 1-.9 1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

Btc.displayName = "Btc";
exports["default"] = Btc;