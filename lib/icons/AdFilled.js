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

function AdFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.5 5H12L9.3 2.3c.4-.7.2-1.6-.5-2.1S7.1 0 6.7.7c-.3.5-.3 1.1 0 1.6L4 5H.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5zm-8-2.1c.3.1.7.1 1 0L10.6 5H5.4l2.1-2.1z"
    }), React.createElement("path", {
      fill: "inherit",
      d: "M6.6 8.5H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.7c.3 0 .6.3.6.6 0 .4-.3.6-.6.6zM13.1 11.3H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6zM13.1 14H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

AdFilled.displayName = "AdFilled";
exports["default"] = AdFilled;