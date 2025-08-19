var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import classNames from 'classnames';
import omit from 'rc-util/es/omit';
import React from 'react';
import createFlexClassNames from './utils';
import { isPresetSize } from './utils/gapSize';
var Flex = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _a;
  var className = props.className,
    style = props.style,
    flex = props.flex,
    gap = props.gap,
    children = props.children,
    _b = props.vertical,
    vertical = _b === void 0 ? false : _b,
    _c = props.component,
    Component = _c === void 0 ? 'div' : _c,
    othersProps = __rest(props, [
      'className',
      'style',
      'flex',
      'gap',
      'children',
      'vertical',
      'component',
    ]);
  var prefixCls = 'as-flex';
  var flexClassNames = createFlexClassNames(prefixCls, props);
  var mergedCls = classNames(
    className,
    prefixCls,
    flexClassNames,
    ((_a = {}),
    (_a[''.concat(prefixCls, '-gap-').concat(gap)] = isPresetSize(gap)),
    (_a[''.concat(prefixCls, '-vertical')] = vertical),
    _a),
  );
  var mergedStyle = __assign({}, style);
  if (flex) {
    mergedStyle.flex = flex;
  }
  if (gap && !isPresetSize(gap)) {
    mergedStyle.gap = gap;
  }
  return /*#__PURE__*/ React.createElement(
    Component,
    __assign(
      {
        ref: ref,
        className: mergedCls,
      },
      omit(othersProps, ['justify', 'wrap', 'align']),
      {
        style: mergedStyle,
      },
    ),
    children,
  );
});
export default Flex;
