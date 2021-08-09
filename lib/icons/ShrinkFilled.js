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

function ShrinkFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), React.createElement("path", {
      fill: "inherit",
      d: "M9.18 7.09a.33.33 0 00.23.09H12a.36.36 0 100-.72h-1.77l2.18-2.36a.37.37 0 000-.51.37.37 0 00-.51 0L9.79 5.9V4.23a.37.37 0 00-.37-.36.36.36 0 00-.36.36v2.6a.35.35 0 00.12.26zm-3.41-.61H4a.36.36 0 00-.36.36.35.35 0 00.36.35h2.57a.31.31 0 00.25-.1.38.38 0 00.12-.27V4.23a.36.36 0 00-.36-.36.36.36 0 00-.36.36V5.9l-2.1-2.28a.35.35 0 10-.53.47l2.18 2.39zm1.32 2.7a.37.37 0 00-.26-.12h-2.6a.36.36 0 00-.36.36.36.36 0 00.36.36H5.9l-2.29 2.1a.37.37 0 000 .51.36.36 0 00.5 0l2.38-2.18V12a.36.36 0 00.72 0V9.43a.33.33 0 00-.09-.23zm5.3 2.7L10.1 9.79h1.67a.37.37 0 00.36-.37.36.36 0 00-.36-.36h-2.6a.35.35 0 00-.28.14.33.33 0 00-.09.23V12a.36.36 0 00.36.36.36.36 0 00.36-.36v-1.77l2.38 2.18a.36.36 0 00.49-.53z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

ShrinkFilled.displayName = "ShrinkFilled";
exports["default"] = ShrinkFilled;