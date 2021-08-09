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

function FormOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M12.62 14.06H1.94a.52.52 0 01-.52-.52V4a.52.52 0 01.52-.52h4.89a.52.52 0 01.52.52.52.52 0 01-.52.52H2.46V13h9.64V9.49a.52.52 0 01.52-.49.52.52 0 01.52.52v4a.52.52 0 01-.52.52z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M5.88 11.18a.54.54 0 01-.36-.18.56.56 0 01-.15-.48l.42-2.25A.49.49 0 015.94 8l6.29-6.22a.53.53 0 01.74 0l1.75 1.75a.53.53 0 010 .74l-6.3 6.22a.47.47 0 01-.25.13L6 11.17zm.91-2.52L6.54 10l1.25-.29 5.82-5.75-1-1-5.82 5.7z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

FormOutlined.displayName = "FormOutlined";
exports["default"] = FormOutlined;