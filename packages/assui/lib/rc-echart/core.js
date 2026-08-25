"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useMount_1 = tslib_1.__importDefault(require("ahooks/lib/useMount"));
var useUpdateEffect_1 = tslib_1.__importDefault(require("ahooks/lib/useUpdateEffect"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var initEmptyObject = {};
var ReactEchartCore = function ReactEchartCore(props) {
  var _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    option = props.option,
    echarts = props.echarts,
    _props$notMerge = props.notMerge,
    notMerge = _props$notMerge === void 0 ? false : _props$notMerge,
    _props$lazyUpdate = props.lazyUpdate,
    lazyUpdate = _props$lazyUpdate === void 0 ? false : _props$lazyUpdate,
    _props$onEvents = props.onEvents,
    onEvents = _props$onEvents === void 0 ? initEmptyObject : _props$onEvents,
    _props$opts = props.opts,
    opts = _props$opts === void 0 ? initEmptyObject : _props$opts,
    theme = props.theme;
  var chartDomRef = (0, react_1.useRef)();
  var chartRef = (0, react_1.useRef)();
  var bindEvents = function bindEvents() {
    var bindEventFunc = function bindEventFunc(eventName, func) {
      if (typeof eventName === 'string' && typeof func === 'function') {
        if (chartRef.current) {
          chartRef.current.on(eventName, function (param) {
            func(param, chartRef.current);
          });
        }
      }
    };
    for (var eventName in onEvents) {
      if (Object.hasOwn(onEvents, eventName)) {
        bindEventFunc(eventName, onEvents[eventName]);
      }
    }
  };
  var initEcharts = function initEcharts() {
    chartRef.current = echarts.init(chartDomRef.current, theme, opts);
  };
  var renderEchartDom = function renderEchartDom() {
    if (chartRef.current) {
      chartRef.current.setOption(option, notMerge, lazyUpdate);
    }
  };
  var dispose = function dispose() {
    if (chartRef.current) {
      chartRef.current.dispose();
    }
  };
  // first add
  (0, useMount_1["default"])(function () {
    initEcharts();
    renderEchartDom();
    bindEvents();
  });
  // need reBuild
  (0, useUpdateEffect_1["default"])(function () {
    dispose();
    initEcharts();
    renderEchartDom();
    bindEvents();
  }, [theme, opts]);
  // need setOption
  (0, useUpdateEffect_1["default"])(function () {
    renderEchartDom();
  }, [option, notMerge, lazyUpdate]);
  // need resize
  var resizeChart = function resizeChart() {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  };
  // 页面卸载，销毁监听
  (0, react_1.useEffect)(function () {
    // 监听echartsResize函数，实现图表自适应
    window.addEventListener('resize', resizeChart);
    return function () {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);
  (0, useUpdateEffect_1["default"])(function () {
    resizeChart();
  }, [className]);
  var defaultStyle = {
    width: '100%',
    height: '100%'
  };
  return (0, jsx_runtime_1.jsx)("div", {
    ref: function ref(node) {
      chartDomRef.current = node;
    },
    style: defaultStyle,
    className: (0, classnames_1["default"])('react-echart', className)
  });
};
exports["default"] = ReactEchartCore;