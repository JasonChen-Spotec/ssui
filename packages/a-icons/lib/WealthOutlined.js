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
function WealthOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M5 7.967v3.53c.004.018.032.098.184.236.205.187.558.401 1.079.601 1.035.399 2.533.666 4.237.666 1.704 0 3.202-.267 4.237-.666.521-.2.874-.414 1.08-.6.151-.139.179-.219.183-.237v-3.53a7.506 7.506 0 01-.545.234C14.138 8.708 12.385 9 10.5 9c-1.886 0-3.638-.292-4.955-.799A7.514 7.514 0 015 7.967zM18 5.5v6.522a5.5 5.5 0 11-4.897 8.783c-.81.126-1.689.195-2.603.195-1.886 0-3.638-.292-4.955-.799-.656-.252-1.254-.577-1.707-.988C3.385 18.801 3 18.223 3 17.5v-12c0-.724.385-1.301.838-1.713.453-.411 1.051-.736 1.707-.988C6.862 2.292 8.615 2 10.5 2c1.886 0 3.638.292 4.955.799.655.252 1.254.577 1.707.988.453.412.838.99.838 1.713zm-13 0c.007.023.04.102.184.233.205.187.558.401 1.079.601C7.298 6.733 8.796 7 10.5 7c1.704 0 3.202-.267 4.237-.666.521-.2.874-.414 1.08-.6.144-.132.176-.21.182-.234-.006-.023-.038-.102-.183-.233-.205-.187-.558-.401-1.079-.601C13.702 4.267 12.204 4 10.5 4c-1.704 0-3.202.267-4.237.666-.521.2-.874.414-1.08.6-.144.132-.176.21-.182.234zm0 8.467v3.53c.004.018.032.098.184.236.205.187.558.401 1.079.601 1.035.399 2.533.666 4.237.666.587 0 1.152-.032 1.683-.09A5.505 5.505 0 0112 17.5c0-.954.243-1.852.67-2.634-.69.088-1.419.134-2.17.134-1.886 0-3.638-.292-4.955-.799A7.532 7.532 0 015 13.967zM17.5 14a3.5 3.5 0 10.001 7 3.5 3.5 0 00-.001-7z",
      fill: "currentColor"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
WealthOutlined.displayName = 'WealthOutlined';
exports["default"] = WealthOutlined;