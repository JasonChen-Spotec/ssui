var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { svgBaseProps, useInsertStyles } from './utils';
var Icon = function Icon(props) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  useInsertStyles();
  var classString = classNames('spotecicon', className);
  var svgClassString = classNames({
    'spotecicon-spin': !!spin
  });
  var svgStyle = rotate ? {
    msTransform: "rotate(" + rotate + "deg)",
    transform: "rotate(" + rotate + "deg)"
  } : undefined;
  var innerSvgProps = _extends({}, svgBaseProps, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return _jsx(Component, _extends({}, innerSvgProps, {
        children: children
      }));
    }
    if (children) {
      return _jsx("svg", _extends({}, innerSvgProps, {
        viewBox: viewBox,
        children: children
      }));
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return _jsx("span", _extends({
    role: "img"
  }, restProps, {
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString,
    children: renderInnerNode()
  }));
};
Icon.displayName = 'SpotecIcon';
export default Icon;