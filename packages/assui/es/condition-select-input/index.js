function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import ComplexValSelect from '../complex-val-select';
import ConditionInput from '../condition-input';
export var InputTypeEnum;
(function (InputTypeEnum) {
  InputTypeEnum["CONDITION_INPUT"] = "conditionInput";
  InputTypeEnum["SELECT"] = "select";
})(InputTypeEnum || (InputTypeEnum = {}));
export var EntryTypeEnum;
(function (EntryTypeEnum) {
  EntryTypeEnum["FIRST_ENTRY"] = "firstEntry";
  EntryTypeEnum["SECOND_ENTRY"] = "secondEntry";
})(EntryTypeEnum || (EntryTypeEnum = {}));
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
  var _useControllableValue = useControllableValue(props),
    selectInputValue = _useControllableValue[0],
    setSelectInputValue = _useControllableValue[1];
  var _useState = useState([]),
    subSelectOptions = _useState[0],
    setSubSelectOptions = _useState[1];
  /** 子选择器是否多选 */
  var isSubSelectMultiple = (conditionSelectProps == null ? void 0 : conditionSelectProps.mode) === 'multiple';
  useEffect(function () {
    if (value && !isNil(value.selectValue) && optionsList.length) {
      var _optionsList$filter = optionsList.filter(function (item) {
          return item.value === value.selectValue;
        }),
        selectValueItem = _optionsList$filter[0];
      if (selectValueItem != null && selectValueItem.children) {
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
        finalSelectValue: !isNil(selectValue) ? findAllSubSelectItems(optionsList, selectValue) : undefined
      });
    }
    setSelectInputValue(finalSelectInputValue);
    if (isInput || isNil(selectValue)) {
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
        finalSelectValue: isEmpty(inputValue) ? findAllSubSelectItems(optionsList, selectInputValue == null ? void 0 : selectInputValue.selectValue) : inputValue
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
  var isShowInput = !isNil(selectInputValue == null ? void 0 : selectInputValue.selectValue) && !(hiddenInputKeys != null && hiddenInputKeys.includes(selectInputValue.selectValue));
  var typeInput = isInput ? _jsx("div", {
    className: "condition-select-input",
    children: _jsx(ConditionInput, _extends({}, conditionInputProps, {
      onChange: onInputChange,
      value: selectInputValue == null ? void 0 : selectInputValue.inputValue,
      onBlur: function onBlur() {
        return onConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY);
      }
    }))
  }) : _jsx("div", {
    className: "condition-select-select-input",
    children: _jsx(ComplexValSelect, _extends({}, conditionSelectProps, {
      onChange: onTypeSelectChange,
      value: selectInputValue == null ? void 0 : selectInputValue.inputValue,
      options: subSelectOptions,
      onBlur: function onBlur() {
        return onConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY);
      },
      onClear: onTypeSelectClear
    }))
  });
  return _jsxs("div", {
    className: "condition-select-wrap",
    children: [_jsx("div", {
      className: classNames('condition-select-selecter', {
        'condition-two-select-selecter': !isInput,
        'condition-only-selecter': !isShowInput
      }),
      children: _jsx(ComplexValSelect, _extends({}, selectProps, {
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
export default ConditionSelectInput;