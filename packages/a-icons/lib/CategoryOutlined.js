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
function CategoryOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.568 2h3.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v1.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201C8.93 9 8.684 9 8.432 9H4.568c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C2 6.93 2 6.684 2 6.432V4.6v-.032c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C4.07 2 4.316 2 4.568 2zm-.557 2.011v.014C4 4.14 4 4.303 4 4.6v1.8a8.185 8.185 0 00.011.589h.014C4.14 7 4.303 7 4.6 7h3.8a8.183 8.183 0 00.589-.011v-.014C9 6.86 9 6.697 9 6.4V4.6a8.184 8.184 0 00-.011-.589h-.014A8.185 8.185 0 008.4 4H4.6a8.186 8.186 0 00-.589.011zM15.568 15h3.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v1.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.208.017-.454.017-.706.017h-3.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.02 2.02 0 01-.201-.77C13 19.93 13 19.684 13 19.432V17.6v-.032c0-.252 0-.498.017-.706a2.02 2.02 0 01.201-.77 2 2 0 01.874-.874 2.02 2.02 0 01.77-.201c.208-.017.454-.017.706-.017zm-.556 2.012l-.002.013c-.01.116-.01.279-.01.575v1.8a8.207 8.207 0 00.011.589h.014c.116.01.278.011.575.011h3.8c.297 0 .459 0 .575-.01l.014-.001v-.014c.01-.116.011-.279.011-.575v-1.8c0-.297 0-.459-.01-.575l-.001-.013-.014-.002A8.207 8.207 0 0019.4 17h-3.8a8.207 8.207 0 00-.588.012zM4.568 11h3.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v5.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201C8.93 22 8.684 22 8.432 22H4.568c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C2 19.93 2 19.684 2 19.432V13.6v-.032c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874 2.02 2.02 0 01.77-.201C4.07 11 4.316 11 4.568 11zm-.557 2.011v.014C4 13.14 4 13.303 4 13.6v5.8a8.187 8.187 0 00.011.589h.014c.116.01.278.011.575.011h3.8c.297 0 .459 0 .575-.01l.014-.001v-.014C9 19.86 9 19.696 9 19.4v-5.8a8.185 8.185 0 00-.011-.588l-.014-.002A8.205 8.205 0 008.4 13H4.6a8.205 8.205 0 00-.589.011zM15.568 2h3.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v5.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.208.017-.454.017-.706.017h-3.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.02 2.02 0 01-.201-.77C13 10.93 13 10.684 13 10.432V4.6v-.032c0-.252 0-.498.017-.706a2.02 2.02 0 01.201-.77 2 2 0 01.874-.874c.271-.138.541-.182.77-.201C15.07 2 15.316 2 15.568 2zm-.556 2.011l-.002.014C15 4.14 15 4.303 15 4.6v5.8a8.207 8.207 0 00.011.589h.014c.116.01.278.011.575.011h3.8c.297 0 .459 0 .575-.01l.014-.001v-.014c.01-.116.011-.278.011-.575V4.6c0-.297 0-.459-.01-.575l-.001-.014A8.187 8.187 0 0019.4 4h-3.8a8.187 8.187 0 00-.588.011z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
CategoryOutlined.displayName = 'CategoryOutlined';
exports["default"] = CategoryOutlined;