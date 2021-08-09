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

function CardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("g", {
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M14.1 1.3H1.9c-1 0-1.9.8-1.9 1.8v9.8c0 1 .8 1.8 1.9 1.8h12.2c1 0 1.9-.8 1.9-1.8V3.1c0-1-.8-1.8-1.9-1.8zm-12.2.9h12.2c.5 0 1 .4 1 .9v1.5H.9V3.1c0-.5.5-.9 1-.9zm12.2 11.6H1.9c-.5 0-1-.4-1-.9V7.5H15v5.4c.1.5-.4.9-.9.9z"
    }), React.createElement("path", {
      d: "M5.2 9.7H4.1c-.4 0-.7.3-.7.7v.3c0 .4.3.7.7.7h1.1c.4 0 .7-.3.7-.7v-.3c0-.4-.3-.7-.7-.7z"
    })));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CardOutlined.displayName = "CardOutlined";
exports["default"] = CardOutlined;