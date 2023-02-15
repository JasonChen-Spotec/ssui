// TODO
// @ts-nocheck
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
};

export type Global = {
  placeholder: string;
};

export type All = LabelCustomizeRangePickerType & Global;

export type LangType = {
  labelCustomizeRangePicker: LabelCustomizeRangePickerType;
  global: Global;
};

export type DisplayNameType = 'labelCustomizeRangePicker' | 'global';

export default function formatMessage(
  message: LangType,
  displayName: DisplayNameType,
  key: keyof All,
) {
  return message[displayName][key];
}
