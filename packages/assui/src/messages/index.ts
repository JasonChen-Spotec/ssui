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
};

export type LangType = {
  labelCustomizeRangePicker: LabelCustomizeRangePickerType;
};

export type DisplayNameType = 'labelCustomizeRangePicker';

export default function formatMessage(
  message: LangType,
  displayName: DisplayNameType,
  key: keyof LabelCustomizeRangePickerType,
) {
  return message[displayName][key];
}
