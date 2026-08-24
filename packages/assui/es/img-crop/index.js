var _excluded = ["beforeUpload", "accept"];
function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }
  if (!value || !value.then) {
    value = Promise.resolve(value);
  }
  return then ? value.then(then) : value;
}
function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
function _empty() {}
function _continueIgnored(value) {
  if (value && value.then) {
    return value.then(_empty);
  }
}
function _invokeIgnored(body) {
  var result = body();
  if (result && result.then) {
    return result.then(_empty);
  }
}
function _invoke(body, then) {
  var result = body();
  if (result && result.then) {
    return result.then(then);
  }
  return then(result);
}
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import Modal from "antd/es/modal";
import Slider from "antd/es/slider";
import EasyCrop from './EasyCrop';
import getCroppedImg from './getCroppedImg';
import './style/index.less';
var noop = function noop() {};
var ZOOM_STEP = 0.1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var ROTATE_STEP = 1;
var ImgCrop = function ImgCrop(props) {
  var _props$aspect = props.aspect,
    aspect = _props$aspect === void 0 ? 1 : _props$aspect,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'rect' : _props$shape,
    _props$grid = props.grid,
    grid = _props$grid === void 0 ? false : _props$grid,
    _props$quality = props.quality,
    quality = _props$quality === void 0 ? 1 : _props$quality,
    _props$zoom = props.zoom,
    zoom = _props$zoom === void 0 ? true : _props$zoom,
    _props$rotate = props.rotate,
    rotate = _props$rotate === void 0 ? false : _props$rotate,
    _props$minZoom = props.minZoom,
    minZoom = _props$minZoom === void 0 ? 1 : _props$minZoom,
    _props$maxZoom = props.maxZoom,
    maxZoom = _props$maxZoom === void 0 ? 3 : _props$maxZoom,
    _props$fillColor = props.fillColor,
    fillColor = _props$fillColor === void 0 ? 'rgba(0,0,0,0)' : _props$fillColor,
    _props$prefix = props.prefix,
    prefix = _props$prefix === void 0 ? 'ant' : _props$prefix,
    modalTitle = props.modalTitle,
    modalWidth = props.modalWidth,
    modalOk = props.modalOk,
    modalCancel = props.modalCancel,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    beforeCrop = props.beforeCrop,
    zipImg = props.zipImg,
    children = props.children,
    cropperProps = props.cropperProps;
  var pkg = prefix + "-img-crop";
  var MEDIA_CLASS = pkg + "-media";
  var hasZoom = zoom === true;
  var hasRotate = rotate === true;
  var _React$useState = React.useState(''),
    src = _React$useState[0],
    setSrc = _React$useState[1];
  var _React$useState2 = React.useState(1),
    zoomVal = _React$useState2[0],
    setZoomVal = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    rotateVal = _React$useState3[0],
    setRotateVal = _React$useState3[1];
  var beforeUploadRef = React.useRef();
  var fileRef = React.useRef();
  var resolveRef = React.useRef(noop);
  var rejectRef = React.useRef(noop);
  var cropPixelsRef = React.useRef();
  /**
   * Upload
   */
  var renderUpload = React.useCallback(function () {
    var upload = Array.isArray(children) ? children[0] : children;
    var _upload$props = upload.props,
      beforeUpload = _upload$props.beforeUpload,
      accept = _upload$props.accept,
      restUploadProps = _objectWithoutPropertiesLoose(_upload$props, _excluded);
    beforeUploadRef.current = beforeUpload;
    return _extends({}, upload, {
      props: _extends({}, restUploadProps, {
        accept: accept || 'image/*',
        beforeUpload: function beforeUpload(file, fileList) {
          return new Promise(function (resolve, reject) {
            if (beforeCrop && !beforeCrop(file, fileList)) {
              reject();
              return;
            }
            fileRef.current = file;
            resolveRef.current = resolve;
            rejectRef.current = reject;
            var reader = new FileReader();
            reader.addEventListener('load', function () {
              setSrc(reader.result);
            });
            reader.readAsDataURL(file);
          });
        }
      })
    });
  }, [beforeCrop, children]);
  /**
   * EasyCrop
   */
  var onComplete = React.useCallback(function (croppedAreaPixels) {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);
  /**
   * Controls
   */
  var isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  var isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  var isMinRotate = rotateVal === MIN_ROTATE;
  var isMaxRotate = rotateVal === MAX_ROTATE;
  var subZoomVal = React.useCallback(function () {
    if (!isMinZoom) {
      setZoomVal(zoomVal - ZOOM_STEP);
    }
  }, [isMinZoom, zoomVal]);
  var addZoomVal = React.useCallback(function () {
    if (!isMaxZoom) {
      setZoomVal(zoomVal + ZOOM_STEP);
    }
  }, [isMaxZoom, zoomVal]);
  var subRotateVal = React.useCallback(function () {
    if (!isMinRotate) {
      setRotateVal(rotateVal - ROTATE_STEP);
    }
  }, [isMinRotate, rotateVal]);
  var addRotateVal = React.useCallback(function () {
    if (!isMaxRotate) {
      setRotateVal(rotateVal + ROTATE_STEP);
    }
  }, [isMaxRotate, rotateVal]);
  /**
   * Modal
   */
  var modalProps = React.useMemo(function () {
    var obj = {
      width: modalWidth,
      okText: modalOk,
      cancelText: modalCancel,
      closable: closable
    };
    return obj;
  }, [modalCancel, modalOk, modalWidth]);
  var onClose = React.useCallback(function () {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);
  var onOk = React.useCallback(_async(function () {
    onClose();
    var naturalImg = document.querySelector("." + MEDIA_CLASS);
    var naturalWidth = naturalImg.naturalWidth,
      naturalHeight = naturalImg.naturalHeight;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // create a max canvas to cover the source image after rotated
    var maxLen = Math.sqrt(Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2));
    canvas.width = maxLen;
    canvas.height = maxLen;
    // rotate the image
    if (hasRotate && rotateVal > 0 && rotateVal < 360) {
      var halfMax = maxLen / 2;
      ctx == null || ctx.translate(halfMax, halfMax);
      ctx == null || ctx.rotate(rotateVal * Math.PI / 180);
      ctx == null || ctx.translate(-halfMax, -halfMax);
    }
    ctx.fillStyle = fillColor;
    ctx == null || ctx.fillRect(0, 0, canvas.width, canvas.height);
    // draw the source image in the center of the max canvas
    var left = (maxLen - naturalWidth) / 2;
    var top = (maxLen - naturalHeight) / 2;
    ctx == null || ctx.drawImage(naturalImg, left, top);
    // shrink the max canvas to the crop area size, then align two center points
    var maxImgData = ctx == null ? void 0 : ctx.getImageData(0, 0, maxLen, maxLen);
    var _cropPixelsRef$curren = cropPixelsRef.current,
      width = _cropPixelsRef$curren.width,
      height = _cropPixelsRef$curren.height,
      x = _cropPixelsRef$curren.x,
      y = _cropPixelsRef$curren.y;
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y));
    // get the new image
    var _fileRef$current = fileRef.current,
      type = _fileRef$current.type,
      name = _fileRef$current.name,
      uid = _fileRef$current.uid;
    canvas.toBlob(_async(function (blob) {
      if (!blob) {
        return null;
      }
      var newFile = new File([blob], name, {
        type: type
      });
      return _invoke(function () {
        if (zipImg) {
          var url = window.URL || window.webkitURL;
          var imgUrl = url.createObjectURL(newFile);
          return _await(getCroppedImg(imgUrl, zipImg, name, type), function (_ref) {
            var fileObj = _ref.fileObj;
            newFile = fileObj;
          });
        }
      }, function () {
        var _exit = false;
        newFile.uid = uid;
        if (typeof beforeUploadRef.current !== 'function') {
          return resolveRef.current(newFile);
        }
        var res = beforeUploadRef.current(newFile, [newFile]);
        return _invoke(function () {
          if (typeof res !== 'boolean' && !res) {
            console.error('beforeUpload must return a boolean or Promise');
          } else {
            if (res === true) {
              var _resolveRef$current = resolveRef.current(newFile);
              _exit = true;
              return _resolveRef$current;
            }
            if (res === false) {
              var _rejectRef$current = rejectRef.current('not upload');
              _exit = true;
              return _rejectRef$current;
            }
            return _invokeIgnored(function () {
              if (res && typeof res.then === 'function') {
                return _continueIgnored(_catch(function () {
                  return _await(res, function (passedFile) {
                    var fileType = Object.prototype.toString.call(passedFile);
                    if (fileType === '[object File]' || fileType === '[object Blob]') {
                      newFile = passedFile;
                    }
                    resolveRef.current(newFile);
                  });
                }, function (err) {
                  rejectRef.current(err);
                }));
              }
            });
          }
        }, function (_result) {
          return _exit ? _result : null;
        });
      });
    }), type, quality);
    return _await();
  }), [hasRotate, onClose, quality, rotateVal]);
  var renderComponent = function renderComponent(titleOfModal) {
    return _jsxs(_Fragment, {
      children: [renderUpload(), src && _jsxs(Modal, _extends({
        open: true,
        wrapClassName: pkg + "-modal",
        title: titleOfModal,
        onOk: onOk,
        onCancel: onClose,
        maskClosable: false,
        destroyOnClose: true,
        centered: true
      }, modalProps, {
        children: [_jsx(EasyCrop, _extends({
          image: src,
          aspect: aspect,
          cropShape: shape,
          showGrid: grid,
          zoomWithScroll: hasZoom,
          zoom: zoomVal,
          rotation: rotateVal,
          onZoomChange: setZoomVal,
          onRotationChange: setRotateVal,
          minZoom: minZoom,
          maxZoom: maxZoom,
          onComplete: onComplete,
          classes: {
            containerClassName: pkg + "-container",
            mediaClassName: MEDIA_CLASS
          }
        }, cropperProps)), hasZoom && _jsxs("div", {
          className: pkg + "-control zoom",
          children: [_jsx("button", {
            type: "button",
            onClick: subZoomVal,
            disabled: isMinZoom,
            children: "\uFF0D"
          }), _jsx(Slider, {
            min: minZoom,
            max: maxZoom,
            step: ZOOM_STEP,
            value: zoomVal,
            onChange: setZoomVal
          }), _jsx("button", {
            type: "button",
            onClick: addZoomVal,
            disabled: isMaxZoom,
            children: "\uFF0B"
          })]
        }), hasRotate && _jsxs("div", {
          className: pkg + "-control rotate",
          children: [_jsx("button", {
            type: "button",
            onClick: subRotateVal,
            disabled: isMinRotate,
            children: "\u21BA"
          }), _jsx(Slider, {
            min: MIN_ROTATE,
            max: MAX_ROTATE,
            step: ROTATE_STEP,
            value: rotateVal,
            onChange: setRotateVal
          }), _jsx("button", {
            type: "button",
            onClick: addRotateVal,
            disabled: isMaxRotate,
            children: "\u21BB"
          })]
        })]
      }))]
    });
  };
  return renderComponent(modalTitle);
};
ImgCrop.getCroppedImg = getCroppedImg;
export default ImgCrop;