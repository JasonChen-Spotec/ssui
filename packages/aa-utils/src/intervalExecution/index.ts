import moment from 'moment';
import localStorage from '../localStorage';
import dateUtils from '../dateUtils';

const today = dateUtils.getToday();

const setCurrentTime = () => localStorage.set('executionTime', `${today.valueOf()}`);

const intervalExecution = (callback: () => void) => {
  const executionTime = localStorage.get('executionTime');

  if (executionTime) {
    const inInterval = moment(+executionTime).isBetween(
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
