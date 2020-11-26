"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useMount = _interopRequireDefault(require("ahooks/lib/useMount"));

var _useEventListener = _interopRequireDefault(require("ahooks/lib/useEventListener"));

var _classnames = _interopRequireDefault(require("classnames"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var ReactEchart = function ReactEchart(props) {
  var className = props.className,
      option = props.option,
      style = props.style,
      echarts = props.echarts,
      notMerge = props.notMerge,
      lazyUpdate = props.lazyUpdate,
      silent = props.silent,
      onEvents = props.onEvents,
      opts = props.opts,
      theme = props.theme;
  var chartDomRef = (0, _react.useRef)(null);
  var chartRef = (0, _react.useRef)({});

  var bindEvents = function bindEvents() {
    var bindEventFunc = function bindEventFunc(eventName, func) {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof func === 'function') {
        // binding event
        // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
        chartRef.current.on(eventName, function (param) {
          func(param, chartRef.current);
        });
      }
    }; // loop and bind
    // eslint-disable-next-line no-restricted-syntax


    for (var eventName in onEvents) {
      if (Object.prototype.hasOwnProperty.call(onEvents, eventName)) {
        bindEventFunc(eventName, onEvents[eventName]);
      }
    }
  };

  var initEcharts = function initEcharts() {
    chartRef.current = echarts.init(chartDomRef.current);
  };

  var dispose = function dispose() {
    chartRef.current.dispose(chartDomRef.current);
  };

  (0, _useMount["default"])(function () {
    initEcharts();
    bindEvents();
  });
  (0, _react.useEffect)(function () {
    chartRef.current.setOption(option, notMerge, lazyUpdate, silent);
  }, [option, notMerge, lazyUpdate, silent]);
  (0, _react.useEffect)(function () {
    dispose();
  }, [theme, opts, onEvents]); // need setOption
  // need resize

  var resizeChart = function resizeChart() {
    chartRef.current.resize();
  };

  (0, _useEventListener["default"])('resize', (0, _throttle["default"])(resizeChart, 180), {
    target: chartDomRef.current
  });
  (0, _react.useEffect)(function () {
    resizeChart();
  }, [style, className]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: chartDomRef,
    style: style,
    className: (0, _classnames["default"])('react-echart', className)
  });
};

ReactEchart.defaultProps = {
  option: {},
  notMerge: false,
  lazyUpdate: false,
  silent: false
};
var _default = ReactEchart; // import React, { useRef, useEffect } from 'react';
// import classNames from 'classnames';
// import throttle from 'lodash/throttle';
// import useMount from 'ahooks/lib/useMount';
// import useEventListener from 'ahooks/lib/useEventListener';
// import echarts from '@/shared/thirdPart/echarts';
// const Bar = ({ option, className, style }) => {
//   const chartDomRef = useRef(null);
//   const chartRef = useRef({});
//   useMount(() => {
//     chartRef.current = echarts.init(chartDomRef.current);
//   });
//   const resizeChart = () => {
//     chartRef.current.resize();
//   };
//   useEventListener('resize', throttle(resizeChart, 180), { target: window });
//   useEffect(() => {
//     chartRef.current.setOption(option);
//   },[option]);
//   return (
//     <div ref={chartDomRef} className={classNames(className)} style={style} />
//   );
// };
// Bar.defaultProps = {
//   style: {}
// };
// export default Bar;

exports["default"] = _default;