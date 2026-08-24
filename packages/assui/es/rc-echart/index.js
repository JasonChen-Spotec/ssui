function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import * as echarts from 'echarts';
import RcEchartCore from './core';
var RcEcharts = function RcEcharts(props) {
  return _jsx(RcEchartCore, _extends({
    echarts: echarts
  }, props));
};
export default RcEcharts;