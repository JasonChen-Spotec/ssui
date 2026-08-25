function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SketchPicker } from 'react-color';
import { useContext } from 'react';
import RcTrigger from 'rc-trigger';
import classNames from 'classnames';
import useControllableValue from "ahooks/es/useControllableValue";
import ChevronRightOutlined from "a-icons/es/ChevronRightOutlined";
import LocaleContext from '../config-provider/context';
import formatMessage, { langTypeEnum } from '../messages';
var ColorSelect = function ColorSelect(props) {
  var className = props.className,
    classNameWrap = props.classNameWrap,
    reactColorProps = props.reactColorProps,
    RcTriggerProps = props.RcTriggerProps,
    renderValueNode = props.renderValueNode,
    renderExtra = props.renderExtra;
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    onChangeValue = _useControllableValue[1];
  var messages = useContext(LocaleContext);
  var onChange = function onChange(nextValue) {
    onChangeValue({
      hex: nextValue.hex,
      rgb: nextValue.rgb.r + "," + nextValue.rgb.g + "," + nextValue.rgb.b
    });
  };
  var defaultValueNode = _jsxs("div", {
    className: classNames('color-select', className),
    tabIndex: 0,
    children: [value ? _jsx("div", {
      className: "color-select-value",
      style: value ? {
        backgroundColor: value.hex
      } : undefined
    }) : _jsx("span", {
      className: "color-select-placeholder",
      children: formatMessage(messages, langTypeEnum.global, 'placeholder')
    }), _jsx("div", {
      className: "color-select-arrow",
      children: _jsx(ChevronRightOutlined, {
        rotate: 90
      })
    })]
  });
  return _jsxs("div", {
    className: classNames('color-select-wrap', classNameWrap),
    children: [_jsx(RcTrigger, _extends({
      popupAlign: {
        points: ['tl', 'bl'],
        offset: [0, 3]
      },
      action: ['click']
    }, RcTriggerProps, {
      popup: _jsx(SketchPicker, _extends({
        width: "320px",
        color: value ? value.hex : undefined,
        onChange: onChange
      }, reactColorProps)),
      children: renderValueNode ? renderValueNode(value) : defaultValueNode
    })), renderExtra && renderExtra(value)]
  });
};
export default ColorSelect;