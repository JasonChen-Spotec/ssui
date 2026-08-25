var _excluded = ["className", "style", "flex", "gap", "children", "vertical", "component"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import createFlexClassNames from './utils';
import { isPresetSize } from './utils/gapSize';
var Flex = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var className = props.className,
    style = props.style,
    flex = props.flex,
    gap = props.gap,
    children = props.children,
    _props$vertical = props.vertical,
    vertical = _props$vertical === void 0 ? false : _props$vertical,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    othersProps = _objectWithoutPropertiesLoose(props, _excluded);
  var prefixCls = 'as-flex';
  var flexClassNames = createFlexClassNames(prefixCls, props);
  var mergedCls = classNames(className, prefixCls, flexClassNames, (_classNames = {}, _classNames[prefixCls + "-gap-" + gap] = isPresetSize(gap), _classNames[prefixCls + "-vertical"] = vertical, _classNames));
  var mergedStyle = _extends({}, style);
  if (flex) {
    mergedStyle.flex = flex;
  }
  if (gap && !isPresetSize(gap)) {
    mergedStyle.gap = gap;
  }
  return _jsx(Component, _extends({
    ref: ref,
    className: mergedCls
  }, omit(othersProps, ['justify', 'wrap', 'align']), {
    style: mergedStyle,
    children: children
  }));
});
export default Flex;