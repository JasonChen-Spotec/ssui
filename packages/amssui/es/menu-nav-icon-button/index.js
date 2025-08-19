var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
import useControllableValue from 'ahooks/es/useControllableValue';
import classNames from 'classnames';
import React from 'react';
var MenuNavIconButton = function MenuNavIconButton(props) {
  var _onClick = props.onClick,
    className = props.className;
  var _a = __read(
      useControllableValue(props, {
        valuePropName: 'status',
      }),
      2,
    ),
    status = _a[0],
    setStatus = _a[1];
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(
        'menu-nav-icon',
        {
          open: status,
        },
        className,
      ),
      onClick: function onClick() {
        var nextStatus = !status;
        setStatus(nextStatus);
        _onClick === null || _onClick === void 0 ? void 0 : _onClick();
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'menu-nav-icon-wrap',
      },
      /*#__PURE__*/ React.createElement('span', {
        className: 'menu-nav-icon-bar',
      }),
      /*#__PURE__*/ React.createElement('span', {
        className: 'menu-nav-icon-bar',
      }),
      /*#__PURE__*/ React.createElement('span', {
        className: 'menu-nav-icon-bar',
      }),
    ),
  );
};
export default MenuNavIconButton;
