var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
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
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
import * as React from 'react';
import Cropper from 'react-easy-crop';
var EasyCrop = function EasyCrop(props) {
  var aspect = props.aspect,
    minZoom = props.minZoom,
    maxZoom = props.maxZoom,
    onComplete = props.onComplete,
    restProps = __rest(props, ["aspect", "minZoom", "maxZoom", "onComplete"]);
  var _a = __read(React.useState({
      x: 0,
      y: 0
    }), 2),
    crop = _a[0],
    setCrop = _a[1];
  var _b = __read(React.useState({
      width: 0,
      height: 0
    }), 2),
    cropSize = _b[0],
    setCropSize = _b[1];
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
  return /*#__PURE__*/React.createElement(Cropper, __assign({}, restProps, {
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
export default EasyCrop;