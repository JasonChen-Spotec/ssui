import React from 'react';
import classNames from 'classnames';
var AreaText = function AreaText(_a) {
  var value = _a.value,
    className = _a.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('area-text', className)
  }, value);
};
export default AreaText;