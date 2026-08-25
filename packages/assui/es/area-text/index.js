import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
var AreaText = function AreaText(_ref) {
  var value = _ref.value,
    className = _ref.className;
  return _jsx("div", {
    className: classNames('area-text', className),
    children: value
  });
};
export default AreaText;