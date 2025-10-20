var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import LabelConditionInput from '../label-condition-input';
import LabelSelect from '../label-select';
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
  var _a, _b;
  return (_b = (_a = dataSource.find(function (item) {
    return item.value === key;
  })) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.map(function (subItem) {
    return subItem.value;
  });
};
var LabelConditionSelectInput = function LabelConditionSelectInput(props) {
  var value = props.value,
    _a = props.hiddenInputKeys,
    hiddenInputKeys = _a === void 0 ? [] : _a,
    selectProps = props.selectProps,
    conditionInputProps = props.conditionInputProps,
    conditionSelectProps = props.conditionSelectProps,
    _b = props.inputType,
    inputType = _b === void 0 ? InputTypeEnum.CONDITION_INPUT : _b,
    _c = props.optionsList,
    optionsList = _c === void 0 ? [] : _c,
    label = props.label,
    className = props.className,
    onBlur = props.onBlur;
  var isInput = inputType === InputTypeEnum.CONDITION_INPUT;
  var _d = __read(useControllableValue(props), 2),
    selectInputValue = _d[0],
    setSelectInputValue = _d[1];
  var _e = __read(useState([]), 2),
    subSelectOptions = _e[0],
    setSubSelectOptions = _e[1];
  var subSelectRef = useRef();
  /** 子选择器是否多选 */
  var isSubSelectMultiple = (conditionSelectProps === null || conditionSelectProps === void 0 ? void 0 : conditionSelectProps.mode) === 'multiple';
  useEffect(function () {
    if (value && !isNil(value.selectValue) && optionsList.length) {
      var _a = __read(optionsList.filter(function (item) {
          return item.value === value.selectValue;
        }), 1),
        selectValueItem = _a[0];
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
      finalSelectInputValue = __assign(__assign({}, finalSelectInputValue), {
        finalSelectValue: !isNil(selectValue) ? findAllSubSelectItems(optionsList, selectValue) : undefined
      });
    }
    setSelectInputValue(finalSelectInputValue);
    if (isInput || isNil(selectValue)) {
      setSubSelectOptions([]);
      return;
    }
    var _a = __read(optionsList.filter(function (item) {
        return item.value === selectValue;
      }), 1),
      selectValueItem = _a[0];
    if (selectValueItem.children) {
      setSubSelectOptions(selectValueItem.children);
    }
  };
  var onInputChange = function onInputChange(inputValue) {
    var finalValue = {
      selectValue: selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.selectValue,
      inputValue: inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY
    };
    setSelectInputValue(finalValue);
  };
  var onTypeSelectChange = function onTypeSelectChange(inputValue) {
    var finalSelectInputValue = {
      selectValue: selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.selectValue,
      inputValue: inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY
    };
    if (isSubSelectMultiple) {
      finalSelectInputValue = __assign(__assign({}, finalSelectInputValue), {
        finalSelectValue: isEmpty(inputValue) ? findAllSubSelectItems(optionsList, selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.selectValue) : inputValue
      });
    }
    setSelectInputValue(finalSelectInputValue);
  };
  /** 联级选择框失去焦点 */
  var onLabelConditionSelectInputBlur = function onLabelConditionSelectInputBlur(blurEntryType) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(__assign(__assign({}, selectInputValue), {
      changedEntryType: blurEntryType
    }));
  };
  // /** 二级下拉框清空 */
  // const onTypeSelectClear = () => {
  //   let finalSelectInputValue: ValueType = {
  //     selectValue: selectInputValue.selectValue,
  //     inputValue: [],
  //     changedEntryType: EntryTypeEnum.SECOND_ENTRY,
  //   };
  //   if (isSubSelectMultiple) {
  //     finalSelectInputValue = {
  //       ...finalSelectInputValue,
  //       finalSelectValue: findAllSubSelectItems(
  //         optionsList,
  //         selectInputValue.selectValue,
  //       ),
  //     };
  //   }
  //   onBlur?.(finalSelectInputValue);
  // };
  // 是否展示输入框
  var isShowInput = !isNil(selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.selectValue) && !(hiddenInputKeys === null || hiddenInputKeys === void 0 ? void 0 : hiddenInputKeys.includes(selectInputValue.selectValue));
  var typeInput = isInput ? /*#__PURE__*/React.createElement(LabelConditionInput, __assign({}, conditionInputProps, {
    onChange: onInputChange,
    className: "label-condition-select-second-input",
    value: selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.inputValue,
    onBlur: function onBlur() {
      return onLabelConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY);
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "label-condition-select-second-select"
  }, /*#__PURE__*/React.createElement(LabelSelect, __assign({}, conditionSelectProps, {
    ref: subSelectRef,
    onChange: onTypeSelectChange,
    value: selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.inputValue,
    options: subSelectOptions,
    onDeselect: function onDeselect() {
      var _a;
      (_a = subSelectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    },
    onBlur: function onBlur() {
      return onLabelConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY);
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('label-condition-select', className)
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('label-condition-select-selector', {
      'label-condition-select-two-select-selector': !isInput,
      'label-condition-select-only-selector': !isShowInput
    })
  }, /*#__PURE__*/React.createElement(LabelSelect, __assign({
    label: label
  }, selectProps, {
    onChange: onSelectChange,
    value: selectInputValue === null || selectInputValue === void 0 ? void 0 : selectInputValue.selectValue,
    options: optionsList,
    onBlur: function onBlur() {
      return onLabelConditionSelectInputBlur(EntryTypeEnum.FIRST_ENTRY);
    }
  }))), isShowInput && typeInput);
};
export default LabelConditionSelectInput;