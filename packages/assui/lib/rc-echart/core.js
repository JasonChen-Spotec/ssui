"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
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
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
var react_1 = __importStar(require("react"));
var useMount_1 = __importDefault(require("ahooks/lib/useMount"));
var useUpdateEffect_1 = __importDefault(require("ahooks/lib/useUpdateEffect"));
var classnames_1 = __importDefault(require("classnames"));
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
  return react_1["default"].createElement("div", {
    ref: function ref(node) {
      chartDomRef.current = node;
    },
    style: defaultStyle,
    className: (0, classnames_1["default"])('react-echart', className)
  });
};
exports["default"] = ReactEchartCore;