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

function CouponFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M16 12.8v-2.4c0-.2-.1-.3-.3-.3-1-.3-1.7-1.3-1.6-2.4.1-.9.7-1.5 1.6-1.8.2 0 .3-.2.3-.3V3.2c0-.9-.7-1.6-1.6-1.6H1.6C.7 1.6 0 2.3 0 3.2v2.4c0 .2.1.3.3.3 1 .3 1.7 1.3 1.6 2.4-.1.9-.7 1.5-1.6 1.8-.2 0-.3.2-.3.3v2.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6zM5.6 6.9c-.5 0-.8-.4-.8-.9 0-.4.4-.7.8-.7h4.7c.4 0 .8.3.8.7 0 .5-.3.9-.8.9H5.6zm4.8 3.8H5.6c-.4 0-.8-.3-.8-.7 0-.5.3-.9.8-.9h4.8c.4 0 .8.3.8.7 0 .5-.3.9-.8.9z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CouponFilled.displayName = "CouponFilled";
exports["default"] = CouponFilled;