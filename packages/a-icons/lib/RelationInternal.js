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
function RelationInternal(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), React.createElement("path", {
      d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm.042 3.67a2.462 2.462 0 00-2.437 2.82 5.885 5.885 0 00-3.483 5.772 2.461 2.461 0 102.332 4.309 5.86 5.86 0 003.54 1.182c1.33 0 2.56-.442 3.545-1.188a2.461 2.461 0 102.326-4.309A5.884 5.884 0 0014.47 7.53a2.462 2.462 0 00-2.429-2.86zm-2.037 3.846a2.46 2.46 0 004.049.034 4.785 4.785 0 012.719 4.527 2.462 2.462 0 00-1.983 3.674 4.762 4.762 0 01-2.797.902 4.762 4.762 0 01-2.787-.895 2.463 2.463 0 00-1.993-3.682 4.785 4.785 0 012.792-4.56zM7.07 14.173a1.361 1.361 0 110 2.723 1.361 1.361 0 010-2.723zm9.86 0a1.36 1.36 0 11-.001 2.721 1.36 1.36 0 010-2.721zM12.042 5.77a1.36 1.36 0 11-.001 2.722 1.36 1.36 0 01.001-2.722z",
      fill: "#47A92A"
    }));
  };
  return React.createElement(icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}
RelationInternal.displayName = 'RelationInternal';
exports["default"] = RelationInternal;