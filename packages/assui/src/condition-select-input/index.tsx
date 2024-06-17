import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
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

export enum EntryTypeEnum {
  FIRST_ENTRY = 'firstEntry',
  SECOND_ENTRY = 'secondEntry',
}

export type ChangedEntryType = typeof EntryTypeEnum[keyof typeof EntryTypeEnum];

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
  finalSelectValue?: SelectProps['value'] | ConditionInputProps['value'][];
  changedEntryType?: ChangedEntryType;
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
  /** onChange */
  onChange?: (value: ValueType) => void;
  /** onBlur */
  onBlur?: (value: ValueType) => void;
  /** 输入框类型 */
  inputType?: InputTypeEnum;
  /** select options */
  optionsList: MainSelectOptionsType[];
}

/** 找所有的子代选项 */
const findAllSubSelectItems = (
  dataSource: MainSelectOptionsType[],
  key: ValueType['selectValue'],
) =>
  dataSource
    .find((item) => item.value === key)
    ?.children?.map((subItem) => subItem.value);

const ConditionSelectInput = (props: ConditionSelectInputProps) => {
  const {
    value,
    hiddenInputKeys = [],
    selectProps,
    conditionInputProps,
    conditionSelectProps,
    inputType = InputTypeEnum.CONDITION_INPUT,
    optionsList = [],
    onBlur,
  } = props;
  const isInput = inputType === InputTypeEnum.CONDITION_INPUT;
  const [selectInputValue, setSelectInputValue] = useControllableValue<ValueType>(props);
  const [subSelectOptions, setSubSelectOptions] = useState<SelectOptionsType[]>([]);
  /** 子选择器是否多选 */
  const isSubSelectMultiple = conditionSelectProps?.mode === 'multiple';

  useEffect(() => {
    if (value && !isNil(value.selectValue) && optionsList.length) {
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
    let finalSelectInputValue: ValueType = {
      selectValue,
      inputValue,
      changedEntryType: EntryTypeEnum.FIRST_ENTRY,
    };
    if (isSubSelectMultiple) {
      finalSelectInputValue = {
        ...finalSelectInputValue,
        finalSelectValue: !isNil(selectValue)
          ? findAllSubSelectItems(optionsList, selectValue)
          : undefined,
      };
    }
    setSelectInputValue(finalSelectInputValue);

    if (isInput || isNil(selectValue)) {
      setSubSelectOptions([]);
      return;
    }
    const [selectValueItem] = optionsList.filter((item) => item.value === selectValue);
    if (selectValueItem.children) {
      setSubSelectOptions(selectValueItem.children);
    }
  };

  const onTypeSelectChange = (inputValue: ValueType['selectValue']) => {
    let finalSelectInputValue: ValueType = {
      selectValue: selectInputValue?.selectValue,
      inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY,
    };

    if (isSubSelectMultiple) {
      finalSelectInputValue = {
        ...finalSelectInputValue,
        finalSelectValue: isEmpty(inputValue)
          ? findAllSubSelectItems(optionsList, selectInputValue?.selectValue)
          : inputValue,
      };
    }
    setSelectInputValue(finalSelectInputValue);
  };

  const onInputChange = (inputValue: string) => {
    const finalValue = {
      selectValue: selectInputValue?.selectValue,
      inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY,
    };
    setSelectInputValue(finalValue);
  };

  /** 联级选择框失去焦点 */
  const onConditionSelectInputBlur = (blurEntryType: ChangedEntryType) => {
    onBlur?.({ ...selectInputValue, changedEntryType: blurEntryType });
  };

  /** 二级下拉框清空 */
  const onTypeSelectClear = () => {
    let finalSelectInputValue: ValueType = {
      selectValue: selectInputValue.selectValue,
      inputValue: [],
      changedEntryType: EntryTypeEnum.SECOND_ENTRY,
    };
    if (isSubSelectMultiple) {
      finalSelectInputValue = {
        ...finalSelectInputValue,
        finalSelectValue: findAllSubSelectItems(
          optionsList,
          selectInputValue.selectValue,
        ),
      };
    }
    onBlur?.(finalSelectInputValue);
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
        onBlur={() => onConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY)}
      />
    </div>
  ) : (
    <div className="condition-select-select-input">
      <Select
        {...conditionSelectProps}
        onChange={onTypeSelectChange}
        value={selectInputValue?.inputValue}
        options={subSelectOptions}
        onBlur={() => onConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY)}
        onClear={onTypeSelectClear}
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
          onBlur={() => onConditionSelectInputBlur(EntryTypeEnum.FIRST_ENTRY)}
        />
      </div>

      {isShowInput && typeInput}
    </div>
  );
};

export default ConditionSelectInput;
