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

function BoxOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.31 4.19a.34.34 0 00-.05-.14l-1.59-2.81a1.63 1.63 0 00-1.39-.8H3.72a1.61 1.61 0 00-1.39.81l-1.7 3a.36.36 0 000 .11 1.53 1.53 0 00-.07.36v9.5a1.25 1.25 0 001.25 1.25h12.5a1.25 1.25 0 001.25-1.25V4.81a1.19 1.19 0 00-.25-.62zM12.8 1.74l1 1.82h-2.62l-.92-2.12h2a.6.6 0 01.54.3zM5.67 4.56h4.66v3.62L8.26 6.89a.49.49 0 00-.52 0L5.67 8.18zm3.5-3.12l.92 2.12H5.91l.92-2.12zm-6 .3a.62.62 0 01.52-.3h2l-.87 2.12H2.18zM14.5 14.31a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.25-.25h2.92v4.52a.51.51 0 00.26.44.5.5 0 00.5 0L8 7.91l2.57 1.6a.48.48 0 00.26.07.48.48 0 00.24-.06.51.51 0 00.26-.44V4.56h2.92a.25.25 0 01.25.25z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M6.38 11.56H3a.5.5 0 000 1h3.38a.5.5 0 100-1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

BoxOutlined.displayName = "BoxOutlined";
exports["default"] = BoxOutlined;