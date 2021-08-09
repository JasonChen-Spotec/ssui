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

function ProfileOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      viewBox: "0 0 16 16"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M12.8 0H3.2a2.14 2.14 0 00-2.14 2.13v11.74A2.14 2.14 0 003.2 16h9.6a2.14 2.14 0 002.13-2.13V2.13A2.14 2.14 0 0012.8 0zm1.06 13.87a1.06 1.06 0 01-1.06 1.06H3.2a1.06 1.06 0 01-1.07-1.06V2.13A1.06 1.06 0 013.2 1.07h9.6a1.06 1.06 0 011.06 1.06z"
    }), React.createElement("path", {
      fill: "currentColor",
      d: "M11.49 4.27h-4.8a.53.53 0 000 1.06h4.8a.53.53 0 100-1.06zm0 3.2h-4.8a.53.53 0 000 1.06h4.8a.53.53 0 100-1.06zm0 3.2h-4.8a.53.53 0 100 1.06h4.8a.53.53 0 100-1.06zm-6.6-6.4H4.5a.53.53 0 100 1.06h.4a.53.53 0 100-1.06zm0 3.2H4.5a.53.53 0 100 1.06h.4a.53.53 0 100-1.06zm0 3.2H4.5a.53.53 0 100 1.06h.4a.53.53 0 100-1.06z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

ProfileOutlined.displayName = "ProfileOutlined";
exports["default"] = ProfileOutlined;