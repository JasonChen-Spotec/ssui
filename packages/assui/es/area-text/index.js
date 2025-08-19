import classNames from 'classnames';
import React from 'react';
var AreaText = function AreaText(_a) {
  var value = _a.value,
    className = _a.className;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames('area-text', className),
    },
    value,
  );
};
export default AreaText;
