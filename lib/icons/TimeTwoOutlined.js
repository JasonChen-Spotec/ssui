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

function TimeTwoOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M7.92 16A7.92 7.92 0 011.45 3.51a.6.6 0 01.84-.15.61.61 0 01.15.85 6.71 6.71 0 1011.08 7.57.61.61 0 011 .67A7.91 7.91 0 017.92 16z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M12.05 8.68H7.92a.62.62 0 01-.51-.28L5.25 5a.61.61 0 011-.64l2 3.13h3.79a.61.61 0 010 1.21z"
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 15.41,
      cy: 8.08,
      r: 0.59
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 13.98,
      cy: 3.66,
      r: 0.61
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 10.37,
      cy: 0.76,
      r: 0.61
    }), React.createElement("circle", {
      fill: "currentColor",
      cx: 5.34,
      cy: 1.12,
      r: 0.61
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

TimeTwoOutlined.displayName = "TimeTwoOutlined";
exports["default"] = TimeTwoOutlined;