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
function SpeakerFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M17.532 16a.485.485 0 01-.32-.126c-.233-.21-.283-.607-.105-.885 1.113-1.76 1.113-4.218 0-5.978-.178-.278-.128-.674.106-.884.234-.211.567-.152.744.126 1.39 2.206 1.39 5.288 0 7.494a.5.5 0 01-.425.253z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M18.822 19a.909.909 0 01-.493-.145c-.362-.241-.438-.695-.164-1.014 2.923-3.437 2.923-8.245 0-11.682-.274-.319-.198-.773.164-1.014.361-.241.876-.174 1.15.145 3.361 3.949 3.361 9.471 0 13.42-.154.194-.405.29-.657.29zM13.449 4.346c-1.004-.577-2.286-.428-3.595.419L7.236 6.469a1.13 1.13 0 01-.592.177H5.362C3.192 6.646 2 7.885 2 10.138v3.725c0 2.254 1.192 3.492 3.362 3.492h1.282c.206 0 .413.066.592.177l2.618 1.704c.789.513 1.56.764 2.277.764a2.61 2.61 0 001.318-.345c.995-.577 1.551-1.778 1.551-3.38V7.726c0-1.601-.556-2.803-1.551-3.38z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SpeakerFilled.displayName = 'SpeakerFilled';
exports["default"] = SpeakerFilled;