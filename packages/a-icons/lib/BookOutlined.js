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
function BookOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.5 1c.075 0 .149.008.22.024.935.04 1.566.142 2.096.412a4 4 0 011.748 1.748C21 4.04 21 5.16 21 7.4v9.2c0 2.24 0 3.36-.436 4.216a4 4 0 01-1.748 1.748C17.96 23 16.84 23 14.6 23H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 01-1.748-1.748C3 19.96 3 18.84 3 16.6V7.4c0-2.24 0-3.36.436-4.216a4 4 0 011.748-1.748C6.04 1 7.16 1 9.4 1h7.1zm-7 2h-.1c-1.153 0-1.898.002-2.464.048-.544.044-.745.12-.844.17a2 2 0 00-.874.874c-.05.099-.126.3-.17.844C5.002 5.502 5 6.246 5 7.4V17h14V7.4c0-1.153-.002-1.898-.048-2.464-.044-.544-.12-.745-.17-.844a2 2 0 00-.874-.874A1.393 1.393 0 0017.5 3.1V11a1 1 0 01-1.723.691L13.5 9.311l-2.277 2.38A1 1 0 019.5 11V3zm2 0v5.508l1.277-1.336a1 1 0 011.446 0L15.5 8.508V3L14.6 3h-3.1zM5.048 19.064L5.043 19h13.914l-.005.064c-.044.544-.12.745-.17.844a2 2 0 01-.874.874c-.099.05-.3.126-.844.17-.566.046-1.31.048-2.464.048H9.4c-1.153 0-1.898-.002-2.464-.048-.544-.044-.745-.12-.844-.17a2 2 0 01-.874-.874c-.05-.099-.126-.3-.17-.844z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
BookOutlined.displayName = 'BookOutlined';
exports["default"] = BookOutlined;