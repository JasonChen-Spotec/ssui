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
function OctagonPromptOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.472 1h7.056c.19 0 .43-.001.665.055.204.05.399.13.578.24.206.126.375.296.509.43l.036.037 4.922 4.922.037.036c.134.134.304.303.43.51a2 2 0 01.24.577c.056.236.055.475.055.665v7.056c0 .19.001.43-.055.665a2 2 0 01-.24.578c-.126.206-.296.375-.43.509l-.037.036-4.922 4.922-.036.037c-.134.134-.303.304-.51.43-.178.11-.373.19-.577.24a2.795 2.795 0 01-.665.055H8.472c-.19 0-.43.001-.665-.055-.204-.05-.399-.13-.578-.24a2.798 2.798 0 01-.509-.43l-.036-.037-4.923-4.922-.036-.036a2.795 2.795 0 01-.43-.51 2 2 0 01-.24-.577C1 15.957 1 15.718 1 15.528V8.523v-.051c0-.19-.001-.43.055-.665a2 2 0 01.24-.578c.126-.206.296-.375.43-.509l.036-.036 4.923-4.922.036-.037c.134-.134.303-.304.51-.43a2 2 0 01.577-.24C8.043 1 8.282 1 8.472 1zm-.197 2.003l-.002.002a6.21 6.21 0 00-.175.17L3.176 8.099a6.2 6.2 0 00-.171.175l-.002.002v.004A6.184 6.184 0 003 8.523v6.954a6.18 6.18 0 00.005.25c.032.035.078.082.17.175l4.923 4.922a6.16 6.16 0 00.177.173h.004c.047.003.113.003.244.003h6.954c.131 0 .197 0 .244-.002h.004l.002-.003c.035-.032.082-.078.175-.17l4.922-4.923c.093-.093.139-.14.171-.175l.002-.002v-.004c.003-.047.003-.113.003-.244V8.523c0-.131 0-.197-.003-.244v-.004a6.336 6.336 0 00-.173-.177l-4.923-4.922a6.29 6.29 0 00-.174-.171l-.002-.002h-.004A6.186 6.186 0 0015.477 3H8.523a6.184 6.184 0 00-.248.003zM11 7h2.01v2H11V7zm2 4v6h-2v-6h2z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
OctagonPromptOutlined.displayName = 'OctagonPromptOutlined';
exports["default"] = OctagonPromptOutlined;