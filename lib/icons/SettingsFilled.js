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

function SettingsFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("g", {
      "data-name": "Layer 2"
    }, React.createElement("g", {
      fill: "currentColor",
      "data-name": "Layer 1-2"
    }, React.createElement("ellipse", {
      cx: 7.99,
      cy: 8,
      rx: 1.25,
      ry: 1.22
    }), React.createElement("path", {
      d: "M15.65 9.67L14.38 9a1.08 1.08 0 01-.44-1.48 1.11 1.11 0 01.44-.42l1.27-.72a.67.67 0 00.25-.92l-1.66-2.87a.7.7 0 00-1-.24L12 3.06a1.13 1.13 0 01-1.1 0 1.07 1.07 0 01-.56-.94V.68A.68.68 0 009.67 0H6.33a.68.68 0 00-.69.68v1.44a1.1 1.1 0 01-1.09 1.1A1.11 1.11 0 014 3.06l-1.31-.71a.69.69 0 00-.94.24L.09 5.41a.65.65 0 00.24.92l1.27.72a1.08 1.08 0 01.44 1.48 1.26 1.26 0 01-.43.47l-1.27.67a.67.67 0 00-.26.92l1.66 2.82a.7.7 0 001 .24L4 12.94a1.12 1.12 0 011.52.37 1 1 0 01.15.57v1.44a.69.69 0 00.7.68h3.29a.68.68 0 00.69-.68v-1.44a1.1 1.1 0 011.09-1.1 1.11 1.11 0 01.59.16l1.26.71a.69.69 0 00.94-.24l1.67-2.82a.67.67 0 00-.26-.92zM8 10.58A2.58 2.58 0 1110.63 8 2.63 2.63 0 018 10.58z"
    }))));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

SettingsFilled.displayName = "SettingsFilled";
exports["default"] = SettingsFilled;