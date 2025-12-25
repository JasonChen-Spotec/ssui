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
function PlaySharpFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M7.293 3.843c.352.016.646.155.848.266.24.13.522.32.82.52l8.2 5.496c.245.164.485.325.67.475.164.133.37.322.512.595l.058.123.058.167c.119.392.1.815-.058 1.197-.14.34-.382.567-.57.719-.185.15-.425.31-.67.473l-8.2 5.497c-.298.2-.58.39-.82.52-.23.127-.582.29-1.003.265a1.78 1.78 0 01-1.315-.707c-.252-.335-.311-.717-.335-.98-.025-.272-.024-.612-.024-.973V6.503c0-.36-.001-.7.024-.974.024-.262.083-.644.335-.979l.125-.148a1.78 1.78 0 011.19-.558l.155-.001zm.171 13.653l.001.465c.103-.067.228-.148.382-.252l8.2-5.496c.13-.087.233-.156.315-.213a28.052 28.052 0 00-.315-.213l-8.2-5.497c-.155-.103-.279-.186-.382-.253v11.459z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
PlaySharpFilled.displayName = 'PlaySharpFilled';
exports["default"] = PlaySharpFilled;