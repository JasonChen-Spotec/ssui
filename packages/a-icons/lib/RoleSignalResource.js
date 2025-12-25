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
function RoleSignalResource(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M19.33 1A3.67 3.67 0 0123 4.67v14.66A3.67 3.67 0 0119.33 23H4.67A3.67 3.67 0 011 19.33V4.67A3.67 3.67 0 014.67 1h14.66zM6.574 6.589a7.637 7.637 0 000 10.822l.494.493.986-.988-.494-.493a6.242 6.242 0 010-8.847l.494-.492-.986-.988-.494.493zm9.372.495l.494.493a6.241 6.241 0 010 8.847l-.494.492.986.988.494-.492a7.637 7.637 0 000-10.823l-.494-.492-.986.987zM8.734 8.315c-2.156 2.01-2.156 5.29 0 7.3l.511.475.951-1.02-.51-.476c-1.565-1.458-1.565-3.8 0-5.258l.51-.476-.95-1.02-.512.475zm5.07.545l.511.476c1.565 1.458 1.564 3.8 0 5.258l-.51.475.95 1.02.512-.475c2.155-2.01 2.156-5.29 0-7.299l-.511-.475-.951 1.02zM12 10.42c-.875 0-1.585.708-1.585 1.581s.71 1.58 1.585 1.58c.876 0 1.586-.707 1.586-1.58 0-.873-.71-1.581-1.586-1.581z",
      fill: "#47A92A"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
RoleSignalResource.displayName = 'RoleSignalResource';
exports["default"] = RoleSignalResource;