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
function PeopleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M12 16v-2a8 8 0 00-8 8h2a6 6 0 016-6z",
      fill: "currentColor"
    }), React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 7c0 3.315 2.685 6 6 6s6-2.685 6-6-2.685-6-6-6-6 2.685-6 6zm10 0c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zM17.231 14.253a.377.377 0 00-.436-.192c-.65.18-1.236.514-1.716.96a.377.377 0 00-.081.443.754.754 0 01-.677 1.087h-.011a.377.377 0 00-.365.264 4.147 4.147 0 00-.106 2.08c.039.19.214.32.406.3a.754.754 0 01.652 1.237.377.377 0 00.017.505c.49.509 1.108.893 1.804 1.1a.377.377 0 00.467-.246.755.755 0 011.438 0c.063.195.27.305.467.247a4.15 4.15 0 001.804-1.1.377.377 0 00.017-.506.754.754 0 01.652-1.237.377.377 0 00.406-.3 4.163 4.163 0 00-.106-2.08.377.377 0 00-.365-.264h-.01a.754.754 0 01-.678-1.087.377.377 0 00-.081-.443 4.144 4.144 0 00-1.716-.96.377.377 0 00-.436.192.754.754 0 01-1.346 0zm.673 5.127a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
PeopleOutlined.displayName = 'PeopleOutlined';
exports["default"] = PeopleOutlined;