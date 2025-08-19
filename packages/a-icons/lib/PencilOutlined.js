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
function PencilOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("g", {
      clipPath: "url(#pencil-outlined_svg__clip0_248_810)"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.793.793l5.414 5.414-1.414 1.414-5.414-5.414L17.793.793zM14.33 4.488a1.5 1.5 0 01.927 0c.232.075.4.2.512.295.096.081.196.182.28.266l.017.017L18.95 7.95c.084.084.185.184.266.28.094.111.22.28.296.513a1.5 1.5 0 010 .927 1.508 1.508 0 01-.296.512c-.081.096-.182.196-.266.28L8.6 20.814l-.038.038a4.665 4.665 0 01-.542.491 3.004 3.004 0 01-.538.312c-.215.097-.44.158-.695.227l-.052.014-4.68 1.277a1 1 0 01-1.228-1.228l1.277-4.68.014-.052c.069-.255.13-.48.227-.695a3 3 0 01.312-.538c.14-.19.304-.355.491-.542l.038-.038L13.52 5.066l.017-.017c.084-.084.184-.185.28-.266.111-.094.28-.22.512-.295zm.463 2.133L4.601 16.813c-.245.245-.291.295-.326.344a1 1 0 00-.105.18c-.024.054-.045.119-.136.453l-.816 2.992 2.992-.816c.334-.091.4-.112.454-.136.063-.029.123-.064.18-.104.048-.036.098-.082.343-.327L17.379 9.207l-2.586-2.586z",
      fill: "currentColor"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "pencil-outlined_svg__clip0_248_810"
    }, React.createElement("path", {
      fill: "currentColor",
      d: "M0 0h24v24H0z"
    }))));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
PencilOutlined.displayName = 'PencilOutlined';
exports["default"] = PencilOutlined;