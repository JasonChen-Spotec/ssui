import React, { useState, useEffect } from 'react';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import type { RadioChangeEvent } from 'antd/lib/radio';
import type { RangeValue } from 'rc-picker/lib/interface';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import useControllableValue from 'ahooks/lib/useControllableValue';
import type { Moment } from 'moment';
import type { dateTypeEnum } from './defaultRadioList';
import defaultRadioList from './defaultRadioList';
import LabelRangePicker from '../label-range-picker';
import type { LabelRangePickerProps } from '../label-range-picker';

export type RadioListType = {
  key: string | number | dateTypeEnum;
  text: string;
  value: [Moment, Moment];
};

export interface LabelCustomizeRangePickerProps extends LabelRangePickerProps {
  radioList?: RadioListType[];
  customizeTimeList?: dateTypeEnum[];
}

const LabelCustomizeRangePicker = (props: LabelCustomizeRangePickerProps) => {
  const { customizeTimeList, radioList, ...options } = props;
  const [date, setDate] = useControllableValue(props);
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [radioKey, setRadioKey] = useState<string | number | null>();

  const dataSource = radioList ?? defaultRadioList;

  useEffect(() => {
    const foundItem = dataSource.find((item) => {
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
    const data = foundItem ? foundItem.key : null;
    setRadioKey(data);
  }, [date]);

  const onDiyTimeChange = (event: CheckboxChangeEvent) => {
    const { checked } = event.target;
    setIsVisiblePanel(checked);
  };

  const onDateChange = (nextValue: RangeValue<moment.Moment>) => {
    setDate(nextValue);
  };

  const onRadioChange = (event: RadioChangeEvent) => {
    const { value } = event.target;
    setRadioKey(value);
    const selectRadioInfo = dataSource.find((item) => item.key === value);
    setDate(selectRadioInfo?.value);
  };

  const list =
    radioList ??
    defaultRadioList.filter((item) =>
      customizeTimeList?.includes(item.key as dateTypeEnum),
    );

  const panelRender = (panel: React.ReactNode) => (
    <div className="wrapper">
      <div className="check-wrapper">
        <span className="customize-select">
          <Checkbox onChange={onDiyTimeChange} />
          <span>自定义时间</span>
        </span>
      </div>
      {isVisiblePanel ? (
        <div className="panel">{panel}</div>
      ) : (
        <div className="pick-box">
          <Radio.Group onChange={onRadioChange} value={radioKey}>
            {list.map(({ key, text }) => (
              <Radio className="radio" key={key} value={key}>
                {text}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      )}
    </div>
  );

  return (
    <LabelRangePicker
      value={date}
      onChange={onDateChange}
      panelRender={panelRender}
      {...options}
    />
  );
};

export default LabelCustomizeRangePicker;
