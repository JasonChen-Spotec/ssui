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
function LayerFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.723 1.085a1.5 1.5 0 01.553 0c.217.04.41.139.503.186l.026.013 9.642 4.822a1 1 0 010 1.788l-9.642 4.822-.026.013a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.013-9.642-4.822a1 1 0 010-1.788l9.642-4.822.025-.013c.094-.047.287-.146.503-.186zM.658 12.447l.895-1.789L12 15.882l10.447-5.224.895 1.79-10.537 5.267-.026.014a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.014L.658 12.447zm0 5l.895-1.789L12 20.882l10.447-5.224.895 1.79-10.537 5.267-.026.014a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.014L.658 17.447z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
LayerFilled.displayName = 'LayerFilled';
exports["default"] = LayerFilled;