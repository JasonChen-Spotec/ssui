"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/input/style");

var _regexOptionConverter = _interopRequireDefault(require("./regexOptionConverter"));

var regexPatterns = _interopRequireWildcard(require("./regexPattern"));

var _excluded = ["regexes", "value", "defaultValue", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RegexInput = function RegexInput(props) {
  var regexes = props.regexes,
      value = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
  var isControlled = value !== undefined;

  var _useState = (0, _react.useState)(isControlled ? value : defaultValue),
      stateValue = _useState[0],
      setStateValue = _useState[1];

  var resultValue = isControlled ? value : stateValue;

  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = regexes.reduce(function (cur, acc) {
      var regexOption = (0, _regexOptionConverter["default"])(acc);

      if (regexOption.isValid) {
        return cur.replace(regexOption.pattern, regexOption.replacement);
      }

      return cur;
    }, originalValue);

    if (resultValue !== nextValue) {
      setStateValue(nextValue);
      onChange && onChange(nextValue);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_input["default"], (0, _extends2["default"])({
    value: resultValue,
    onChange: handleChange
  }, rest));
};

RegexInput.displayName = 'RegexInput';
RegexInput.propTypes = {
  regexes: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]))
};
RegexInput.patterns = regexPatterns;
var _default = RegexInput;
exports["default"] = _default;