'use strict';

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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function get() {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {
          enumerable: true,
          value: v,
        });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod) {
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
      }
    __setModuleDefault(result, mod);
    return result;
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
var react_1 = __importStar(require('react'));
var copy_to_clipboard_1 = __importDefault(require('copy-to-clipboard'));
var tooltip_1 = __importDefault(require('antd/lib/tooltip'));
var CopyToClipboard = function CopyToClipboard(props) {
  var text = props.text,
    onCopy = props.onCopy,
    children = props.children,
    options = props.options,
    tooltipTitle = props.tooltipTitle,
    tooltipProps = props.tooltipProps;
  var _a = __read((0, react_1.useState)(false), 2),
    tooltipVisible = _a[0],
    setTooltipVisible = _a[1];
  var handleCopySuccess = function handleCopySuccess() {
    setTooltipVisible(true);
    setTimeout(function () {
      setTooltipVisible(false);
    }, 1000);
  };
  var onClick = function onClick(event) {
    var elem = react_1['default'].Children.only(children);
    var result = (0, copy_to_clipboard_1['default'])(text, options);
    if (onCopy) {
      onCopy(text, result);
    }
    if (tooltipTitle) {
      handleCopySuccess();
    }
    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  };
  return tooltipTitle
    ? react_1['default'].createElement(
        tooltip_1['default'],
        __assign(
          {
            placement: 'topLeft',
            open: tooltipVisible,
            title: tooltipTitle,
          },
          tooltipProps,
        ),
        react_1['default'].createElement(
          'span',
          {
            onClick: onClick,
          },
          children,
        ),
      )
    : react_1['default'].cloneElement(children, {
        onClick: onClick,
      });
};
exports['default'] = react_1['default'].memo(CopyToClipboard);
