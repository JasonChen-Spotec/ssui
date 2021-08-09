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

function DocFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M10.8 0c.5 0 1 .2 1.4.6l2.2 2.2c.4.3.6.8.6 1.4V14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h7.8zM8.3 11H4.8c-.5 0-.8.3-.8.7 0 .4.3.8.7.8h3.5c.4 0 .8-.3.8-.7 0-.5-.3-.8-.7-.8zm3-3.5H4.8c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h6.5c.4 0 .7-.3.7-.8 0-.4-.3-.7-.7-.7zm0-3.5H4.8c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.5c.4 0 .8-.3.8-.7-.1-.5-.4-.8-.8-.8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

DocFilled.displayName = "DocFilled";
exports["default"] = DocFilled;