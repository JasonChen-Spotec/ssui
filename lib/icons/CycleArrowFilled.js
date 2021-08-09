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
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
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

var Icon_1 = __importDefault(require("assui/lib/Icon"));

function CycleArrowFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("g", {
      fill: "currentColor"
    }, React.createElement("path", {
      d: "M11.3 11.7c-.9.9-2.1 1.3-3.3 1.3-2.7 0-4.8-2.1-5-4.7h1.2L2.1 5.1 0 8.3h1.3c.2 3.6 3.1 6.5 6.7 6.5 1.7 0 3.3-.6 4.5-1.7.4-.3.4-.9.1-1.2-.3-.5-.9-.5-1.3-.2zM14.8 8c0-3.7-3-6.8-6.8-6.8-1.7 0-3.3.7-4.5 1.8-.4.3-.4.8-.1 1.2.3.4.9.4 1.2.1C5.6 3.4 6.8 3 8 3c2.8 0 5 2.2 5 5h-1.2l2.1 3.2L16 8h-1.2z"
    })));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

CycleArrowFilled.displayName = "CycleArrowFilled";
exports["default"] = CycleArrowFilled;