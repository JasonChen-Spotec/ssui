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
import useControllableValue from 'ahooks/es/useControllableValue';
import TreeSelect from 'antd/es/tree-select';
import classNames from 'classnames';
import omit from 'lodash/omit';
import React from 'react';
var LabelTreeSelect = function LabelTreeSelect(props) {
  var className = props.className,
    label = props.label,
    unit = props.unit,
    _a = props.showSearch,
    showSearch = _a === void 0 ? false : _a,
    onDropdownVisibleChange = props.onDropdownVisibleChange;
  var selectRef = React.useRef(null);
  var _b = __read(
      useControllableValue(props, {
        valuePropName: 'open',
        trigger: 'setOpen',
      }),
      2,
    ),
    open = _b[0],
    setOpen = _b[1];
  var _c = __read(useControllableValue(props), 2),
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
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(
        {
          'label-tree-select': true,
          'label-tree-select-label-scale': open || isValueNotEmpty,
        },
        className,
      ),
    },
    /*#__PURE__*/ React.createElement(
      TreeSelect,
      __assign(
        {
          showSearch: showSearch,
        },
        omit(props, ['open', 'onChange', 'className', 'label']),
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
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'label-tree-select-value-length',
        },
        /*#__PURE__*/ React.createElement('span', null, value.length),
        unit && /*#__PURE__*/ React.createElement('span', null, unit),
      ),
    /*#__PURE__*/ React.createElement(
      'label',
      {
        className: 'label-tree-select-text',
        onClick: handleLabelClick,
      },
      label,
    ),
  );
};
export default LabelTreeSelect;
