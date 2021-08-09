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

var react_1 = __importStar(require("react"));

var prop_types_1 = __importDefault(require("prop-types"));

var useMount_1 = __importDefault(require("ahooks/lib/useMount"));

var useUpdateEffect_1 = __importDefault(require("ahooks/lib/useUpdateEffect"));

var classnames_1 = __importDefault(require("classnames"));

var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));

var isFunction_1 = __importDefault(require("lodash/isFunction"));

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
  var chartDomRef = react_1.useRef(null);
  var chartRef = react_1.useRef({});

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


  useMount_1["default"](function () {
    initEcharts();
    renderEchartDom();
    bindEvents();
  }); // need reBuild

  useUpdateEffect_1["default"](function () {
    dispose();
    renderEchartDom();
    bindEvents();
  }, [theme, opts, onEvents]); // need setOption

  useUpdateEffect_1["default"](function () {
    renderEchartDom();
  }, [option, notMerge, lazyUpdate, silent]); // need resize

  var resizeChart = function resizeChart() {
    isFunction_1["default"](chartRef.current.resize) && chartRef.current.resize();
  };

  react_1.useLayoutEffect(function () {
    var resizeObserver = new resize_observer_polyfill_1["default"](function () {
      resizeChart();
    });
    resizeObserver.observe(chartDomRef.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, []);
  useUpdateEffect_1["default"](function () {
    resizeChart();
  }, [style, className]);

  var finalyStyle = __assign({
    width: '100%',
    height: '100%'
  }, style);

  return react_1["default"].createElement("div", {
    ref: chartDomRef,
    style: finalyStyle,
    className: classnames_1["default"]('react-echart', className)
  });
};

ReactEchartCore.propTypes = {
  option: prop_types_1["default"].object.isRequired,
  echarts: prop_types_1["default"].object,
  notMerge: prop_types_1["default"].bool,
  lazyUpdate: prop_types_1["default"].bool,
  style: prop_types_1["default"].object,
  className: prop_types_1["default"].string,
  theme: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].object]),
  onEvents: prop_types_1["default"].object,
  opts: prop_types_1["default"].shape({
    devicePixelRatio: prop_types_1["default"].number,
    renderer: prop_types_1["default"].oneOf(['canvas', 'svg']),
    width: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].oneOf([null, undefined, 'auto'])]),
    height: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].oneOf([null, undefined, 'auto'])])
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
exports["default"] = ReactEchartCore;