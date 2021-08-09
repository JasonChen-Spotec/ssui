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

function BtcFilled(componentProps) {
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
      d: "M10 9.83a.94.94 0 01-.17.31.82.82 0 01-.21.19 1.61 1.61 0 01-.91.28H7.18V8.39H8.8a1.31 1.31 0 011.08.51.91.91 0 01.18.53 1.13 1.13 0 01-.07.39zM7.18 5.31h1.27a1.22 1.22 0 011 .46.88.88 0 01.17.5 1 1 0 01-.07.36.76.76 0 01-.15.28.86.86 0 01-.2.18 1.57 1.57 0 01-.84.26H7.18V5.31zm3.42 2.36a1.73 1.73 0 00.92-1.57c0-1.26-1.26-1.84-2-1.92h-.26V3H8v1.2h-.82V3H5.9v1.17H4.33v1.06h.44c.42 0 .61.27.61.45v4.64a.29.29 0 01-.28.29h-.48l-.24 1.2h1.53V13h1.27v-1.2H8V13h1.26v-1.17h.09a2.44 2.44 0 002.71-2.2 2.17 2.17 0 00-1.46-1.96z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

BtcFilled.displayName = "BtcFilled";
exports["default"] = BtcFilled;