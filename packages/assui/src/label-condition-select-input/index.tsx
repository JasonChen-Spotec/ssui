import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import type { BaseSelectRef } from 'rc-select/lib/BaseSelect';
import useControllableValue from 'ahooks/lib/useControllableValue';
import LabelConditionInput from '../label-condition-input';
import LabelSelect from '../label-select';
import type { LabelConditionInputProps } from '../label-condition-input';
import type { LabelSelectProps } from '../label-select';

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
  inputValue?: LabelSelectProps['value'] | LabelConditionInputProps['value'];
  finalSelectValue?: LabelSelectProps['value'] | LabelConditionInputProps['value'][];
  changedEntryType?: ChangedEntryType;
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

/** 找所有的子代选项 */
const findAllSubSelectItems = (
  dataSource: MainSelectOptionsType[],
  key: ValueType['selectValue'],
) =>
  dataSource
    .find((item) => item.value === key)
    ?.children?.map((subItem) => subItem.value);

const LabelConditionSelectInput = (props: LabelConditionSelectInputProps) => {
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
  const subSelectRef = useRef<BaseSelectRef>();
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

  const onInputChange = (inputValue: string) => {
    const finalValue = {
      selectValue: selectInputValue?.selectValue,
      inputValue,
      changedEntryType: EntryTypeEnum.SECOND_ENTRY,
    };
    setSelectInputValue(finalValue);
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

  /** 联级选择框失去焦点 */
  const onLabelConditionSelectInputBlur = (blurEntryType: ChangedEntryType) => {
    onBlur?.({ ...selectInputValue, changedEntryType: blurEntryType });
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
  const isShowInput =
    !isNil(selectInputValue?.selectValue) &&
    !hiddenInputKeys?.includes(selectInputValue.selectValue);

  const typeInput = isInput ? (
    <LabelConditionInput
      {...conditionInputProps}
      onChange={onInputChange}
      className="label-condition-select-second-input"
      value={selectInputValue?.inputValue}
      onBlur={() => onLabelConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY)}
    />
  ) : (
    <div className="label-condition-select-second-select">
      <LabelSelect
        {...conditionSelectProps}
        ref={subSelectRef}
        onChange={onTypeSelectChange}
        value={selectInputValue?.inputValue}
        options={subSelectOptions}
        onDeselect={() => {
          subSelectRef.current?.focus();
        }}
        onBlur={() => onLabelConditionSelectInputBlur(EntryTypeEnum.SECOND_ENTRY)}
        // onClear={onTypeSelectClear}
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
          onBlur={() => onLabelConditionSelectInputBlur(EntryTypeEnum.FIRST_ENTRY)}
        />
      </div>
      {isShowInput && typeInput}
    </div>
  );
};

export default LabelConditionSelectInput;
