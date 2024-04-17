import React, { useState, useEffect, useContext } from 'react';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import DatePicker from 'antd/lib/date-picker';
import type { RadioChangeEvent } from 'antd/lib/radio';
import type { RangeValue } from 'rc-picker/lib/interface';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { Moment } from 'moment';
import omit from 'lodash/omit';
import type { dateTypeEnum } from './defaultRadioList';
import getDefaultRadioList from './defaultRadioList';
import LabelRangePicker from '../label-range-picker';
import type { LabelRangePickerProps } from '../label-range-picker';
import LocaleContext from '../config-provider/context';
import formatMessage from '../messages';
import { formatMaxScope } from './utils';

export type RadioListType = {
  key: string | number | dateTypeEnum;
  text: string;
  value: [Moment, Moment];
};

/** 1整天的毫秒数 */
const ONE_DAY_MILLISECOND = 1000 * 60 * 60 * 24;

/** 1分钟的毫秒数 */
const ONE_MINUTE_MILLISECOND = 1000 * 60;

export interface LabelCustomizeRangePickerProps
  extends Omit<LabelRangePickerProps, 'label'> {
  radioList?: RadioListType[];
  customizeTimeList?: dateTypeEnum[];
  rangePickerType?: 'label' | 'origin';
  label?: React.ReactNode;
  /** 最大时间范围 */
  maxScope?: number;
  /** 如果有MaxScope，在没有默认值的情况下自动填充默认值 */
  fillDefaultDate?: boolean;
  showShortcutPanel?: boolean;
  /** 时间偏移量 秒 */
  timeOffset?: number;
  /** 自然日期, 作用于本周，本月等日期 */
  naturalDate?: boolean;
}

const { RangePicker } = DatePicker;

