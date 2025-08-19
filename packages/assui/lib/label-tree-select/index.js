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
var react_1 = __importDefault(require('react'));
var useControllableValue_1 = __importDefault(require('ahooks/lib/useControllableValue'));
var tree_select_1 = __importDefault(require('antd/lib/tree-select'));
var classnames_1 = __importDefault(require('classnames'));
var omit_1 = __importDefault(require('lodash/omit'));
var LabelTreeSelect = function LabelTreeSelect(props) {
  var className = props.className,
    label = props.label,
    unit = props.unit,
    _a = props.showSearch,
    showSearch = _a === void 0 ? false : _a,
    onDropdownVisibleChange = props.onDropdownVisibleChange;
  var selectRef = react_1['default'].useRef(null);
  var _b = __read(
      (0, useControllableValue_1['default'])(props, {
        valuePropName: 'open',
        trigger: 'setOpen',
      }),
      2,
    ),
    open = _b[0],
    setOpen = _b[1];
  var _c = __read((0, useControllableValue_1['default'])(props), 2),
    value = _c[0],
    setValue = _c[1];
  var handleChange = function handleChange(nextValue) {
    setValue(nextValue);
  };
  var handleLabelClick = function handleLabelClick() {
    var _a;
    if (!open) {
      setOpen(!open);
    }
    (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
  };
  var handleDropdownVisibleChange = function handleDropdownVisibleChange(nextOpen) {
    setOpen(nextOpen);
    onDropdownVisibleChange === null || onDropdownVisibleChange === void 0
      ? void 0
      : onDropdownVisibleChange(nextOpen);
  };
  var isValueNotEmpty = !!(value === null || value === void 0 ? void 0 : value.length);
  return react_1['default'].createElement(
    'div',
    {
      className: (0, classnames_1['default'])(
        {
          'label-tree-select': true,
          'label-tree-select-label-scale': open || isValueNotEmpty,
        },
        className,
      ),
    },
    react_1['default'].createElement(
      tree_select_1['default'],
      __assign(
        {
          showSearch: showSearch,
        },
        (0, omit_1['default'])(props, ['open', 'onChange', 'className', 'label']),
        {
          open: open,
          ref: selectRef,
          size: 'large',
          className: 'label-select-selector',
          onChange: handleChange,
          onDropdownVisibleChange: handleDropdownVisibleChange,
        },
      ),
    ),
    isValueNotEmpty &&
      react_1['default'].createElement(
        'div',
        {
          className: 'label-tree-select-value-length',
        },
        react_1['default'].createElement('span', null, value.length),
        unit && react_1['default'].createElement('span', null, unit),
      ),
    react_1['default'].createElement(
      'label',
      {
        className: 'label-tree-select-text',
        onClick: handleLabelClick,
      },
      label,
    ),
  );
};
exports['default'] = LabelTreeSelect;
