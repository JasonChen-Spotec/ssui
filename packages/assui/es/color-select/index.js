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
import ChevronRightOutlined from 'a-icons/es/ChevronRightOutlined';
import useControllableValue from 'ahooks/es/useControllableValue';
import classNames from 'classnames';
import RcTrigger from 'rc-trigger';
import React, { useContext } from 'react';
import { SketchPicker } from 'react-color';
import LocaleContext from '../config-provider/context';
import formatMessage, { langTypeEnum } from '../messages';
var ColorSelect = function ColorSelect(props) {
  var className = props.className,
    classNameWrap = props.classNameWrap,
    reactColorProps = props.reactColorProps,
    RcTriggerProps = props.RcTriggerProps,
    renderValueNode = props.renderValueNode,
    renderExtra = props.renderExtra;
  var _a = __read(useControllableValue(props), 2),
    value = _a[0],
    onChangeValue = _a[1];
  var messages = useContext(LocaleContext);
  var onChange = function onChange(nextValue) {
    onChangeValue({
      hex: nextValue.hex,
      rgb: ''
        .concat(nextValue.rgb.r, ',')
        .concat(nextValue.rgb.g, ',')
        .concat(nextValue.rgb.b),
    });
  };
  var defaultValueNode = /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames('color-select', className),
      tabIndex: 0,
    },
    value
      ? /*#__PURE__*/ React.createElement('div', {
          className: 'color-select-value',
          style: value
            ? {
                backgroundColor: value.hex,
              }
            : undefined,
        })
      : /*#__PURE__*/ React.createElement(
          'span',
          {
            className: 'color-select-placeholder',
          },
          formatMessage(messages, langTypeEnum.global, 'placeholder'),
        ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'color-select-arrow',
      },
      /*#__PURE__*/ React.createElement(ChevronRightOutlined, {
        rotate: 90,
      }),
    ),
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames('color-select-wrap', classNameWrap),
    },
    /*#__PURE__*/ React.createElement(
      RcTrigger,
      __assign(
        {
          popupAlign: {
            points: ['tl', 'bl'],
            offset: [0, 3],
          },
          action: ['click'],
        },
        RcTriggerProps,
        {
          popup: /*#__PURE__*/ React.createElement(
            SketchPicker,
            __assign(
              {
                width: '320px',
                color: value ? value.hex : undefined,
                onChange: onChange,
              },
              reactColorProps,
            ),
          ),
        },
      ),
      renderValueNode ? renderValueNode(value) : defaultValueNode,
    ),
    renderExtra && renderExtra(value),
  );
};
export default ColorSelect;
