import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useCountDown from "ahooks/es/useCountDown";
import isFunction from 'lodash/isFunction';
var CountDown = function CountDown(_ref) {
  var options = _ref.options,
    render = _ref.render;
  var _useCountDown = useCountDown(options),
    countDown = _useCountDown[0],
    formattedRes = _useCountDown[1];
  var days = formattedRes.days,
    hours = formattedRes.hours,
    minutes = formattedRes.minutes,
    seconds = formattedRes.seconds,
    milliseconds = formattedRes.milliseconds;
  if (isFunction(render)) {
    return _jsx(_Fragment, {
      children: render(formattedRes, countDown)
    });
  }
  return _jsxs("div", {
    children: [days, " days ", hours, " hours ", minutes, " minutes ", seconds, " seconds ", milliseconds]
  });
};
export default CountDown;