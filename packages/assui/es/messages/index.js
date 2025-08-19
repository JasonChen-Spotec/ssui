export var langTypeEnum;
(function (langTypeEnum) {
  langTypeEnum['labelCustomizeRangePicker'] = 'labelCustomizeRangePicker';
  langTypeEnum['global'] = 'global';
})(langTypeEnum || (langTypeEnum = {}));
export default function formatMessage(message, displayName, key) {
  return message[displayName][key];
}
