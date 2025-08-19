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
function SignalOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("g", {
      clipPath: "url(#signal-outlined_svg__clip0_435_929)"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 5.5A14.942 14.942 0 001.869 9.438l-.737.676L-.22 8.639l.737-.675A16.942 16.942 0 0112 3.5c4.425 0 8.458 1.692 11.482 4.463l.737.676-1.35 1.475-.738-.676A14.942 14.942 0 0012 5.5zm0 5c-2.533 0-4.845.94-6.607 2.493l-.75.661-1.322-1.5.75-.661A11.958 11.958 0 0112 8.5c3.039 0 5.815 1.13 7.93 2.993l.75.66-1.323 1.501-.75-.66A9.958 9.958 0 0012 10.5zm0 5a4.974 4.974 0 00-3.12 1.093l-.781.624-1.25-1.562.782-.624A6.975 6.975 0 0112 13.5c1.627 0 3.126.556 4.315 1.488l.787.617-1.234 1.574-.787-.617A4.974 4.974 0 0012 15.5zm-1 3h2.01v2H11v-2z",
      fill: "currentColor"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "signal-outlined_svg__clip0_435_929"
    }, React.createElement("path", {
      fill: "currentColor",
      d: "M0 0h24v24H0z"
    }))));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SignalOutlined.displayName = 'SignalOutlined';
exports["default"] = SignalOutlined;