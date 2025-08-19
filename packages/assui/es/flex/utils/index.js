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
import classNames from 'classnames';
export var flexWrapValues = ['wrap', 'nowrap', 'wrap-reverse'];
export var justifyContentValues = [
  'flex-start',
  'flex-end',
  'start',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'normal',
  'left',
  'right',
];
export var alignItemsValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'self-start',
  'self-end',
  'baseline',
  'normal',
  'stretch',
];
var genClsWrap = function genClsWrap(prefixCls, props) {
  var wrapCls = {};
  flexWrapValues.forEach(function (cssKey) {
    wrapCls[''.concat(prefixCls, '-wrap-').concat(cssKey)] = props.wrap === cssKey;
  });
  return wrapCls;
};
var genClsAlign = function genClsAlign(prefixCls, props) {
  var alignCls = {};
  alignItemsValues.forEach(function (cssKey) {
    alignCls[''.concat(prefixCls, '-align-').concat(cssKey)] = props.align === cssKey;
  });
  alignCls[''.concat(prefixCls, '-align-stretch')] = !props.align && !!props.vertical;
  return alignCls;
};
var genClsJustify = function genClsJustify(prefixCls, props) {
  var justifyCls = {};
  justifyContentValues.forEach(function (cssKey) {
    justifyCls[''.concat(prefixCls, '-justify-').concat(cssKey)] =
      props.justify === cssKey;
  });
  return justifyCls;
};
function createFlexClassNames(prefixCls, props) {
  return classNames(
    __assign(
      __assign(__assign({}, genClsWrap(prefixCls, props)), genClsAlign(prefixCls, props)),
      genClsJustify(prefixCls, props),
    ),
  );
}
export default createFlexClassNames;
