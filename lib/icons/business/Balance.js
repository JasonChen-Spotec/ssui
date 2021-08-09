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

function Balance(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      id: "balance_svg__\\u56FE\\u5C42_1",
      x: 0,
      y: 0,
      viewBox: "0 0 71.9 72.2",
      xmlSpace: "preserve"
    }, props), React.createElement("style", null, ".balance_svg__st0{fill:#285a83}.balance_svg__st1{fill:#ef6f53}"), React.createElement("path", {
      className: "balance_svg__st0",
      d: "M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
    }), React.createElement("path", {
      className: "balance_svg__st0",
      d: "M52.3 36.7h-8.7c-.6 0-1-.4-1-1s.4-1 1-1h8.7c.6 0 1 .4 1 1s-.4 1-1 1zM29.4 40.1h-9.3c-.6 0-1-.4-1-1s.4-1 1-1h9.3c.6 0 1 .4 1 1s-.5 1-1 1z"
    }), React.createElement("path", {
      transform: "rotate(-8.251 43.651 22.771)",
      className: "balance_svg__st0",
      d: "M39.3 21.8H48v2h-8.7z"
    }), React.createElement("path", {
      transform: "rotate(-8.251 28.372 24.99)",
      className: "balance_svg__st0",
      d: "M24.5 24h7.8v2h-7.8z"
    }), React.createElement("path", {
      className: "balance_svg__st0",
      d: "M54.6 51.2H17.2c-.6 0-1-.4-1-1s.4-1 1-1h37.5c.6 0 1 .4 1 1s-.5 1-1.1 1zM34.9 27.6h2v21.6h-2z"
    }), React.createElement("path", {
      className: "balance_svg__st1",
      d: "M47.9 41.9c-3.2 0-5.8-2.6-5.8-5.8 0-.6.1-1.1.2-1.6L47 21.8c.1-.4.5-.7.9-.7s.8.3.9.7l4.6 12.4c.2.6.3 1.2.3 1.8 0 3.3-2.6 5.9-5.8 5.9zm0-16.9l-3.7 10c-.1.3-.1.6-.1 1 0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8c0-.4-.1-.8-.2-1.2L47.9 25zM24.9 45.3c-3.2 0-5.8-2.6-5.8-5.8 0-.6.1-1.1.2-1.6l4.6-12.6c.1-.4.5-.7.9-.7s.8.3.9.7l4.6 12.4c.2.6.3 1.2.3 1.8.1 3.2-2.5 5.8-5.7 5.8zm0-16.9l-3.7 10c-.1.3-.1.6-.1 1 0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8c0-.4-.1-.8-.2-1.2l-3.6-9.8z"
    }), React.createElement("path", {
      className: "balance_svg__st0",
      d: "M35.9 28.6c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

Balance.displayName = "Balance";
exports["default"] = Balance;