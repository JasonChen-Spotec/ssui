"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var NumberInput = function NumberInput(props) {
  var value = props.value,
      onChange = props.onChange,
      numberType = props.numberType,
      precision = props.precision,
      formatter = props.formatter,
      enableMinus = props.enableMinus,
      onBlur = props.onBlur,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, ["value", "onChange", "numberType", "precision", "formatter", "enableMinus", "onBlur"]);

  var _useState = (0, _react.useState)(''),
      number = _useState[0],
      setNumber = _useState[1];

  var resultValue = value || number;

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

    if (onChange) {
      onChange(newNumber);
    } else {
      setNumber(newNumber);
    }
  };

  var onNumberBlur = function onNumberBlur() {
    if (resultValue === '-') {
      if (onChange) {
        onChange('');
      } else {
        setNumber('');
      }
    }

    onBlur && onBlur();
  };

  return /*#__PURE__*/_react["default"].createElement(_input["default"], (0, _extends2["default"])({
    type: "text",
    value: resultValue,
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