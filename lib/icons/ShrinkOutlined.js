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

function ShrinkOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return React.createElement("svg", __assign({
      className: "shrink-outlined_svg__icon",
      viewBox: "0 0 1024 1024"
    }, props), React.createElement("path", {
      fill: "currentColor",
      d: "M646.38 408.9l1.92 1.792a39.674 39.674 0 0026.556 9.79h296.405a41.018 41.018 0 0041.082-40.826 40.954 40.954 0 00-41.082-40.762H765.723l247.451-270.68a40.57 40.57 0 00-2.687-57.592 41.018 41.018 0 00-57.912 2.752l-237.66 260.25V83.444a41.018 41.018 0 10-82.1 0v294.932c0 11.199 4.543 22.461 13.565 30.46zm-388.103-70.07H52.803a40.954 40.954 0 00-41.082 40.762 40.954 40.954 0 0041.082 40.826h296.405a39.866 39.866 0 0028.54-11.646 40.698 40.698 0 0013.438-30.46V83.316a40.954 40.954 0 00-41.082-40.634 40.89 40.89 0 00-40.954 40.826V273.56L71.36 13.438a41.018 41.018 0 00-57.847-2.688 40.506 40.506 0 00-2.687 57.592l247.451 270.552zm150.634 307.475a40.698 40.698 0 00-30.46-13.438H83.456a40.954 40.954 0 00-40.762 41.018c0 22.717 18.301 40.954 40.826 40.954H273.57L13.513 952.629a41.018 41.018 0 00-2.687 57.847 40.506 40.506 0 0057.591 2.687l270.616-247.451v205.601a40.954 40.954 0 0040.762 41.082 40.954 40.954 0 0040.826-41.082V674.845a39.866 39.866 0 00-9.79-26.492l-1.92-1.984zm601.512 306.26L750.365 714.902h190.052a41.018 41.018 0 100-82.1H645.42a40.698 40.698 0 00-32.25 15.486 39.674 39.674 0 00-9.791 26.492v296.468c0 22.589 18.3 41.082 40.762 41.082a40.954 40.954 0 0040.826-41.082V765.648l270.616 247.451a40.954 40.954 0 0054.904-60.599z"
    }));
  };

  return React.createElement(Icon_1["default"], __assign({}, componentProps, {
    component: IconNode
  }));
}

ShrinkOutlined.displayName = "ShrinkOutlined";
exports["default"] = ShrinkOutlined;