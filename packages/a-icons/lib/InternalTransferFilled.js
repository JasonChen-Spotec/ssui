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
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
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
var icon_1 = __importDefault(require("a-base-icon/lib/icon"));
function InternalTransferFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("g", {
      clipPath: "url(#internal-transfer-filled_svg__clip0_20026_31801)"
    }, React.createElement("rect", {
      x: 0.667,
      y: 0.667,
      width: 14.667,
      height: 14.667,
      rx: 2.444,
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M11.977 9.002c.066-.338.087-1.142.066-1.505C11.895 4.87 9.617 3.583 8 4.12c1.217.553 2.455 2.06 2.464 3.843.001.22-.012.434-.037.645l-1.307-.18.847 1.285.847 1.287 1.093-.914L13 9.173l-1.023-.171zM4.248 6.941c-.09.331-.133 1.128-.117 1.487C4.25 11.033 7.01 12.383 9 11.905c-1.477-.588-2.956-2.12-2.925-3.886.004-.217.025-.43.06-.636l1.595.219-1.005-1.3L5.72 5l-1.36.868-1.36.87 1.248.203z",
      fill: "#fff"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "internal-transfer-filled_svg__clip0_20026_31801"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h16v16H0z"
    }))));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
InternalTransferFilled.displayName = 'InternalTransferFilled';
exports["default"] = InternalTransferFilled;