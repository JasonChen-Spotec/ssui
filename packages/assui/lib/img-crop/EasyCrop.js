"use strict";

var _excluded = ["aspect", "minZoom", "maxZoom", "onComplete"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var react_easy_crop_1 = tslib_1.__importDefault(require("react-easy-crop"));
var EasyCrop = function EasyCrop(props) {
  var aspect = props.aspect,
    minZoom = props.minZoom,
    maxZoom = props.maxZoom,
    onComplete = props.onComplete,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _React$useState = React.useState({
      x: 0,
      y: 0
    }),
    crop = _React$useState[0],
    setCrop = _React$useState[1];
  var _React$useState2 = React.useState({
      width: 0,
      height: 0
    }),
    cropSize = _React$useState2[0],
    setCropSize = _React$useState2[1];
  var onCropComplete = React.useCallback(function (_, croppedAreaPixels) {
    onComplete(croppedAreaPixels);
  }, [onComplete]);
  var onMediaLoaded = React.useCallback(function (mediaSize) {
    var width = mediaSize.width,
      height = mediaSize.height;
    var ratioWidth = height * aspect;
    if (width > ratioWidth) {
      setCropSize({
        width: ratioWidth,
        height: height
      });
    } else {
      setCropSize({
        width: width,
        height: width / aspect
      });
    }
  }, [aspect]);
  return (0, jsx_runtime_1.jsx)(react_easy_crop_1["default"], _extends({}, restProps, {
    crop: crop,
    cropSize: cropSize,
    onCropChange: setCrop,
    aspect: aspect,
    minZoom: minZoom,
    maxZoom: maxZoom,
    onCropComplete: onCropComplete,
    onMediaLoaded: onMediaLoaded
  }));
};
exports["default"] = EasyCrop;