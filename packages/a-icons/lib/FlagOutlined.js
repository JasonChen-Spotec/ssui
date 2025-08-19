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
function FlagOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M4 13H3a1 1 0 001 1v-1zm8.891-.546L12 12l.891.454zm-.437.437L12 12l.454.891zm0-9.782L12 4l.454-.891zm.437.437L12 4l.891-.454zm-8.345-.437L5 4l-.454-.891zm-.437.437L5 4l-.891-.454zM13 5V4a1 1 0 00-1 1h1zm.546 9.891L14 14l-.454.891zm-.437-.437L14 14l-.891.454zm7.782 0L20 14l.891.454zm-.437.437L20 14l.454.891zm0-9.782L20 6l.454-.891zm.437.437L20 6l.891-.454zM3 21v1h2v-1H3zM5 4a1 1 0 00-2 0h2zm.6-1v1h5.8V2H5.6v1zM13 4.6h-1v6.8h2V4.6h-1zM11.4 13v-1H4v2h7.4v-1zM4 13h1V4.6H3V13h1zm9-1.6h-1c0 .296 0 .459-.01.575-.009.105-.02.082.01.025l.891.454.891.454c.138-.271.182-.541.201-.77.018-.217.017-.474.017-.738h-1zM11.4 13v1c.264 0 .521 0 .738-.017.229-.019.499-.063.77-.201l-.454-.891L12 12c.057-.03.08-.019-.025-.01-.116.01-.278.01-.575.01v1zm1.491-.546L12 12l.454.891.454.891a2 2 0 00.874-.874l-.891-.454zM11.4 3v1c.296 0 .459 0 .575.01.105.009.082.02.025-.01l.454-.891.454-.891a2.022 2.022 0 00-.77-.201C11.921 1.999 11.664 2 11.4 2v1zM13 4.6h1c0-.264 0-.521-.017-.738a2.022 2.022 0 00-.201-.77l-.891.454L12 4c-.03-.058-.019-.08-.01.025.01.116.01.278.01.575h1zm-.546-1.491L12 4l.891-.454.891-.454a2 2 0 00-.874-.874l-.454.891zM5.6 3V2c-.264 0-.521 0-.738.017a2.021 2.021 0 00-.77.201l.454.891L5 4c-.058.03-.08.019.025.01C5.14 4 5.303 4 5.6 4V3zM4 4.6h1c0-.297 0-.459.01-.575C5.02 3.92 5.03 3.942 5 4l-.891-.454-.891-.454a2.021 2.021 0 00-.201.77C2.999 4.079 3 4.336 3 4.6h1zm.546-1.491l-.454-.891a2 2 0 00-.874.874l.891.454L5 4l-.454-.891zM13 5v1h6.4V4H13v1zm8 1.6h-1v6.8h2V6.6h-1zM19.4 15v-1h-4.8v2h4.8v-1zM13 13.4h1V5h-2v8.4h1zm1.6 1.6v-1c-.296 0-.459 0-.575-.01-.105-.009-.082-.02-.025.01l-.454.891-.454.891c.271.138.541.182.77.201.217.018.474.017.738.017v-1zM13 13.4h-1c0 .264 0 .521.017.738.019.229.063.499.201.77l.891-.454L14 14c.03.057.019.08.01-.025A8.207 8.207 0 0114 13.4h-1zm.546 1.491L14 14l-.891.454-.891.454a2 2 0 00.874.874l.454-.891zM21 13.4h-1c0 .296 0 .459-.01.575-.009.105-.02.082.01.025l.891.454.891.454c.138-.271.182-.541.201-.77.018-.217.017-.474.017-.738h-1zM19.4 15v1c.264 0 .521 0 .738-.017.229-.019.499-.063.77-.201l-.454-.891L20 14c.058-.03.08-.019-.025-.01-.116.01-.279.01-.575.01v1zm1.491-.546L20 14l.454.891.454.891a2 2 0 00.874-.874l-.891-.454zM19.4 5v1c.297 0 .459 0 .575.01.105.009.082.02.025-.01l.454-.891.454-.891a2.022 2.022 0 00-.77-.201C19.921 3.999 19.663 4 19.4 4v1zM21 6.6h1c0-.264 0-.521-.017-.738a2.022 2.022 0 00-.201-.77l-.891.454L20 6c-.03-.058-.019-.08-.01.025.01.116.01.278.01.575h1zm-.546-1.491L20 6l.891-.454.891-.454a2 2 0 00-.874-.874l-.454.891zM4 21h1V4H3v17h1z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
FlagOutlined.displayName = 'FlagOutlined';
exports["default"] = FlagOutlined;