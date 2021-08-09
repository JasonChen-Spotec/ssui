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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var echarts_1 = __importDefault(require("echarts"));

var core_1 = __importDefault(require("./core"));

var ReactEcharts = function ReactEcharts(props) {
  return react_1["default"].createElement(core_1["default"], __assign({
    echarts: echarts_1["default"]
  }, props));
};

exports["default"] = ReactEcharts;