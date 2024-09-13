export type LabelCustomizeRangePickerType = {
  customTime: string;
  toDay: string;
  yesterDay: string;
  week: string;
  lastWeek: string;
  month: string;
  lastMonth: string;
  quarter: string;
  lastQuarter: string;
  last7days: string;
  last14days: string;
  last30days: string;
  last90days: string;
  last180days: string;
  last365days: string;
  year: string;
  all: string;
};

export type Global = {
  placeholder: string;
};

export enum langTypeEnum {
  labelCustomizeRangePicker = 'labelCustomizeRangePicker',
  global = 'global',
}

export type LangType = {
  [langTypeEnum.labelCustomizeRangePicker]: LabelCustomizeRangePickerType;
  [langTypeEnum.global]: Global;
};

export default function formatMessage<T extends LangType, K extends keyof T>(
  message: Record<K, T[K]>,
  displayName: K,
  key: keyof T[K],
) {
  return message[displayName][key];
}
