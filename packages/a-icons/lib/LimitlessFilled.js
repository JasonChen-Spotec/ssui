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
function LimitlessFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M7.407 10.05c1.322 0 2.315.8 3.424 1.95-1.109 1.15-2.102 1.95-3.424 1.95-.523 0-.88-.214-1.13-.54-.267-.35-.427-.86-.427-1.41 0-.55.16-1.058.427-1.408.25-.327.607-.542 1.13-.542zM16.324 10.05c.647 0 1.078.244 1.36.575.296.35.466.846.466 1.375s-.17 1.025-.466 1.375c-.282.331-.713.575-1.36.575-.648 0-1.23-.249-1.834-.704-.45-.339-.877-.765-1.33-1.246.453-.481.88-.907 1.33-1.246.604-.455 1.186-.704 1.834-.704z",
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm4.324 7.35l-.002.002c-1.133 0-2.066.45-2.855 1.044-.526.397-1.014.88-1.47 1.362C10.85 9.57 9.414 8.35 7.406 8.35c-1.082 0-1.927.485-2.48 1.209-.535.7-.777 1.59-.777 2.44 0 .85.242 1.741.777 2.441.553.724 1.399 1.21 2.48 1.21 2.008 0 3.443-1.22 4.59-2.409.456.483.944.966 1.47 1.362.79.595 1.723 1.046 2.857 1.046 1.136 0 2.044-.456 2.654-1.174.595-.7.872-1.605.872-2.476 0-.87-.277-1.774-.872-2.475-.61-.718-1.516-1.173-2.652-1.173l-.002-.001z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
LimitlessFilled.displayName = 'LimitlessFilled';
exports["default"] = LimitlessFilled;