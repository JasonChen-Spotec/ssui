import isNil from 'lodash/isNil';
import classNames from 'classnames';
import Select from 'antd/lib/select';
import type { SelectProps } from 'antd/lib/select';
import React, { useEffect, useState } from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import ConditionInput from '../condition-input';
import type { ConditionInputProps } from '../condition-input';

export enum InputTypeEnum {
  CONDITION_INPUT = 'conditionInput',
  SELECT = 'select',
}

type SelectOptionsType = {
  value: number;
  label: string;
};

export interface MainSelectOptionsType extends SelectOptionsType {
  children?: SelectOptionsType[];
}

export interface ValueType {
  selectValue?: number | string | null;
  inputValue?: SelectProps['value'] | ConditionInputProps['value'];
}

export interface ConditionSelectInputProps {
  value?: ValueType;
  /** 不需要展示联动输入框的字段值 */
  hiddenInputKeys?: ValueType['selectValue'][];
  /** selectProps */
  selectProps?: SelectProps;
  /** 联动inputProps */
  conditionInputProps?: ConditionInputProps;
  /** 联动selectProps */
  conditionSelectProps?: SelectProps;
  onChange?: (value: ValueType) => void;
  /** 输入框类型 */
  inputType?: InputTypeEnum;
  /** select options */
  optionsList: MainSelectOptionsType[];
}

const ConditionSelectInput = (props: ConditionSelectInputProps) => {
  const {
    value,
    hiddenInputKeys = [],
    selectProps,
    conditionInputProps,
    conditionSelectProps,
    inputType = InputTypeEnum.CONDITION_INPUT,
    optionsList = [],
  } = props;
  const isInput = inputType === InputTypeEnum.CONDITION_INPUT;
  const [selectInputValue, setSelectInputValue] = useControllableValue<ValueType>(props);
  const [subSelectOptions, setSubSelectOptions] = useState<SelectOptionsType[]>([]);

  useEffect(() => {
    if (value && value.selectValue && optionsList.length) {
      const [selectValueItem] = optionsList.filter(
        (item) => item.value === value.selectValue,
      );
      if (selectValueItem && selectValueItem.children) {
        setSubSelectOptions(selectValueItem.children);
      }
    }
  }, [value, optionsList]);

  const onSelectChange = (selectValue: ValueType['selectValue']) => {
    const inputValue = isInput ? '' : undefined;
    setSelectInputValue({ selectValue, inputValue });
    if (isInput || isNil(selectValue)) {
      setSubSelectOptions([]);
      return;
    }
    const [selectValueItem] = optionsList.filter((item) => item.value === selectValue);
    if (selectValueItem.children) {
      setSubSelectOptions(selectValueItem.children);
    }
  };

  const onInputChange = (inputValue: string) => {
    setSelectInputValue({ selectValue: selectInputValue?.selectValue, inputValue });
  };

  const onTypeSelectChange = (inputValue: ValueType['selectValue']) => {
    setSelectInputValue({ selectValue: selectInputValue?.selectValue, inputValue });
  };

  // 是否展示输入框
  const isShowInput =
    !isNil(selectInputValue?.selectValue) &&
    !hiddenInputKeys?.includes(selectInputValue.selectValue);

  const typeInput = isInput ? (
    <div className="condition-select-input">
      <ConditionInput
        {...conditionInputProps}
        onChange={onInputChange}
        value={selectInputValue?.inputValue}
      />
    </div>
  ) : (
    <div className="condition-select-select-input">
      <Select
        {...conditionSelectProps}
        onChange={onTypeSelectChange}
        value={selectInputValue?.inputValue}
        options={subSelectOptions}
      />
    </div>
  );

  return (
    <div className="condition-select-wrap">
      <div
        className={classNames('condition-select-selecter', {
          'condition-two-select-selecter': !isInput,
          'condition-only-selecter': !isShowInput,
        })}
      >
        <Select
          {...selectProps}
          onChange={onSelectChange}
          value={selectInputValue?.selectValue}
          options={optionsList}
        />
      </div>

      {isShowInput && typeInput}
    </div>
  );
};

export default ConditionSelectInput;
