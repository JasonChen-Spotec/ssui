import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import useMount from "ahooks/es/useMount";
import useUpdateEffect from "ahooks/es/useUpdateEffect";
import classNames from 'classnames';
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
  return _jsx("div", {
    ref: function ref(node) {
      chartDomRef.current = node;
    },
    style: defaultStyle,
    className: classNames('react-echart', className)
  });
};
export default ReactEchartCore;