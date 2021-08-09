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

function ReticuleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15 15.22H1A.6.6 0 01.56 15a.62.62 0 01-.16-.46l1-10A.6.6 0 012 4h12a.6.6 0 01.6.54l1 10a.62.62 0 01-.16.46.6.6 0 01-.44.22zM1.66 14h12.68l-.88-8.81H2.54z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M11 7.22a.59.59 0 01-.6-.59V4.38a2.4 2.4 0 10-4.8 0v2.25a.6.6 0 01-1.2 0V4.38a3.6 3.6 0 017.2 0v2.25a.59.59 0 01-.6.59z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

ReticuleOutlined.displayName = "ReticuleOutlined";
exports["default"] = ReticuleOutlined;