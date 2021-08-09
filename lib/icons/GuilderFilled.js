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

function GuilderFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M14.6.7v8c0 .6-.1 1.2-.3 1.8-.3.5-.6 1.1-.9 1.5-.3.5-.8.9-1.2 1.3-.5.4-.9.8-1.3 1.1-.4.3-.8.6-1.3.8-.4.3-.7.4-.9.5-.2.1-.3.2-.4.2-.2.1-.3.1-.4.1-.1 0-.2 0-.3-.1-.1 0-.3-.1-.4-.2s-.5-.3-.9-.5c-.5-.2-.9-.5-1.3-.8-.4-.3-.8-.6-1.3-1.1-.5-.4-.9-.9-1.2-1.3-.3-.5-.6-1-.9-1.6-.2-.5-.4-1.1-.4-1.7v-8c0-.2.1-.3.2-.5.2-.1.3-.2.5-.2h12c.2 0 .3.1.5.2.1.1.2.3.2.5zm-2 8V2H7.9v11.8c.8-.4 1.6-.9 2.2-1.4 1.7-1.3 2.5-2.5 2.5-3.7z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

GuilderFilled.displayName = "GuilderFilled";
exports["default"] = GuilderFilled;