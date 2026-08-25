import { useIntl } from 'react-intl';
import messages from '../../intl/messages';
/** 男 */
var MALE = 1;
/** 女 */
var FEMALE = 2;
/** 空 */
var EMPTY = -1;
export { EMPTY, FEMALE, MALE };
export var useGenderType = function useGenderType() {
  var _appellativeGenderTyp, _genderTypeMap;
  var _useIntl = useIntl(),
    formatMessage = _useIntl.formatMessage;
  var appellativeGenderTypeMap = (_appellativeGenderTyp = {}, _appellativeGenderTyp[MALE] = formatMessage(messages.male), _appellativeGenderTyp[FEMALE] = formatMessage(messages.female), _appellativeGenderTyp[EMPTY] = '', _appellativeGenderTyp);
  var genderTypeMap = (_genderTypeMap = {}, _genderTypeMap[MALE] = formatMessage(messages.male), _genderTypeMap[FEMALE] = formatMessage(messages.female), _genderTypeMap[EMPTY] = '-', _genderTypeMap);
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