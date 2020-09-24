"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var IconPropTypes = {
  symbolPrefix: _propTypes.string,
  name: _propTypes.string.isRequired,
  size: (0, _propTypes.oneOf)(['sm', 'md', 'lg']),
  type: (0, _propTypes.oneOf)(['normal', 'link', 'error', 'warning', 'info', 'success']),
  focusable: _propTypes.bool
};
var IconDefaultProps = {
  symbolPrefix: 'spotec-icon',
  size: 'md',
  type: 'normal',
  focusable: false
};

var Icon = function Icon(props) {
  var className = props.className,
      name = props.name,
      size = props.size,
      type = props.type,
      symbolPrefix = props.symbolPrefix,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["className", "name", "size", "type", "symbolPrefix"]);
  var cls = (0, _classnames["default"])('icon-svg', "icon-svg-" + name, "icon-svg-size-" + size, "icon-svg-type-" + type, className);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    className: cls
  }, rest), /*#__PURE__*/_react["default"].createElement("use", {
    xlinkHref: "#" + [symbolPrefix, name].join('-')
  }));
};

Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;
var _default = Icon;
exports["default"] = _default;