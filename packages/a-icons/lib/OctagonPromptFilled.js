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
function OctagonPromptFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.472 1h7.056c.19 0 .43-.001.665.055.204.05.399.13.578.24.206.126.375.296.509.43l.036.036 4.923 4.923.036.036c.135.134.304.303.43.51.11.178.19.373.24.577.056.236.056.475.055.665v7.056c0 .19.001.43-.055.665a2 2 0 01-.24.578c-.126.206-.295.375-.43.509l-.036.036-4.923 4.922-.036.037c-.134.134-.303.304-.509.43a2 2 0 01-.578.24c-.236.056-.475.055-.665.055H8.473c-.19 0-.43.001-.664-.055-.205-.05-.4-.13-.579-.24-.206-.126-.375-.296-.509-.43l-.036-.037-4.922-4.922-.036-.036c-.135-.134-.305-.303-.431-.51a1.999 1.999 0 01-.24-.577A2.794 2.794 0 011 15.528V8.472c0-.19-.001-.43.055-.665a2 2 0 01.24-.578c.126-.206.296-.375.43-.509l.037-.036 4.922-4.923.036-.036c.134-.134.303-.304.51-.43a2 2 0 01.578-.24C8.043 1 8.282 1 8.472 1zM13 17h-2v-6h2v6zm0-8V7h-2v2h2z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
OctagonPromptFilled.displayName = 'OctagonPromptFilled';
exports["default"] = OctagonPromptFilled;