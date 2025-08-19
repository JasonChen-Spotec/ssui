import moment from 'moment';
import dateUtils from '../dateUtils';
import localStorage from '../localStorage';
var today = dateUtils.getToday();
var setCurrentTime = function setCurrentTime() {
  return localStorage.set('executionTime', ''.concat(today.valueOf()));
};
var intervalExecution = function intervalExecution(callback) {
  var executionTime = localStorage.get('executionTime');
  if (executionTime) {
    var inInterval = moment(+executionTime).isBetween(
      today.clone().startOf('day'),
      today.clone().endOf('day'),
    );
    !inInterval && callback();
  } else {
    callback();
  }
  setCurrentTime();
};
export default intervalExecution;
