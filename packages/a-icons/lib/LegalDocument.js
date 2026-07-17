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
function LegalDocument(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("g", {
      clipPath: "url(#legal-document_svg__clip0_4046_27238)"
    }, React.createElement("path", {
      d: "M13.457 6.854a1 1 0 001 1h5.441v9.836c0 2.81-1 3.81-3.77 3.81h-8.47c-2.76 0-3.76-1-3.76-3.81V5.31c0-2.81 1-3.81 3.76-3.81h5.799v5.354zm-7.402 6.294v1.3h7.943v-1.3H6.055zm0-2h9.943v-1.3H6.055v1.3zm0-3.3h4.564v-1.3H6.055v1.3z",
      fill: "currentColor"
    }), React.createElement("path", {
      d: "M19.9 6.555h-5.142V1.5l5.141 5.055z",
      fill: "currentColor"
    }), React.createElement("circle", {
      cx: 18.5,
      cy: 18,
      r: 4.5,
      fill: "#DC4946"
    }), React.createElement("path", {
      d: "M18.93 15.148c.103 0 .205.03.234.132l1.11 1.115c.131.176.131.41 0 .542l-.438.44c-.044.074-.131.103-.204.103h-.073c-.074 0-.132-.044-.204-.073l-.205.205.467.47 1.24 1.217c.176.205.176.513.074.645l-.102.103a.43.43 0 01-.336.132.429.429 0 01-.336-.132l-.496-.499-1.212-1.218-.204.206c.058.161.058.337-.073.47l-.438.44c-.059.073-.16.102-.263.102a.35.35 0 01-.262-.102l-1.11-1.115c-.132-.176-.132-.41 0-.543l.438-.44c.058-.073.16-.103.262-.103.073 0 .132.044.205.074l1.138-1.144a.443.443 0 01.088-.484l.438-.44c.058-.073.16-.103.263-.103z",
      fill: "#fff"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "legal-document_svg__clip0_4046_27238"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h24v24H0z"
    }))));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
LegalDocument.displayName = 'LegalDocument';
exports["default"] = LegalDocument;