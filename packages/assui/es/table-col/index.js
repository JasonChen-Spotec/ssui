import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
var TableCol = function TableCol(_ref) {
  var children = _ref.children,
    width = _ref.width,
    className = _ref.className;
  return _jsx("div", {
    style: {
      width: width + "px"
    },
    className: classNames('a-table-col', className),
    children: children
  });
};
export default TableCol;