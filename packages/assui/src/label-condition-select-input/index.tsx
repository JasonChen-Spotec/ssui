import isNil from 'lodash/isNil';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import LabelConditionInput from '../label-condition-input';
import LabelSelect from '../label-select';
import type { LabelConditionInputProps } from '../label-condition-input';
import type { LabelSelectProps } from '../label-select';

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
  inputValue?: LabelSelectProps['value'] | LabelConditionInputProps['value'];
}

export interface LabelConditionSelectInputProps {
  value?: ValueType;
  /** 不需要展示联动输入框的字段值 */
  hiddenInputKeys?: ValueType['selectValue'][];
  /** selectProps */
  selectProps?: LabelSelectProps;
  /** 联动inputProps */
  conditionInputProps?: LabelConditionInputProps;
  /** 联动selectProps */
  conditionSelectProps?: LabelSelectProps;
  /** onChange */
  onChange?: (value: ValueType) => void;
  /** onBlur */
  onBlur?: (value: ValueType) => void;
  /** 输入框类型 */
  inputType?: InputTypeEnum;
  /** select options */
  optionsList: MainSelectOptionsType[];
  /** label */
  label?: React.ReactNode;
  /** 样式 */
  className?: string;
}

const LabelConditionSelect = (props: LabelConditionSelectInputProps) => {
  const {
    value,
    hiddenInputKeys = [],
    selectProps,
    conditionInputProps,
    conditionSelectProps,
    inputType = InputTypeEnum.CONDITION_INPUT,
    optionsList = [],
    label,
    className,
    onBlur,
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

  const onLabelConditionSelectInputBlur = () => {
    onBlur?.(selectInputValue);
  };

  // 是否展示输入框
  const isShowInput =
    !isNil(selectInputValue?.selectValue) &&
    !hiddenInputKeys?.includes(selectInputValue.selectValue);

  const typeInput = isInput ? (
    <LabelConditionInput
      {...conditionInputProps}
      onChange={onInputChange}
      className="label-condition-select-second-input"
      value={selectInputValue?.inputValue}
      onBlur={onLabelConditionSelectInputBlur}
    />
  ) : (
    <div className="label-condition-select-second-select">
      <LabelSelect
        {...conditionSelectProps}
        onChange={onTypeSelectChange}
        value={selectInputValue?.inputValue}
        options={subSelectOptions}
        onBlur={onLabelConditionSelectInputBlur}
      />
    </div>
  );

  return (
    <div className={classNames('label-condition-select', className)}>
      <div
        className={classNames('label-condition-select-selector', {
          'label-condition-select-two-select-selector': !isInput,
          'label-condition-select-only-selector': !isShowInput,
        })}
      >
        <LabelSelect
          label={label}
          {...selectProps}
          onChange={onSelectChange}
          value={selectInputValue?.selectValue}
          options={optionsList}
          onBlur={onLabelConditionSelectInputBlur}
        />
      </div>
      {isShowInput && typeInput}
    </div>
  );
};

export default LabelConditionSelect;
