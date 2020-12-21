"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useMount = _interopRequireDefault(require("ahooks/lib/useMount"));

var _useUpdateEffect = _interopRequireDefault(require("ahooks/lib/useUpdateEffect"));

var _classnames = _interopRequireDefault(require("classnames"));

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
  var chartDomRef = (0, _react.useRef)(null);
  var chartRef = (0, _react.useRef)({});

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


  (0, _useMount["default"])(function () {
    initEcharts();
    renderEchartDom();
    bindEvents();
  }); // need reBuild

  (0, _useUpdateEffect["default"])(function () {
    dispose();
    renderEchartDom();
    bindEvents();
  }, [theme, opts, onEvents]); // need setOption

  (0, _useUpdateEffect["default"])(function () {
    renderEchartDom();
  }, [option, notMerge, lazyUpdate, silent]); // need resize

  var resizeChart = function resizeChart() {
    chartRef.current.resize();
  };

  (0, _react.useLayoutEffect)(function () {
    var resizeObserver = new ResizeObserver(function () {
      resizeChart();
    });
    resizeObserver.observe(chartDomRef.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, []);
  (0, _useUpdateEffect["default"])(function () {
    resizeChart();
  }, [style, className]);
  var finalyStyle = Object.assign({
    width: '100%',
    height: '100%'
  }, style);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: chartDomRef,
    style: finalyStyle,
    className: (0, _classnames["default"])('react-echart', className)
  });
};

ReactEchartCore.propTypes = {
  option: _propTypes["default"].object.isRequired,
  echarts: _propTypes["default"].object,
  notMerge: _propTypes["default"].bool,
  lazyUpdate: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  onEvents: _propTypes["default"].object,
  opts: _propTypes["default"].shape({
    devicePixelRatio: _propTypes["default"].number,
    renderer: _propTypes["default"].oneOf(['canvas', 'svg']),
    width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf([null, undefined, 'auto'])]),
    height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].oneOf([null, undefined, 'auto'])])
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
var _default = ReactEchartCore;
exports["default"] = _default;