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
function SocialMediaIns(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 12,
      fill: "#000"
    }), React.createElement("path", {
      d: "M12.034 8.4c-2.003 0-3.72 1.57-3.72 3.6 0 1.939 1.621 3.6 3.72 3.6 2.003 0 3.72-1.569 3.72-3.6 0-1.938-1.717-3.6-3.72-3.6zm0 5.908c-1.335 0-2.385-1.015-2.385-2.308 0-1.292 1.05-2.307 2.385-2.307 1.335 0 2.385 1.015 2.385 2.307 0 1.293-1.05 2.308-2.385 2.308zm3.815-6.83a.841.841 0 00-.858.83c0 .461.381.83.858.83s.859-.369.859-.83a.841.841 0 00-.859-.83z",
      fill: "#fff"
    }), React.createElement("path", {
      d: "M15.372 5.077h-.381c-1.145-.092-4.77-.092-5.914 0-2.194-.092-4.101 1.57-4.197 3.692v.37c-.095 1.107-.095 4.615 0 5.723-.095 2.123 1.622 3.969 3.816 4.061h.381c1.145.092 4.77.092 5.914 0 2.194.092 4.101-1.57 4.197-3.692V9.138c.095-2.123-1.622-3.969-3.816-4.061zm2.29 10.984c-.287.647-.763 1.108-1.336 1.293a32.66 32.66 0 01-8.489 0c-.668-.277-1.145-.739-1.335-1.293-.286-1.384-.382-2.769-.286-4.061-.096-1.385 0-2.77.286-4.062.286-.646.763-1.107 1.335-1.292 2.766-.37 5.628-.37 8.49 0 .667.277 1.144.739 1.335 1.292.286 1.385.381 2.77.286 4.062.095 1.385 0 2.77-.286 4.061z",
      fill: "#fff"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaIns.displayName = 'SocialMediaIns';
exports["default"] = SocialMediaIns;