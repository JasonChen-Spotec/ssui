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
function ColumnarAnalyzeOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.974 4.011a8.184 8.184 0 00-.575-.01h-2.8a8.18 8.18 0 00-.588.011l-.002.013c-.01.117-.01.28-.01.576V20h4V4.6c0-.297 0-.46-.01-.576l-.001-.013-.014-.001zM16 10.001V4.569c0-.253 0-.498-.017-.707a2.022 2.022 0 00-.201-.77 2 2 0 00-.874-.873 2.021 2.021 0 00-.77-.201C13.93 2 13.683 2 13.431 2h-2.864c-.252 0-.498 0-.706.017a2.021 2.021 0 00-.77.2 2 2 0 00-.874.875 2.022 2.022 0 00-.201.77c-.017.208-.017.453-.017.706V6H4.567c-.252 0-.498 0-.706.017a2.021 2.021 0 00-.77.2 2 2 0 00-.874.875 2.022 2.022 0 00-.201.77c-.017.208-.017.453-.017.706v10.864c0 .252 0 .498.017.706.019.229.063.498.201.77a2 2 0 00.874.874c.271.138.541.182.77.2.208.018.454.018.706.018h14.864c.252 0 .498 0 .706-.017.229-.019.499-.063.77-.201a2 2 0 00.874-.874c.138-.272.182-.541.201-.77.017-.208.017-.454.017-.706v-6.864c0-.253 0-.498-.017-.707a2.023 2.023 0 00-.201-.77 2 2 0 00-.874-.873 2.02 2.02 0 00-.77-.201C19.93 10 19.683 10 19.431 10h-3.432zm0 2v8h3.4c.297 0 .459-.001.575-.01l.014-.002v-.013c.01-.116.011-.279.011-.575v-6.8c0-.297 0-.46-.01-.576l-.001-.013-.014-.001a8.205 8.205 0 00-.575-.01h-3.4zm-8-4h-3.4a8.184 8.184 0 00-.589.011v.013c-.01.117-.011.28-.011.576v10.8a8.192 8.192 0 00.011.588l.014.001c.116.01.279.01.575.01h3.4V8zM3.091 21.783z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
ColumnarAnalyzeOutlined.displayName = 'ColumnarAnalyzeOutlined';
exports["default"] = ColumnarAnalyzeOutlined;