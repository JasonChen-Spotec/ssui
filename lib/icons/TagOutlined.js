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

function TagOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("circle", {
      fill: "currentColor",
      cx: 13,
      cy: 3,
      r: 1
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M15 0H9.17a2.1 2.1 0 00-1.5.62l-7.3 7.3a1.27 1.27 0 000 1.79l5.92 5.92a1.26 1.26 0 00.9.37 1.23 1.23 0 00.89-.37l7.3-7.3a2.1 2.1 0 00.62-1.5V1.05A1 1 0 0015 0zM7.23 14.78h-.05L1.22 8.86a.06.06 0 010-.09l2.29-2.29 6.08 5.94zm7.57-7.95a.91.91 0 01-.27.65l-4.09 4.09-6.08-5.94 4.16-4.16a.91.91 0 01.65-.27h5.63z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

TagOutlined.displayName = "TagOutlined";
exports["default"] = TagOutlined;