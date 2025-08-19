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
function TreeAreaOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("g", {
      clipPath: "url(#tree-area-outlined_svg__clip0_14276_15275)"
    }, React.createElement("path", {
      d: "M4.17 16.665a.833.833 0 10-1.667 0 .833.833 0 001.666 0zm6.666 0a.833.833 0 10-1.667 0 .833.833 0 001.667 0zm6.667 0a.833.833 0 10-1.667 0 .833.833 0 001.667 0zm-.834-12.5c0-.4 0-.657-.014-.855a.962.962 0 00-.05-.297.833.833 0 00-.45-.45.965.965 0 00-.297-.05 14.12 14.12 0 00-.855-.014h-10c-.4 0-.658 0-.856.014a.965.965 0 00-.297.05.833.833 0 00-.45.45.965.965 0 00-.05.297 14.12 14.12 0 00-.014.855c0 .4 0 .658.014.856.013.19.035.262.05.297a.833.833 0 00.45.45.965.965 0 00.297.05c.198.014.456.014.856.014h10c.4 0 .657 0 .855-.014a.965.965 0 00.297-.05.833.833 0 00.45-.45.962.962 0 00.05-.297c.014-.198.014-.456.014-.856zm1.667 0c0 .377 0 .701-.018.969a2.56 2.56 0 01-.173.822 2.5 2.5 0 01-1.352 1.352 2.56 2.56 0 01-.822.173c-.267.018-.592.018-.968.018h-4.167v2.5h1.833c.687 0 1.252-.001 1.71.036.469.039.9.12 1.304.327l.23.128c.521.32.947.78 1.227 1.328l.071.153c.155.36.222.741.255 1.151.027.337.032.73.034 1.187a2.499 2.499 0 01-.83 4.856 2.5 2.5 0 01-.837-4.854 14.485 14.485 0 00-.028-1.053 2.26 2.26 0 00-.103-.572l-.047-.11a1.668 1.668 0 00-.614-.665l-.115-.064c-.13-.067-.317-.12-.683-.15-.375-.031-.86-.032-1.574-.032h-1.833v2.645a2.499 2.499 0 11-3.333 2.355c0-1.088.696-2.011 1.666-2.355v-2.645H7.336c-.714 0-1.2 0-1.574.031a2.26 2.26 0 00-.572.104l-.11.047c-.275.14-.505.352-.665.614l-.064.114c-.067.13-.12.318-.15.683-.023.276-.028.611-.03 1.053a2.499 2.499 0 01-.835 4.854 2.5 2.5 0 01-.832-4.856c.002-.457.008-.85.035-1.187.038-.468.12-.9.327-1.304l.128-.23c.32-.521.78-.947 1.328-1.226l.153-.072c.36-.154.741-.221 1.151-.255C6.085 9.998 6.65 10 7.336 10h1.833v-2.5H5.003c-.377 0-.701 0-.969-.018a2.56 2.56 0 01-.822-.173A2.5 2.5 0 011.86 5.956a2.561 2.561 0 01-.173-.822c-.018-.268-.018-.592-.018-.969 0-.376 0-.7.018-.968.019-.275.06-.55.173-.822l.105-.223a2.5 2.5 0 011.247-1.13A2.56 2.56 0 014.034.85c.268-.018.592-.018.969-.018h10c.376 0 .7 0 .968.018.275.019.55.06.822.172a2.5 2.5 0 011.352 1.353l.072.204c.06.205.087.412.101.618.018.267.018.592.018.968z",
      fill: "currentColor"
    })), React.createElement("defs", null, React.createElement("clipPath", {
      id: "tree-area-outlined_svg__clip0_14276_15275"
    }, React.createElement("path", {
      fill: "#fff",
      d: "M0 0h20v20H0z"
    }))));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
TreeAreaOutlined.displayName = 'TreeAreaOutlined';
exports["default"] = TreeAreaOutlined;