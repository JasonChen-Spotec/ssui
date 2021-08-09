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

function OneUserFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M11.3 1.9h-.8C10.1.5 8.7-.3 7.3.1c-.9.2-1.5.9-1.8 1.8h-.8c-1.6 0-2.8 1.3-2.8 2.8v8.4c0 1.6 1.3 2.8 2.8 2.8h6.5c1.6 0 2.8-1.3 2.8-2.8V4.7c.1-1.5-1.2-2.8-2.7-2.8zM8 1.2c.4 0 .7.3.7.7s-.3.7-.7.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7zm0 4c1 0 1.7.8 1.7 1.8S9 8.7 8 8.7 6.3 7.9 6.3 7C6.3 6 7 5.2 8 5.2zm2.9 7.4c-.2.3-.6.4-.9.4H6c-.3 0-.7-.2-.9-.4-.2-.3-.3-.6-.2-.9C5.3 10 7 8.9 8.7 9.3c1.2.3 2.1 1.2 2.4 2.4.1.3 0 .7-.2.9z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

OneUserFilled.displayName = "OneUserFilled";
exports["default"] = OneUserFilled;