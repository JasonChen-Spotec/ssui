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

function CircleCouponFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M12.82 6.25l-.57-.58a.36.36 0 00-.25-.09h-.8a.79.79 0 01-.78-.78V4a.36.36 0 00-.09-.22l-.58-.57a.85.85 0 00-1.21 0L3.18 8.54a.85.85 0 000 1.21l.57.58a.36.36 0 00.22.09h.83a.79.79 0 01.78.78v.8a.36.36 0 00.09.22l.58.57a.85.85 0 001.21 0l5.36-5.36a.85.85 0 000-1.21zM6 8.19a.25.25 0 01-.34 0 .23.23 0 010-.33.24.24 0 01.33 0H6a.25.25 0 010 .34zm.74.74a.24.24 0 01-.33 0l-.06-.06a.23.23 0 010-.33.22.22 0 01.32 0l.06.06a.24.24 0 010 .33zm.74.74a.24.24 0 01-.33 0l-.06-.06a.23.23 0 01.33-.33l.06.06a.24.24 0 010 .33zm.71.71a.24.24 0 01-.33 0 .25.25 0 010-.34.24.24 0 01.32 0 .24.24 0 010 .33z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CircleCouponFilled.displayName = "CircleCouponFilled";
exports["default"] = CircleCouponFilled;