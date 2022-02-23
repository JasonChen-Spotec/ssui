import React, { useState, useEffect } from 'react';
import { Radio, Checkbox } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { RangeValue } from 'rc-picker/es/interface';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import useControllableValue from 'ahooks/lib/useControllableValue';
import getRadioList from './getRadioList';
import LabelRangePicker from '../label-range-picker';
import { useDateScope, dateTypeEnum } from './getDateScope';
import type { LabelRangePickerProps } from '../label-range-picker';

export interface LabelCustomizeRangePickerProps extends LabelRangePickerProps {
  customizeTimeList?: dateTypeEnum[];
}

const LabelCustomizeRangePicker = (props: LabelCustomizeRangePickerProps) => {
  const { customizeTimeList, ...options } = props;
  const [date, setDate] = useControllableValue(props);
  const [isVisiblePanel, setIsVisiblePanel] = useState(false);
  const [radioKey, setRadioKey] = useState<dateTypeEnum | null>();
  const { dateScopeMap, dateScopeList } = useDateScope();

  useEffect(() => {
    const foundItem = dateScopeList.find((item) => {
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
    setDate(dateScopeMap[value as dateTypeEnum]);
  };

  const list = getRadioList().filter((item) => customizeTimeList?.includes(item.key));
  const finallyRadioList = list.length ? list : getRadioList();

  const panelRender = (panel: React.ReactNode) => (
    <div className="wrapper">
      <div className="check-wrapper">
        <span className="customize-select">
          <Checkbox prefixCls="ant-checkbox" onChange={onDiyTimeChange} />
          <span>自定义时间</span>
        </span>
      </div>
      {isVisiblePanel ? (
        <div className="panel">{panel}</div>
      ) : (
        <div className="pick-box">
          <Radio.Group onChange={onRadioChange} value={radioKey}>
            {finallyRadioList.map(({ key, text }) => (
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
LabelCustomizeRangePicker.dateTypeEnum = dateTypeEnum;

export default LabelCustomizeRangePicker;
