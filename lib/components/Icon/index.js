"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  console.log('props', props);
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"]);
  (0, _utils.useInsertStyles)();
  var classString = (0, _classnames["default"])('spotecicon', className);
  var svgClassString = (0, _classnames["default"])({
    'spotecicon-spin': !!spin
  });
  var svgStyle = rotate ? {
    msTransform: "rotate(" + rotate + "deg)",
    transform: "rotate(" + rotate + "deg)"
  } : undefined;
  var innerSvgProps = Object.assign({}, _utils.svgBaseProps, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/React.createElement(Component, innerSvgProps, children);
    }

    if (children) {
      return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }

    return null;
  };

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({
    role: "img"
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
var _default = Icon;
exports["default"] = _default;