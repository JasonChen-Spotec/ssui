import React from 'react';
import classNames from 'classnames';
var TableCol = function TableCol(_a) {
  var children = _a.children,
    width = _a.width,
    className = _a.className;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "".concat(width, "px")
    },
    className: classNames('a-table-col', className)
  }, children);
};
export default TableCol;