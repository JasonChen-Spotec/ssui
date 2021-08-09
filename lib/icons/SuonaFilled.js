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

function SuonaFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("g", {
      "data-name": "Layer 2"
    }, React.createElement("g", {
      fill: "currentColor",
      "data-name": "Layer 1-2"
    }, React.createElement("path", {
      d: "M10.83 2.26a.52.52 0 00-.51-.06L4.19 4.58H1a1 1 0 00-1 1v2.58a1 1 0 001 1h.35l.72 3.69a1.37 1.37 0 002.67-.52L4.16 9.2l6.13 2.38a.51.51 0 00.2 0 .55.55 0 00.55-.55V2.71a.54.54 0 00-.21-.45zM14.51 3.28a.69.69 0 00-1.07.86.57.57 0 00.11.11 3.73 3.73 0 010 5.28.69.69 0 001 1 5.11 5.11 0 00-.04-7.25z"
    }), React.createElement("path", {
      d: "M13.11 5.37a.68.68 0 00-1 1 .79.79 0 010 1.12.67.67 0 000 1 .63.63 0 00.48.2.7.7 0 00.49-.2 2.15 2.15 0 00.03-3.12z"
    }))));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

SuonaFilled.displayName = "SuonaFilled";
exports["default"] = SuonaFilled;