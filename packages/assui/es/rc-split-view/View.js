import React from 'react';
import isUndefined from 'lodash/isUndefined';
var View = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    split = props.split,
    size = props.size;
  var viewStyle = {
    flex: 1,
    position: 'relative',
    outline: 'none'
  };
  if (!isUndefined(size)) {
    if (split === 'vertical') {
      viewStyle.width = size;
    } else {
      viewStyle.height = size;
      viewStyle.display = 'flex';
    }
    viewStyle.flex = 'none';
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: viewStyle
  }, children);
});
export default View;