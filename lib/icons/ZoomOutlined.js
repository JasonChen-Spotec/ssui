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

function ZoomOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      className: "zoom-outlined_svg__icon",
      viewBox: "0 0 1024 1024"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M896 128v288c0 19.2-12.8 32-32 32s-32-12.8-32-32V236.8L633.6 441.6c-6.4 6.4-19.2 6.4-25.6 6.4s-19.2 0-25.6-6.4c-6.4-12.8-6.4-38.4 0-51.2L787.2 192H608c-19.2 0-32-12.8-32-32s12.8-32 32-32h288zM441.6 582.4c-12.8-6.4-38.4-12.8-51.2 0L192 787.2V608c0-19.2-12.8-32-32-32s-32 12.8-32 32v288h288c19.2 0 32-12.8 32-32s-12.8-32-32-32H236.8l204.8-198.4c6.4-12.8 6.4-38.4 0-51.2zM448 160c0-19.2-12.8-32-32-32H128v288c0 19.2 12.8 32 32 32s32-12.8 32-32V236.8l198.4 198.4C396.8 448 409.6 448 416 448s19.2 0 25.6-6.4c6.4-12.8 6.4-38.4 0-51.2L236.8 192H416c19.2 0 32-12.8 32-32zm416 416c-19.2 0-32 12.8-32 32v179.2L633.6 588.8c-12.8-12.8-38.4-12.8-51.2 0-6.4 12.8-6.4 32 0 44.8L780.8 832H608c-19.2 0-32 12.8-32 32s12.8 32 32 32h288V608c0-19.2-12.8-32-32-32z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

ZoomOutlined.displayName = "ZoomOutlined";
exports["default"] = ZoomOutlined;