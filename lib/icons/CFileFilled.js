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

function CFileFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.3 0H4.5c-.4 0-.7.3-.7.7v5.8H.7c-.4 0-.7.3-.7.7v6C0 14.7 1.3 16 2.8 16h10.3c1.6 0 2.8-1.3 2.8-2.8V.7c.1-.4-.2-.7-.6-.7zM3.8 13.7c0 .5-.4.9-.9.9-.8 0-1.5-.7-1.5-1.5V7.9h2.4v5.8zm8.8-1.9H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7zm0-3.1H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7zm0-3.2H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CFileFilled.displayName = "CFileFilled";
exports["default"] = CFileFilled;