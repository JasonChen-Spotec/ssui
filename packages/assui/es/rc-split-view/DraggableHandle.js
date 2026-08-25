import { jsx as _jsx } from "react/jsx-runtime";
var DraggableHandle = function DraggableHandle(props) {
  var className = props.className,
    _onClick = props.onClick,
    _onDoubleClick = props.onDoubleClick,
    _onMouseDown = props.onMouseDown,
    _onTouchEnd = props.onTouchEnd,
    _onTouchStart = props.onTouchStart,
    children = props.children;
  return _jsx("div", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      return _onMouseDown(event);
    },
    onTouchStart: function onTouchStart(event) {
      event.preventDefault();
      _onTouchStart(event);
    },
    onTouchEnd: function onTouchEnd(event) {
      event.preventDefault();
      _onTouchEnd(event);
    },
    onClick: function onClick(event) {
      if (_onClick) {
        event.preventDefault();
        _onClick(event);
      }
    },
    onDoubleClick: function onDoubleClick(event) {
      if (_onDoubleClick) {
        event.preventDefault();
        _onDoubleClick(event);
      }
    },
    children: children
  });
};
export default DraggableHandle;