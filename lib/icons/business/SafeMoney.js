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

function SafeMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      id: "safe-money_svg__\\u56FE\\u5C42_1",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), React.createElement("style", null, ".safe-money_svg__st0{fill:#ef6f53}.safe-money_svg__st1{fill:#285a83}"), React.createElement("path", {
      className: "safe-money_svg__st0",
      d: "M8.6 12.5H6.4c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h2.3c.3 0 .6-.3.6-.6s-.3-.7-.7-.7H7.4C6.6 10.4 6 9.8 6 9v-.1c0-.8.6-1.4 1.4-1.4h2.3c.2 0 .4.2.4.4s-.2.4-.4.4H7.4c-.4 0-.6.3-.6.6V9c0 .3.3.6.6.6h1.2c.8 0 1.4.6 1.4 1.4s-.6 1.5-1.4 1.5z"
    }), React.createElement("path", {
      className: "safe-money_svg__st0",
      d: "M8 8.2c-.2 0-.4-.2-.4-.5v-.9c0-.2.2-.4.4-.4s.4.2.4.4v.9c.1.3-.1.5-.4.5zM8 13.5c-.2 0-.4-.2-.4-.4V12c0-.2.2-.4.4-.4s.4.2.4.4v1.1c.1.3-.1.4-.4.4z"
    }), React.createElement("path", {
      className: "safe-money_svg__st1",
      d: "M13.8 5.1H2.2c-.8 0-1.4.6-1.4 1.4v6.8c0 .8.6 1.4 1.4 1.4h11.5c.8 0 1.4-.6 1.4-1.4V6.5c.1-.8-.6-1.4-1.3-1.4zm.6 8.2c0 .3-.3.6-.6.6H2.2c-.3 0-.6-.3-.6-.6V6.5c0-.3.3-.6.6-.6h11.5c.3 0 .6.3.6.6v6.8zM15.7 3.9l-7-2.5c-.4-.2-1-.2-1.4 0l-7 2.5c-.2.1-.4.3-.3.5.1.2.2.3.4.3h.1l7-2.5c.3-.1.6-.1.8 0l7 2.5c.2.1.4 0 .5-.2.3-.3.1-.5-.1-.6z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

SafeMoney.displayName = "SafeMoney";
exports["default"] = SafeMoney;