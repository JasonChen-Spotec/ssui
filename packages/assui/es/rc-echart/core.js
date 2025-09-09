/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React, { useRef, useEffect } from 'react';
import useMount from "ahooks/es/useMount";
import useUpdateEffect from "ahooks/es/useUpdateEffect";
import classNames from 'classnames';
var initEmptyObject = {};
var ReactEchartCore = function ReactEchartCore(props) {
  var _a = props.className,
    className = _a === void 0 ? '' : _a,
    option = props.option,
    echarts = props.echarts,
    _b = props.notMerge,
    notMerge = _b === void 0 ? false : _b,
    _c = props.lazyUpdate,
    lazyUpdate = _c === void 0 ? false : _c,
    _d = props.onEvents,
    onEvents = _d === void 0 ? initEmptyObject : _d,
    _e = props.opts,
    opts = _e === void 0 ? initEmptyObject : _e,
    theme = props.theme;
  var chartDomRef = useRef();
  var chartRef = useRef();
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
      if (Object.prototype.hasOwnProperty.call(onEvents, eventName)) {
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
  useMount(function () {
    initEcharts();
    renderEchartDom();
    bindEvents();
  });
  // need reBuild
  useUpdateEffect(function () {
    dispose();
    initEcharts();
    renderEchartDom();
    bindEvents();
  }, [theme, opts]);
  // need setOption
  useUpdateEffect(function () {
    renderEchartDom();
  }, [option, notMerge, lazyUpdate]);
  // need resize
  var resizeChart = function resizeChart() {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  };
  // 页面卸载，销毁监听
  useEffect(function () {
    // 监听echartsResize函数，实现图表自适应
    window.addEventListener('resize', resizeChart);
    return function () {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);
  useUpdateEffect(function () {
    resizeChart();
  }, [className]);
  var defaultStyle = {
    width: '100%',
    height: '100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      chartDomRef.current = node;
    },
    style: defaultStyle,
    className: classNames('react-echart', className)
  });
};
export default ReactEchartCore;