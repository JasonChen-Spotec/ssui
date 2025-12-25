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
function TagFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 1c-.407 0-.766 0-1.115.083a3 3 0 00-.867.36c-.305.186-.559.44-.846.728L3.415 9.928c-.57.57-1.039 1.039-1.39 1.453-.365.43-.66.865-.83 1.383a4 4 0 000 2.472c.17.518.465.953.83 1.383.351.414.821.884 1.39 1.453l2.27 2.27c.57.57 1.04 1.04 1.453 1.39.43.366.865.661 1.383.83a4 4 0 002.472 0c.518-.169.954-.464 1.383-.83.414-.35.884-.82 1.453-1.39l7.757-7.756c.288-.288.542-.541.73-.847a3 3 0 00.358-.867c.084-.349.084-.707.083-1.114V5.16c0-.527 0-.981-.03-1.356-.032-.395-.104-.789-.297-1.167a3 3 0 00-1.31-1.311c-.38-.193-.772-.264-1.168-.296C19.578 1 19.123 1 18.596 1h-4.597zm3.257 7a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
TagFilled.displayName = 'TagFilled';
exports["default"] = TagFilled;