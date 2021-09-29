"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/input/style");

var _numberType = require("./const/numberType");

var _utils = require("./utils");

var _excluded = ["value", "onChange", "numberType", "precision", "formatter", "enableMinus", "onBlur"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NumberInput = function NumberInput(props) {
  var value = props.value,
      onChange = props.onChange,
      numberType = props.numberType,
      precision = props.precision,
      formatter = props.formatter,
      enableMinus = props.enableMinus,
      onBlur = props.onBlur,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);

  var _useState = (0, _react.useState)(''),
      number = _useState[0],
      setNumber = _useState[1];

  var resultValue = (value === 0 ? "" + value : value) || number;

  var onNumberChange = function onNumberChange(e) {
    var newNumber;
    var newValue = e.target.value;

    if (numberType === _numberType.INT) {
      newNumber = (0, _utils.filterInt)({
        value: newValue,
        preValue: resultValue,
        enableMinus: enableMinus
      });
    } else {
      newNumber = (0, _utils.filterFloat)({
        value: newValue,
        preValue: resultValue,
        precision: precision,
        enableMinus: enableMinus
      });
    }

    if (formatter) {
      newNumber = formatter(newNumber);
    }

    if (resultValue !== newNumber) {
      if (onChange) {
        onChange(newNumber);
      } else {
        setNumber(newNumber);
      }
    }
  };

  var onNumberBlur = function onNumberBlur() {
    if (resultValue === '-' || resultValue === '.') {
      if (onChange) {
        onChange('');
      } else {
        setNumber('');
      }
    }

    onBlur && onBlur(resultValue);
  };

  return /*#__PURE__*/_react["default"].createElement(_input["default"], (0, _extends2["default"])({
    type: "text",
    value: formatter ? formatter(resultValue) : resultValue,
    onBlur: onNumberBlur,
    onChange: onNumberChange
  }, restProps));
};

NumberInput.defaultProps = {
  numberType: _numberType.INT,
  enableMinus: false,
  precision: 2
};
var _default = NumberInput;
exports["default"] = _default;