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
function UserAccount(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("g", {
      clipPath: "url(#userAccount_svg__clip0_4046_27238)"
    }, React.createElement("path", {
      d: "M2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.086c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.422z",
      fill: "currentColor"
    }), React.createElement("circle", {
      cx: 11.561,
      cy: 6.001,
      transform: "rotate(6 11.56 6)",
      fill: "currentColor",
      r: 3.969
    }), React.createElement("circle", {
      cx: 16.287,
      cy: 17.313,
      fill: "#DC4946",
      r: 5.313
    }), React.createElement("g", {
      clipPath: "url(#userAccount_svg__clip1_4046_27238)"
    }, React.createElement("path", {
      d: "M15.738 17.587a1.374 1.374 0 002.072.149l.824-.825a1.374 1.374 0 00-1.943-1.942l-.472.47m.618 1.599a1.373 1.373 0 00-2.072-.149l-.824.825a1.373 1.373 0 001.942 1.943l.47-.47",
      stroke: "#fff",
      strokeWidth: 0.7,
      strokeLinecap: "square",
      strokeLinejoin: "round"
    }))), React.createElement("defs", null, React.createElement("clipPath", {
      id: "userAccount_svg__clip0_4046_27238"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h24v24H0z"
    })), React.createElement("clipPath", {
      id: "userAccount_svg__clip1_4046_27238"
    }, React.createElement("path", {
      fill: "#fff",
      transform: "translate(12.99 14.016)",
      d: "M0 0h6.595v6.595H0z"
    }))));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
UserAccount.displayName = 'UserAccount';
exports["default"] = UserAccount;