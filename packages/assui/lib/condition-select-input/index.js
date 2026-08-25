"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntryTypeEnum = exports.InputTypeEnum = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var isNil_1 = tslib_1.__importDefault(require("lodash/isNil"));
var isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = require("react");
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var complex_val_select_1 = tslib_1.__importDefault(require("../complex-val-select"));
var condition_input_1 = tslib_1.__importDefault(require("../condition-input"));
var InputTypeEnum;
(function (InputTypeEnum) {
  InputTypeEnum["CONDITION_INPUT"] = "conditionInput";
  InputTypeEnum["SELECT"] = "select";
})(InputTypeEnum || (exports.InputTypeEnum = InputTypeEnum = {}));
var EntryTypeEnum;
(function (EntryTypeEnum) {
  EntryTypeEnum["FIRST_ENTRY"] = "firstEntry";
  EntryTypeEnum["SECOND_ENTRY"] = "secondEntry";
})(EntryTypeEnum || (exports.EntryTypeEnum = EntryTypeEnum = {}));
/** 找所有的子代选项 */
var findAllSubSelectItems = function findAllSubSelectItems(dataSource, key) {
  var _dataSource$find;
  return (_dataSource$find = dataSource.find(function (item) {
    return item.value === key;
  })) == null || (_dataSource$find = _dataSource$find.children) == null ? void 0 : _dataSource$find.map(function (subItem) {
    return subItem.value;
  });
};
var ConditionSelectInput = function ConditionSelectInput(props) {
  var value = props.value,
    _props$hiddenInputKey = props.hiddenInputKeys,
    hiddenInputKeys = _props$hiddenInputKey === void 0 ? [] : _props$hiddenInputKey,
    selectProps = props.selectProps,
    conditionInputProps = props.conditionInputProps,
    conditionSelectProps = props.conditionSelectProps,
    _props$inputType = props.inputType,
    inputType = _props$inputType === void 0 ? InputTypeEnum.CONDITION_INPUT : _props$inputType,
    _props$optionsList = props.optionsList,
    optionsList = _props$optionsList === void 0 ? [] : _props$optionsList,
    onBlur = props.onBlur;
  var isInput = inputType === InputTypeEnum.CONDITION_INPUT;
  var _ref = (0, useControllableValue_1["default"])(props),
    selectInputValue = _ref[0],
    setSelectInputValue = _ref[1];
  var _ref2 = (0, react_1.useState)([]),
    subSelectOptions = _ref2[0],
    setSubSelectOptions = _ref2[1];
  /** 子选择器是否多选 */
  var isSubSelectMultiple = (conditionSelectProps == null ? void 0 : conditionSelectProps.mode) === 'multiple';
  (0, react_1.useEffect)(function () {
    if (value && !(0, isNil_1["default"])(value.selectValue) && optionsList.length) {
      var _optionsList$filter = optionsList.filter(function (item) {
          return item.value === value.selectValue;
        }),
        selectValueItem = _optionsList$filter[0];
      if (selectValueItem && selectValueItem.children) {
        setSubSelectOptions(selectValueItem.children);
      }
    }
  }, [value, optionsList]);
  var onSelectChange = function onSelectChange(selectValue) {
    var inputValue = isInput ? '' : undefined;
    var finalSelectInputValue = {
      selectValue: selectValue,
      inputValue: inputValue,
      changedEntryType: EntryTypeEnum.FIRST_ENTRY
    };
    if (isSubSelectMultiple) {
      finalSelectInputValue = _extends({}, finalSelectInputValue, {
        finalSelectValue: !(0, isNil_1["default"])(selectValue) ? findAllSubSelectItems(optionsList, selectValue) : undefined
      });
    }
    setSelectInputValue(finalSelectInputValue);
    if (isInput || (0, isNil_1["default"])(selectValue)) {
      setSubSelectOptions([]);
      return;
    }
    var _optionsList$filter2 = optionsList.filter(function (item) {
        return item.value === selectValue;
      }),
      selectValueItem = _optionsList$filter2[0];
    if (selectValueItem.children) {
      setSubSelectOptions(selectValueItem.children);
    }
  };
  var onTypeSelectChange = function onTypeSelectChange(inputValue) {
    var finalSelectInputValue = {
      selectValue: selectInputValue == null ? void 0 : selectInputValue.selectValue,
      inputValue: inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY
    };
    if (isSubSelectMultiple) {
      finalSelectInputValue = _extends({}, finalSelectInputValue, {
        finalSelectValue: (0, isEmpty_1["default"])(inputValue) ? findAllSubSelectItems(optionsList, selectInputValue == null ? void 0 : selectInputValue.selectValue) : inputValue
      });
    }
    setSelectInputValue(finalSelectInputValue);
  };
  var onInputChange = function onInputChange(inputValue) {
    var finalValue = {
      selectValue: selectInputValue == null ? void 0 : selectInputValue.selectValue,
      inputValue: inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY
    };
    setSelectInputValue(finalValue);
  };
  /** 联级选择框失去焦点 */
  var onConditionSelectInputBlur = function onConditionSelectInputBlur(blurEntryType) {
    onBlur == null || onBlur(_extends({}, selectInputValue, {
      changedEntryType: blurEntryType
    }));
  };
  /** 二级下拉框清空 */
  var onTypeSelectClear = function onTypeSelectClear() {
    var finalSelectInputValue = {
      selectValue: selectInputValue.selectValue,
      inputValue: [],
      changedEntryType: EntryTypeEnum.SECOND_ENTRY
    };
    if (isSubSelectMultiple) {
      finalSelectInputValue = _extends({}, finalSelectInputValue, {
        finalSelectValue: findAllSubSelectItems(optionsList, selectInputValue.selectValue)
      });
    }
    onBlur == null || onBlur(finalSelectInputValue);
  };
  // 是否展示输入框
  var isShowInput = !(0, isNil_1["default"])(selectInputValue == null ? void 0 : selectInputValue.selectValue) && !(hiddenInputKeys != null && hiddenInputKeys.includes(selectInputValue.selectValue));
  var typeInput = isInput ? (0, jsx_runtime_1.jsx)("div", {
    className: "condition-select-input",
    children: (0, jsx_runtime_1.jsx)(condition_input_1["default"], _extends({}, conditionInputProps, {
      onChange: onInputChange,
      value: selectInputValue == null ? void 0 : selectInputValue.inputValue,
      onBlur: function onBlur() {
        return onConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY);
      }
    }))
  }) : (0, jsx_runtime_1.jsx)("div", {
    className: "condition-select-select-input",
    children: (0, jsx_runtime_1.jsx)(complex_val_select_1["default"], _extends({}, conditionSelectProps, {
      onChange: onTypeSelectChange,
      value: selectInputValue == null ? void 0 : selectInputValue.inputValue,
      options: subSelectOptions,
      onBlur: function onBlur() {
        return onConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY);
      },
      onClear: onTypeSelectClear
    }))
  });
  return (0, jsx_runtime_1.jsxs)("div", {
    className: "condition-select-wrap",
    children: [(0, jsx_runtime_1.jsx)("div", {
      className: (0, classnames_1["default"])('condition-select-selecter', {
        'condition-two-select-selecter': !isInput,
        'condition-only-selecter': !isShowInput
      }),
      children: (0, jsx_runtime_1.jsx)(complex_val_select_1["default"], _extends({}, selectProps, {
        onChange: onSelectChange,
        value: selectInputValue == null ? void 0 : selectInputValue.selectValue,
        options: optionsList,
        onBlur: function onBlur() {
          return onConditionSelectInputBlur(EntryTypeEnum.FIRST_ENTRY);
        }
      }))
    }), isShowInput && typeInput]
  });
};
exports["default"] = ConditionSelectInput;