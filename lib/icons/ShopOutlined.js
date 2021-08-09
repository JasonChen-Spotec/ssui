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

function ShopOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M15.1 0c.5 0 .9.4.9.9v3.6c0 .5-.4.9-.9.9h-1.5v9.1c0 .8-.7 1.5-1.5 1.5H3.9c-.8 0-1.5-.7-1.5-1.5V5.4H.9C.4 5.4 0 5 0 4.5V.9C0 .4.4 0 .9 0h14.2zM9.3 3.2H3.9c-.2 0-.4.2-.4.4v10.9c0 .2.2.4.4.5h5.4V3.2zm2.8 0h-1.9V15h1.9c.2 0 .4-.2.4-.4v-11c.1-.2-.1-.4-.4-.4zm-6.3 9.2v1.1h-1v-1.1h1zm0-1.5V12h-1v-1.1h1zm0-1.5v1.1h-1V9.4h1zM15 1.1H1v3.3h1.3v-.8c0-.8.7-1.5 1.5-1.5h8.3c.8 0 1.5.7 1.5 1.5v.8H15V1.1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

ShopOutlined.displayName = "ShopOutlined";
exports["default"] = ShopOutlined;