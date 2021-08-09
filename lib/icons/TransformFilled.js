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

function TransformFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.5 9l-4 2.6c-.2.2-.6.1-.6-.2v-1.1c0-.2-.2-.3-.4-.4H2.6c-.2-.1-.3-.2-.3-.3v-.8c0-.2.2-.3.4-.4h10.6c.2.1.3.4.2.6zm.2-1.8c0 .2-.2.3-.4.3H2.6c-.2 0-.3-.2-.2-.4V7l4-2.6c.2-.1.6-.1.6.2v1.2c0 .2.2.4.4.4h5.9c.2 0 .4.2.4.3v.7z"
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), React.createElement("path", {
      fill: "inherit",
      d: "M13.2 8.4H2.7c-.2 0-.3.2-.4.4v.8c0 .2.1.3.3.3h5.9c.2 0 .3.2.4.4v1.1c0 .3.4.4.6.2l4-2.6v-.1c0-.1-.1-.4-.3-.5z"
    }), React.createElement("path", {
      fill: "inherit",
      className: "transform-filled_svg__st0",
      d: "M13.6 6.5c0-.2-.2-.3-.4-.3H7.3c-.2 0-.3-.2-.4-.4V4.6c0-.3-.4-.3-.6-.2L2.4 7v.1c-.1.2 0 .4.2.5h10.7c.2 0 .3-.2.4-.3l-.1-.8z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

TransformFilled.displayName = "TransformFilled";
exports["default"] = TransformFilled;