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

function PercentOutline(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("circle", {
      fill: "currentColor",
      cx: 10,
      cy: 10.76,
      r: 1
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 6,
      cy: 5.23,
      r: 1
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M8 16a1.86 1.86 0 01-1.31-.54L5.43 14.2H3.65a1.85 1.85 0 01-1.85-1.85v-1.78L.54 9.31a1.86 1.86 0 010-2.62L1.8 5.43V3.65A1.85 1.85 0 013.65 1.8h1.78L6.69.54a1.86 1.86 0 012.62 0l1.26 1.26h1.78a1.85 1.85 0 011.85 1.85v1.78l1.26 1.26a1.86 1.86 0 010 2.62l-1.26 1.26v1.78a1.85 1.85 0 01-1.85 1.85h-1.78l-1.26 1.26A1.86 1.86 0 018 16zM3.65 3a.65.65 0 00-.65.65v2a.56.56 0 01-.18.42L1.39 7.54a.66.66 0 000 .92L2.82 9.9a.56.56 0 01.18.42v2a.65.65 0 00.65.65h2a.56.56 0 01.42.18l1.44 1.43a.66.66 0 00.92 0l1.47-1.4a.56.56 0 01.42-.18h2a.65.65 0 00.65-.65v-2a.56.56 0 01.18-.42l1.43-1.44a.66.66 0 000-.92l-1.4-1.47a.56.56 0 01-.18-.42v-2a.65.65 0 00-.65-.68h-2a.56.56 0 01-.42-.18L8.46 1.39a.66.66 0 00-.92 0L6.1 2.82a.56.56 0 01-.42.18z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M5.69 11.6a.63.63 0 01-.37-.12.6.6 0 01-.11-.84l4.56-6a.59.59 0 01.84-.12.6.6 0 01.11.84l-4.56 6a.57.57 0 01-.47.24z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

PercentOutline.displayName = "PercentOutline";
exports["default"] = PercentOutline;