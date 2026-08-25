function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import classNames from 'classnames';
export var flexWrapValues = ['wrap', 'nowrap', 'wrap-reverse'];
export var justifyContentValues = ['flex-start', 'flex-end', 'start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'normal', 'left', 'right'];
export var alignItemsValues = ['center', 'start', 'end', 'flex-start', 'flex-end', 'self-start', 'self-end', 'baseline', 'normal', 'stretch'];
var genClsWrap = function genClsWrap(prefixCls, props) {
  var wrapCls = {};
  flexWrapValues.forEach(function (cssKey) {
    wrapCls[prefixCls + "-wrap-" + cssKey] = props.wrap === cssKey;
  });
  return wrapCls;
};
var genClsAlign = function genClsAlign(prefixCls, props) {
  var alignCls = {};
  alignItemsValues.forEach(function (cssKey) {
    alignCls[prefixCls + "-align-" + cssKey] = props.align === cssKey;
  });
  alignCls[prefixCls + "-align-stretch"] = !props.align && !!props.vertical;
  return alignCls;
};
var genClsJustify = function genClsJustify(prefixCls, props) {
  var justifyCls = {};
  justifyContentValues.forEach(function (cssKey) {
    justifyCls[prefixCls + "-justify-" + cssKey] = props.justify === cssKey;
  });
  return justifyCls;
};
function createFlexClassNames(prefixCls, props) {
  return classNames(_extends({}, genClsWrap(prefixCls, props), genClsAlign(prefixCls, props), genClsJustify(prefixCls, props)));
}
export default createFlexClassNames;