import React, { useState, useEffect } from 'react';
import { Radio, DatePicker, Checkbox } from 'antd';
import type { Moment } from 'moment';
import type { RangeValue } from 'rc-picker/lib/interface';
import type { RangePickerProps } from 'antd/lib/date-picker';
import { useControllableValue } from 'ahooks';
import type { RadioChangeEvent } from 'antd/lib/radio';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import type { dateTypeEnum } from './defaultRadioList';
import defaultRadioList from './defaultRadioList';

const { RangePicker } = DatePicker;

export type RadioListType = {
  key: string | number | dateTypeEnum;
  text: string;
  value: [Moment, Moment];
};

export interface CustomizeRangePickerProps extends Omit<RangePickerProps, ''> {
  customizeTimeList?: dateTypeEnum[];
  radioList?: RadioListType[];
}

const CustomizeRangePicker: React.FC<CustomizeRangePickerProps> = (props) => {
  const { customizeTimeList, radioList, ...options } = props;
  const [date, setDate] = useControllableValue<RangeValue<Moment>>(props);
  const [open, setOpen] = useState(false);
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [radioKey, setRadioKey] = useState<string | number | null>();

  const dataSource = radioList ?? defaultRadioList;

  useEffect(() => {
    const foundItem = dataSource.find((item) => {
      if (!date) return false;
      const [startTime, endTime] = item.value;
      const [defaultStartTime, defaultEndTime] = date || [];
      if (startTime.isSame(defaultStartTime, 'day') && endTime.isSame(defaultEndTime, 'day')) {
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

  const onRadioChange = (event: RadioChangeEvent) => {
    const { value } = event.target;
    setRadioKey(value);
    const selectRadioInfo = dataSource.find((item) => item.key === value);
    if (selectRadioInfo) {
      setDate(selectRadioInfo?.value);
    }
    setOpen(false);
  };

  const onOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  const list =
    radioList ??
    defaultRadioList.filter((item) =>
      customizeTimeList ? customizeTimeList.includes(item.key as dateTypeEnum) : true,
    );

  const panelRender = (panel: React.ReactNode) => (
    <div className="customize-range-picker-panel">
      <div className="check-wrapper">
        <span className="customize-select">
          <Checkbox onChange={onDiyTimeChange} />
          <span className="customize-select-text">自定义时间</span>
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
    <RangePicker
      value={date}
      onOpenChange={onOpenChange}
      open={open}
      allowClear={false}
      panelRender={panelRender}
      {...options}
    />
  );
};

export default CustomizeRangePicker;
