import React, { useState, useEffect, useContext } from 'react';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import DatePicker from 'antd/lib/date-picker';
import type { RadioChangeEvent } from 'antd/lib/radio';
import type { RangeValue } from 'rc-picker/lib/interface';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { Moment } from 'moment';
import moment from 'moment';
import omit from 'lodash/omit';
import type { dateTypeEnum } from './defaultRadioList';
import getDefaultRadioList from './defaultRadioList';
import LabelRangePicker from '../label-range-picker';
import type { LabelRangePickerProps } from '../label-range-picker';
import LocaleContext from '../config-provider/context';
import formatMessage from '../messages';

export type RadioListType = {
  key: string | number | dateTypeEnum;
  text: string;
  value: [Moment, Moment];
};

export interface LabelCustomizeRangePickerProps extends Omit<LabelRangePickerProps, 'label'> {
  radioList?: RadioListType[];
  customizeTimeList?: dateTypeEnum[];
  rangePickerType?: 'label' | 'origin';
  label?: React.ReactNode;
  /** 最大时间范围 */
  maxScope?: number;
}

const { RangePicker } = DatePicker;

const LabelCustomizeRangePicker = (props: LabelCustomizeRangePickerProps) => {
  const {
    customizeTimeList,
    radioList,
    rangePickerType = 'label',
    label,
    maxScope,
    ...options
  } = props;
  const [date, setDate] = useControllableValue(props);
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [radioKey, setRadioKey] = useState<string | number | null>();
  const [open, setOpen] = useState(false);
  const messages = useContext(LocaleContext);
  const dataSource = radioList ?? getDefaultRadioList(messages);

  useEffect(() => {
    const filterItemList = dataSource.filter((item) => {
      if (!date) return false;
      const [startTime, endTime] = item.value;
      const [defaultStartTime, defaultEndTime] = date || [];
      if (startTime.isSame(defaultStartTime, 'day') && endTime.isSame(defaultEndTime, 'day')) {
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

  const onDiyTimeChange = (event: CheckboxChangeEvent) => {
    const { checked } = event.target;
    setIsVisiblePanel(checked);
  };

  const onDateChange = (nextValue: RangeValue<moment.Moment>) => {
    const [start, end] = nextValue || [];
    let nextStartDate = start?.clone().startOf('day') ?? null;
    let nextEndDate = end?.clone().endOf('day') ?? null;
    if (!nextStartDate && !nextEndDate) {
      return setDate(undefined);
    }

    if (!maxScope) {
      return setDate([nextStartDate, nextEndDate]);
    }

    const [startDate] = date || [];
    if (nextStartDate && nextEndDate) {
      const isChangeStartData = !startDate?.clone().isSame(nextStartDate, 'day');

      if (isChangeStartData) {
        if (nextEndDate.diff(nextStartDate, 'day') > maxScope) {
          nextEndDate = nextStartDate.clone().add(maxScope - 1, 'day');
        }
      } else if (nextEndDate.diff(nextStartDate, 'day') > maxScope) {
        nextStartDate = nextEndDate.clone().subtract(maxScope - 1, 'day');
      }
    } else if (!nextStartDate && nextEndDate) {
      nextStartDate = nextEndDate.clone().subtract(maxScope - 1, 'day');
    } else if (nextStartDate && !nextEndDate) {
      nextEndDate = nextStartDate.clone().add(maxScope - 1, 'day');
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

  const list =
    radioList ??
    getDefaultRadioList(messages).filter((item) =>
      customizeTimeList ? customizeTimeList.includes(item.key as dateTypeEnum) : true,
    );

  const resultList = maxScope
    ? list.filter((item) => {
        const [startTime, entTime] = item.value;
        const space = moment.duration(entTime.diff(startTime)).asDays();

        return space <= maxScope;
      })
    : list;

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

  const onOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  const baseOptions = {
    value: date,
    onChange: onDateChange,
    open,
    onOpenChange,
    panelRender,
    allowClear: false,
  };

  return rangePickerType === 'label' ? (
    <LabelRangePicker label={label} {...baseOptions} {...omit(options, 'onChange')} />
  ) : (
    <RangePicker {...baseOptions} {...omit(options, 'onChange')} />
  );
};

export default LabelCustomizeRangePicker;
