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
function FireFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M10.225 1.226A1 1 0 008.593 2c0 .687-.098 1.573-.273 2.43-.178.87-.417 1.623-.66 2.08-.302.568-.455.81-.606 1.007a7.49 7.49 0 01-.418.484c-.093.102-.206.226-.346.383-.164.184-.314.344-.456.497-.481.517-.876.94-1.422 1.828-.8 1.302-.912 2.944-.912 4C3.5 19.492 7.374 23 12 23c4.655 0 8.5-3.696 8.5-8.45 0-1.1-.06-2.316-.673-4.16-.284-.854-.468-1.377-.664-1.826-.2-.457-.404-.82-.704-1.345a1 1 0 00-1.861.377 3.752 3.752 0 01-.487 1.49c-.043-.13-.089-.263-.137-.4-.376-1.068-.935-2.4-1.64-3.433-1.152-1.688-2.67-2.887-3.662-3.671-.165-.13-.315-.249-.447-.356z",
      fill: "currentCOlor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
FireFilled.displayName = 'FireFilled';
exports["default"] = FireFilled;