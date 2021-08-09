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

function AgreementMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      d: "M9.6 3.6c0-1.3-2.1-1.2-2.1-1.8 0-.3.2-.4.6-.4.4 0 .7.1 1 .4l.4-.5C9.3.9 8.9.7 8.4.7V0h-.5v.7c-.7.1-1.2.5-1.2 1.1 0 1.3 2.1 1.1 2.1 1.8 0 .3-.2.5-.7.5-.5 0-.9-.2-1.3-.5l-.2.6c.3.3.9.5 1.3.5v.8h.6v-.8c.7-.1 1.1-.5 1.1-1.1z",
      fill: "#ef6f53"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M2.9 2.9c0 .6.3 1.6 1.1 1.6s1-1 1-1.6-.4-1.1-1-1.1-1.1.5-1.1 1.1zM11.1 2.9c0 .6.3 1.6 1.1 1.6s1.1-1 1.1-1.6-.5-1.1-1.1-1.1-1.1.5-1.1 1.1zM13.3 5l-.7 1.1-.3-.8.3-.3h-.7l.3.3-.3.8-.8-1.1h-.3C10.1 5 9.4 6 8 8.2 6.6 6.1 5.9 5 5.2 5H2.9c-.6 0-1.2.6-1.2 1.2v3.5c0 .1 0 .2.1.3l.4.4c.1.1.2.3.2.5l.2 4.8c0 .2.2.3.3.3h.3c.2 0 .3-.1.3-.3l.4-4.8c0-.1.1-.1.1-.1.1 0 .1.1.1.1l.3 4.8c0 .2.2.3.3.3H5c.2 0 .3-.1.3-.3l.3-8.2L8 9.2l2.2-1.8.3 8.2c0 .2.2.3.3.3h.3c.2 0 .3-.1.3-.3l.3-4.8c0-.1.1-.1.1-.1.1 0 .1.1.1.1l.4 4.8c0 .2.2.3.3.3h.3c.2 0 .3-.1.3-.3l.2-4.8c0-.2.1-.3.2-.5l.4-.4c.1-.1.1-.2.1-.3V6.2c.2-.6-.2-1.1-.8-1.2z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

AgreementMoney.displayName = "AgreementMoney";
exports["default"] = AgreementMoney;