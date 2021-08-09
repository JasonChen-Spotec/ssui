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

function StoreOutline(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M3.39 14.25a.6.6 0 10-.6-.6.6.6 0 00.6.6zM8.69 6.75a2.48 2.48 0 002-1 2.49 2.49 0 004.5-1.46.54.54 0 000-.22L13.29.52a.5.5 0 00-.45-.27h-8.3a.5.5 0 00-.45.27L2.25 4a.54.54 0 00-.05.22 2.49 2.49 0 004.5 1.46 2.48 2.48 0 001.99 1.07zm0-1a1.51 1.51 0 01-1.41-1h2.82a1.51 1.51 0 01-1.41 1zm4 0a1.51 1.51 0 01-1.41-1h2.82a1.51 1.51 0 01-1.41 1zm-7.85-4.5h7.7l1.32 2.5H3.52zm-.15 4.5a1.51 1.51 0 01-1.41-1H6.1a1.51 1.51 0 01-1.41 1zM14.83 13.25h-.5v-5.5a.5.5 0 00-.5-.5.5.5 0 00-.5.5v5.5h-5.5a.5.5 0 100 1h7a.5.5 0 000-1z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M5.62 7.71H1.17a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h4.45a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-.5 7H1.67v-6h3.45z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

StoreOutline.displayName = "StoreOutline";
exports["default"] = StoreOutline;