const LabelCustomizeRangePicker = (props: LabelCustomizeRangePickerProps) => {
  const {
    customizeTimeList,
    radioList,
    rangePickerType = 'label',
    label,
    showTime,
    allowClear = false,
    maxScope,
    onOpenChange,
    timeOffset,
    fillDefaultDate = true,
    showShortcutPanel = true,
    naturalDate = false,
    ...restProps
  } = props;
  const [date, setDate] = useControllableValue(props);
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [radioKey, setRadioKey] = useState<string | number | null>();
  const [open, setOpen] = useState(false);
  const messages = useContext(LocaleContext);
  const defaultRadioList = customizeTimeList
    ? getDefaultRadioList({ messages, timeOffset, naturalDate }).filter((item) =>
        customizeTimeList.includes(item.key as dateTypeEnum),
      )
    : getDefaultRadioList({ messages, timeOffset, naturalDate });

  const dataSource = radioList ?? defaultRadioList;

  useEffect(() => {
    const filterItemList = dataSource.filter((item) => {
      if (!date) return false;
      const [startTime, endTime] = item.value;
      const [defaultStartTime, defaultEndTime] = date || [];
      if (
        startTime.isSame(defaultStartTime, 'day') &&
        endTime.isSame(defaultEndTime, 'day')
      ) {
        return true;
      }
      return false;
    });

    if (filterItemList.length === 0) {
      setRadioKey(null);
    } else if (filterItemList.length > 1) {
      const findItem = filterItemList.find((item) => item.key === radioKey);
      const resutRadioKey = findItem ? findItem.key : filterItemList[0].key;
      setRadioKey(resutRadioKey);
    } else {
      const [item] = filterItemList;
      setRadioKey(item.key);
    }
  }, [date]);

  useEffect(() => {
    const [startTime, endTime] = date || [];
    if (maxScope && fillDefaultDate) {
      const [newStartDate, newEndDate] = formatMaxScope(date, maxScope);
      if (!newStartDate?.isSame(startTime) || !newEndDate?.isSame(endTime)) {
        setDate(formatMaxScope(date, maxScope));
      }
    }
  }, [maxScope]);

  const onDiyTimeChange = (event: CheckboxChangeEvent) => {
    const { checked } = event.target;
    setIsVisiblePanel(checked);
  };

  const onDateChange = (nextValue: RangeValue<Moment>) => {
    console.log('nextValue', nextValue);

    const [start, end] = nextValue || [];
    let nextStartDate =
      (showTime ? start?.clone().startOf('minute') : start?.clone().startOf('day')) ??
      null;
    let nextEndDate =
      (showTime ? end?.clone().endOf('minute') : end?.clone().endOf('day')) ?? null;
    if (!nextStartDate && !nextEndDate) {
      return setDate(undefined);
    }

    if (!maxScope) {
      return setDate([nextStartDate, nextEndDate]);
    }

    const timeDiffOfShowTime = maxScope * ONE_DAY_MILLISECOND - ONE_MINUTE_MILLISECOND;
    const [startDate] = date || [];
    // 1. start和end都存在时
    if (nextStartDate && nextEndDate) {
      const isChangeStartData = !startDate?.clone().isSame(nextStartDate);
      const momentDiffDay = nextEndDate.diff(nextStartDate) / ONE_DAY_MILLISECOND;

      // 更改start
      if (isChangeStartData) {
        // 时间差大于maxScope，则将end调整到期望范围
        if (momentDiffDay > maxScope) {
          nextEndDate = showTime
            ? nextStartDate
                .clone()
                .add(timeDiffOfShowTime, 'milliseconds')
                .endOf('minute')
            : nextStartDate
                .clone()
                .add(maxScope - 1, 'day')
                .endOf('day');
        }
        // 更改end
        // 时间差大于maxScope，则将结start调整到期望范围
      } else if (momentDiffDay > maxScope) {
        nextStartDate = showTime
          ? nextEndDate
              .clone()
              .subtract(timeDiffOfShowTime, 'milliseconds')
              .startOf('minute')
          : nextEndDate
              .clone()
              .subtract(maxScope - 1, 'day')
              .startOf('day');
      }
      // 2. 仅end存在时，自动填入start
    } else if (!nextStartDate && nextEndDate) {
      nextStartDate = showTime
        ? nextEndDate
            .clone()
            .subtract(timeDiffOfShowTime, 'milliseconds')
            .startOf('minute')
        : nextEndDate
            .clone()
            .subtract(maxScope - 1, 'day')
            .startOf('day');
      // 3. 仅start存在时，自动填入end
    } else if (nextStartDate && !nextEndDate) {
      nextEndDate = showTime
        ? nextStartDate.clone().add(timeDiffOfShowTime, 'milliseconds').endOf('minute')
        : nextStartDate
            .clone()
            .add(maxScope - 1, 'day')
            .endOf('day');
    }

    if (nextStartDate && nextEndDate) {
      return setDate([nextStartDate, nextEndDate]);
    }

    return setDate([nextStartDate, nextEndDate]);
  };

  const onRadioChange = (event: RadioChangeEvent) => {
    const { value } = event.target;
    setRadioKey(value);
    const selectRadioInfo = dataSource.find((item) => item.key === value);
    setDate(selectRadioInfo?.value);
    setOpen(false);
  };

  const resultList = maxScope
    ? dataSource.filter((item) => {
        const [startTime, entTime] = item.value;

        const space = entTime.diff(startTime) / ONE_DAY_MILLISECOND;

        return space <= maxScope;
      })
    : dataSource;

  const panelRender = (panel: React.ReactNode) => (
    <div className="label-customize-range-picker-panel">
      <div className="check-wrapper">
        <span className="customize-select">
          <Checkbox onChange={onDiyTimeChange} />
          <span className="customize-select-text">
            {formatMessage(messages, 'labelCustomizeRangePicker', 'customTime')}
          </span>
        </span>
      </div>
      {isVisiblePanel ? (
        <div className="panel">{panel}</div>
      ) : (
        <div className="pick-box">
          <Radio.Group onChange={onRadioChange} value={radioKey}>
            {resultList.map(({ key, text }) => (
              <Radio className="radio" key={key} value={key}>
                {text}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      )}
    </div>
  );

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  const baseOptions = {
    value: date,
    onChange: onDateChange,
    open,
    onOpenChange: handleOpenChange,
    panelRender: showShortcutPanel ? panelRender : undefined,
    allowClear,
  };

  return rangePickerType === 'label' ? (
    <LabelRangePicker
      showTime={showTime}
      label={label}
      {...omit(restProps, 'onChange', 'value', 'open')}
      {...baseOptions}
    />
  ) : (
    <RangePicker showTime={showTime} {...baseOptions} {...omit(restProps, 'onChange')} />
  );
};

export default LabelCustomizeRangePicker;
