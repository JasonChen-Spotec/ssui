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

import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import useMount from 'ahooks/lib/useMount';
import useUpdateEffect from 'ahooks/lib/useUpdateEffect';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import isFunction from 'lodash/isFunction';

var ReactEchartCore = function ReactEchartCore(props) {
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
  var chartDomRef = useRef(null);
  var chartRef = useRef({});

  var bindEvents = function bindEvents() {
    var bindEventFunc = function bindEventFunc(eventName, func) {
      if (typeof eventName === 'string' && typeof func === 'function') {
        chartRef.current.on(eventName, function (param) {
          func(param, chartRef.current);
        });
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
    chartRef.current.setOption(option, notMerge, lazyUpdate, silent);
  };

  var dispose = function dispose() {
    chartRef.current.dispose(chartDomRef.current);
  }; // first add


  useMount(function () {
    initEcharts();
    renderEchartDom();
    bindEvents();
  }); // need reBuild

  useUpdateEffect(function () {
    dispose();
    renderEchartDom();
    bindEvents();
  }, [theme, opts, onEvents]); // need setOption

  useUpdateEffect(function () {
    renderEchartDom();
  }, [option, notMerge, lazyUpdate, silent]); // need resize

  var resizeChart = function resizeChart() {
    isFunction(chartRef.current.resize) && chartRef.current.resize();
  };

  useLayoutEffect(function () {
    var resizeObserver = new ResizeObserver(function () {
      resizeChart();
    });
    resizeObserver.observe(chartDomRef.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, []);
  useUpdateEffect(function () {
    resizeChart();
  }, [style, className]);

  var finalyStyle = __assign({
    width: '100%',
    height: '100%'
  }, style);

  return /*#__PURE__*/React.createElement("div", {
    ref: chartDomRef,
    style: finalyStyle,
    className: classNames('react-echart', className)
  });
};

ReactEchartCore.propTypes = {
  option: PropTypes.object.isRequired,
  echarts: PropTypes.object,
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onEvents: PropTypes.object,
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null, undefined, 'auto'])])
  })
};
ReactEchartCore.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: null,
  onEvents: {},
  opts: {}
};
export default ReactEchartCore;