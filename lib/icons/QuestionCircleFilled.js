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

function QuestionCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "inherit",
      d: "M8 0C3.6 0 0 3.5 0 7.9V8c0 4.5 3.7 8 8 8 4.5 0 8-3.7 8-8s-3.5-8-8-8z"
    }), React.createElement("path", {
      fill: "currentColor",
      className: "question-circle-filled_svg__st0",
      d: "M9.7 7.4c.8-.7 1.4-1.3 1.4-2.3C11.1 3.4 9.7 2 8 2 6.3 2 4.9 3.4 4.9 5.1c0 .4.4.8.8.8.5 0 .8-.5.8-.8 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .2-.2.6-.8 1.3-.8.7-1.5 1.4-1.5 2.4v.9c0 .4.4.8.8.8s.8-.4.8-.8v-.9c0-.3.6-.9.9-1.4zM9.1 12.8c0-.7-.5-1.1-1.1-1.1-.7 0-1.1.5-1.1 1.1 0 .7.5 1.1 1.1 1.1.7 0 1.1-.4 1.1-1.1z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

QuestionCircleFilled.displayName = "QuestionCircleFilled";
exports["default"] = QuestionCircleFilled;