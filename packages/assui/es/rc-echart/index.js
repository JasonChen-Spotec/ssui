var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
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
import * as echarts from 'echarts';
import React from 'react';
import RcEchartCore from './core';
var RcEcharts = function RcEcharts(props) {
  return /*#__PURE__*/ React.createElement(
    RcEchartCore,
    __assign(
      {
        echarts: echarts,
      },
      props,
    ),
  );
};
export default RcEcharts;
