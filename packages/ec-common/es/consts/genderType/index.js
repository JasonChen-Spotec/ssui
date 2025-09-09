import { useIntl } from 'react-intl';
import messages from '../../intl/messages';
/** 男 */
var MALE = 1;
/** 女 */
var FEMALE = 2;
/** 空 */
var EMPTY = -1;
export { MALE, FEMALE, EMPTY };
export var useGenderType = function useGenderType() {
  var _a, _b;
  var formatMessage = useIntl().formatMessage;
  var appellativeGenderTypeMap = (_a = {}, _a[MALE] = formatMessage(messages.male), _a[FEMALE] = formatMessage(messages.female), _a[EMPTY] = '', _a);
  var genderTypeMap = (_b = {}, _b[MALE] = formatMessage(messages.male), _b[FEMALE] = formatMessage(messages.female), _b[EMPTY] = '-', _b);
  var genderTypeList = [{
    value: MALE,
    label: formatMessage(messages.male)
  }, {
    value: FEMALE,
    label: formatMessage(messages.female)
  }];
  return {
    genderTypeMap: genderTypeMap,
    genderTypeList: genderTypeList,
    appellativeGenderTypeMap: appellativeGenderTypeMap
  };
};