import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useControllableValue from "ahooks/es/useControllableValue";
import classNames from 'classnames';
var MenuNavIconButton = function MenuNavIconButton(props) {
  var _onClick = props.onClick,
    className = props.className;
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'status'
    }),
    status = _useControllableValue[0],
    setStatus = _useControllableValue[1];
  return _jsx("div", {
    className: classNames('menu-nav-icon', {
      open: status
    }, className),
    onClick: function onClick() {
      var nextStatus = !status;
      setStatus(nextStatus);
      _onClick == null || _onClick();
    },
    children: _jsxs("div", {
      className: "menu-nav-icon-wrap",
      children: [_jsx("span", {
        className: "menu-nav-icon-bar"
      }), _jsx("span", {
        className: "menu-nav-icon-bar"
      }), _jsx("span", {
        className: "menu-nav-icon-bar"
      })]
    })
  });
};
export default MenuNavIconButton;