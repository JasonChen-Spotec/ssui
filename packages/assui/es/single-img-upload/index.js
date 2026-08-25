var _excluded = ["className", "wrapperClassName", "children", "value", "onStart", "onDeleteUpload", "onFormatResData", "onSuccess", "onCancel", "beforeUpload", "onError", "disabled", "pdfName"];
function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }
  if (!value || !value.then) {
    value = Promise.resolve(value);
  }
  return then ? value.then(then) : value;
}
function _invoke(body, then) {
  var result = body();
  if (result && result.then) {
    return result.then(then);
  }
  return then(result);
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CloseOutlined from "a-icons/es/CloseOutlined";
import Pdf from "a-icons/es/Pdf";
import Image from "antd/es/image";
import Progress from "antd/es/progress";
import Spin from "antd/es/spin";
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import Upload from 'rc-upload';
var getLocalImgURL = function getLocalImgURL(file) {
  var URL = window.URL || window.webkitURL;
  var imgURL = URL.createObjectURL(file);
  return imgURL;
};
var IMAGE_TYPE = 'image';
var PDF_TYPE = 'pdf';
var initBeforeUpload = function initBeforeUpload() {
  return true;
};
var SingleImgUpload = function SingleImgUpload(props) {
  var className = props.className,
    wrapperClassName = props.wrapperClassName,
    children = props.children,
    value = props.value,
    onStart = props.onStart,
    onDeleteUpload = props.onDeleteUpload,
    onFormatResData = props.onFormatResData,
    onSuccess = props.onSuccess,
    onCancel = props.onCancel,
    _props$beforeUpload = props.beforeUpload,
    beforeUpload = _props$beforeUpload === void 0 ? initBeforeUpload : _props$beforeUpload,
    onError = props.onError,
    disabled = props.disabled,
    pdfName = props.pdfName,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var uploadInstanceRef = React.useRef();
  var fileRef = React.useRef();
  var _React$useState = React.useState(value ? 'done' : 'init'),
    uploadStatus = _React$useState[0],
    setUploadStatus = _React$useState[1];
  var _React$useState2 = React.useState(value),
    fileUrl = _React$useState2[0],
    setFileUrl = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    uploadPercent = _React$useState3[0],
    setUploadPercent = _React$useState3[1];
  var _React$useState4 = React.useState(false),
    imageLoading = _React$useState4[0],
    setImageLoading = _React$useState4[1];
  var _React$useState5 = React.useState(IMAGE_TYPE),
    fileType = _React$useState5[0],
    setFileType = _React$useState5[1];
  React.useEffect(function () {
    if (!value) {
      setUploadStatus('init');
      setFileUrl('');
      return;
    }
    setUploadStatus('done');
    setFileUrl(value);
    var isPdf = /\.pdf($|\?)/i.test(value);
    var isImage = /\.(jpg|jpeg|png|gif|webp|bmp|svg|heic)($|\?)/i.test(value);
    if (isImage) {
      setFileType(IMAGE_TYPE);
      setImageLoading(true);
      var heic2Jpeg = require('aa-utils/lib/heic2Jpeg')["default"];
      if (isFunction(heic2Jpeg)) {
        heic2Jpeg(value).then(function (resultUrl) {
          setFileUrl(resultUrl);
          setImageLoading(false);
        })["catch"](function () {
          return setImageLoading(false);
        });
      } else {
        setImageLoading(false);
      }
      return;
    }
    if (isPdf) {
      setFileType(PDF_TYPE);
      setImageLoading(false);
    }
  }, [value]);
  var onBeforeUpload = _async(function () {
    var _exit = false;
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    setFileUrl('');
    return _invoke(function () {
      if (beforeUpload) {
        return _await(beforeUpload.apply(void 0, rest), function (resultBefore) {
          if (isObject(resultBefore)) {
            setFileUrl(getLocalImgURL(resultBefore));
          }
          _exit = true;
          return resultBefore;
        });
      }
    }, function (_result) {
      return _exit ? _result : true;
    });
  });
  var handleStart = function handleStart(file) {
    fileRef.current = file;
    setUploadPercent(0);
    var isImage = file.type.startsWith('image/');
    setFileType(isImage ? IMAGE_TYPE : PDF_TYPE);
    if (!fileUrl) {
      setFileUrl(getLocalImgURL(file));
    }
    setUploadStatus('uploading');
    onStart == null || onStart(file);
  };
  var handleProgress = function handleProgress(e) {
    var percent = e.percent;
    setUploadPercent(parseInt("" + percent, 10));
  };
  var handleError = function handleError(error, ret, file) {
    setUploadStatus('init');
    onError == null || onError(error, ret, file);
  };
  var handleSuccess = function handleSuccess(res, file, xhr) {
    var result = onFormatResData ? onFormatResData(res) : res;
    onSuccess == null || onSuccess(result, file, xhr);
    setUploadStatus('done');
  };
  var uploadCls = classNames(className, {
    'not-upload-init': uploadStatus !== 'init'
  });
  var handleDeleteUpload = function handleDeleteUpload() {
    setUploadStatus('init');
    onDeleteUpload == null || onDeleteUpload();
  };
  var cancelUpload = function cancelUpload() {
    if (fileRef.current) {
      var _uploadInstanceRef$cu;
      (_uploadInstanceRef$cu = uploadInstanceRef.current) == null || _uploadInstanceRef$cu.abort(fileRef.current);
    }
    setUploadStatus('init');
    onCancel == null || onCancel();
  };
  var cls = classNames('as-img-upload', wrapperClassName);
  var getShowNode = function getShowNode() {
    if (fileType === IMAGE_TYPE) {
      return _jsx(Image, {
        wrapperClassName: "as-img-upload-preview",
        src: fileUrl,
        preview: true
      });
    }
    return _jsx("div", {
      className: "as-img-upload-pdf-preview",
      onClick: function onClick() {
        return window.open(fileUrl || value, '_blank');
      },
      children: _jsxs("div", {
        className: "as-img-upload-pdf-preview-content",
        children: [_jsx(Pdf, {}), pdfName && _jsx("div", {
          className: "as-img-upload-pdf-name",
          children: pdfName
        })]
      })
    });
  };
  return _jsxs("div", {
    className: cls,
    children: [uploadStatus === 'uploading' && _jsxs("div", {
      className: "as-img-upload-content",
      children: [getShowNode(), _jsx("div", {
        className: "dark"
      }), _jsx(Progress, {
        className: "as-img-upload-upload-progress",
        percent: uploadPercent,
        size: "small",
        status: "active"
      }), _jsx("div", {
        className: "as-img-upload-close-button",
        onClick: cancelUpload,
        children: _jsx(CloseOutlined, {})
      })]
    }), uploadStatus === 'done' && _jsx(Spin, {
      spinning: imageLoading,
      children: _jsxs("div", {
        className: "as-img-upload-content",
        children: [getShowNode(), !disabled && _jsx("div", {
          className: "as-img-upload-close-button",
          onClick: handleDeleteUpload,
          children: _jsx(CloseOutlined, {})
        })]
      })
    }), _jsx(Upload, _extends({
      ref: function ref(uploader) {
        uploadInstanceRef.current = uploader;
      },
      name: "file",
      className: uploadCls,
      onStart: handleStart,
      onProgress: handleProgress,
      onError: handleError,
      onSuccess: handleSuccess,
      disabled: disabled,
      beforeUpload: onBeforeUpload
    }, restProps, {
      children: uploadStatus === 'init' && _jsx("div", {
        className: classNames('as-img-upload-button', {
          'init-disable': disabled
        }),
        children: children
      })
    }))]
  });
};
export default SingleImgUpload;