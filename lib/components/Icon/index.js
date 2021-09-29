"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
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