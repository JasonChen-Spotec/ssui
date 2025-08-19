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
function CirclePointsTriangleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.633 6.794c-.974 1.018-1.463 2.528-.95 4.568-1.182 1.166-1.976 2.791-1.968 4.926a3 3 0 103.892 4.197 4.44 4.44 0 002.023.629c1.083.067 2.27-.241 3.553-.99.927.293 1.973.39 3.134.219a3 3 0 103.634-4.19 4.752 4.752 0 00.373-2.646c-.213-1.46-1.118-3.008-3.125-4.408-.315-1.17-1.043-2.317-2.294-3.347a3 3 0 10-5.876-.33c-.801.217-1.698.642-2.396 1.372zM13.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm.657 2.085A2.991 2.991 0 0112 8a2.995 2.995 0 01-2.384-1.179c-.64.142-1.375.461-1.899 1.01-.487.509-.86 1.285-.707 2.498 1.669-1.026 3.662-1.414 5.245-1.349l-.001.028a4.003 4.003 0 013.493 2.589c.042-.166.075-.333.098-.5.174-1.27-.19-2.689-1.688-4.012zm1.846 11.787a3.002 3.002 0 012.25-2.778c.368-.475.736-1.346.586-2.371-.108-.746-.502-1.645-1.489-2.58a6.03 6.03 0 01-.02.16c-.225 1.64-1.125 3.123-2.211 4.202a3.993 3.993 0 01-4.073 1.38c.153.17.316.339.488.51 1.061 1.053 2.522 1.736 4.469 1.477zM9.5 13a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm-1.5.038c.01 2.477.952 3.907 2.477 5.42.309.307.644.588 1.007.835-.677.27-1.262.355-1.76.324a3.022 3.022 0 01-1.725-.682 3 3 0 00-2.78-2.927c.071-1.953.984-3.276 2.194-4.147a6.67 6.67 0 01.973-.578A3.985 3.985 0 008 13.038zM20.5 19a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 20.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
CirclePointsTriangleOutlined.displayName = 'CirclePointsTriangleOutlined';
exports["default"] = CirclePointsTriangleOutlined;