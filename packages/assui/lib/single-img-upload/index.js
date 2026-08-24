"use strict";

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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var CloseOutlined_1 = tslib_1.__importDefault(require("a-icons/lib/CloseOutlined"));
var Pdf_1 = tslib_1.__importDefault(require("a-icons/lib/Pdf"));
var image_1 = tslib_1.__importDefault(require("antd/lib/image"));
var progress_1 = tslib_1.__importDefault(require("antd/lib/progress"));
var spin_1 = tslib_1.__importDefault(require("antd/lib/spin"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var isObject_1 = tslib_1.__importDefault(require("lodash/isObject"));
var rc_upload_1 = tslib_1.__importDefault(require("rc-upload"));
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
      if ((0, isFunction_1["default"])(heic2Jpeg)) {
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
          if ((0, isObject_1["default"])(resultBefore)) {
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
  var uploadCls = (0, classnames_1["default"])(className, {
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
  var cls = (0, classnames_1["default"])('as-img-upload', wrapperClassName);
  var getShowNode = function getShowNode() {
    if (fileType === IMAGE_TYPE) {
      return (0, jsx_runtime_1.jsx)(image_1["default"], {
        wrapperClassName: "as-img-upload-preview",
        src: fileUrl,
        preview: true
      });
    }
    return (0, jsx_runtime_1.jsx)("div", {
      className: "as-img-upload-pdf-preview",
      onClick: function onClick() {
        return window.open(fileUrl || value, '_blank');
      },
      children: (0, jsx_runtime_1.jsxs)("div", {
        className: "as-img-upload-pdf-preview-content",
        children: [(0, jsx_runtime_1.jsx)(Pdf_1["default"], {}), pdfName && (0, jsx_runtime_1.jsx)("div", {
          className: "as-img-upload-pdf-name",
          children: pdfName
        })]
      })
    });
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    className: cls,
    children: [uploadStatus === 'uploading' && (0, jsx_runtime_1.jsxs)("div", {
      className: "as-img-upload-content",
      children: [getShowNode(), (0, jsx_runtime_1.jsx)("div", {
        className: "dark"
      }), (0, jsx_runtime_1.jsx)(progress_1["default"], {
        className: "as-img-upload-upload-progress",
        percent: uploadPercent,
        size: "small",
        status: "active"
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "as-img-upload-close-button",
        onClick: cancelUpload,
        children: (0, jsx_runtime_1.jsx)(CloseOutlined_1["default"], {})
      })]
    }), uploadStatus === 'done' && (0, jsx_runtime_1.jsx)(spin_1["default"], {
      spinning: imageLoading,
      children: (0, jsx_runtime_1.jsxs)("div", {
        className: "as-img-upload-content",
        children: [getShowNode(), !disabled && (0, jsx_runtime_1.jsx)("div", {
          className: "as-img-upload-close-button",
          onClick: handleDeleteUpload,
          children: (0, jsx_runtime_1.jsx)(CloseOutlined_1["default"], {})
        })]
      })
    }), (0, jsx_runtime_1.jsx)(rc_upload_1["default"], _extends({
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
      children: uploadStatus === 'init' && (0, jsx_runtime_1.jsx)("div", {
        className: (0, classnames_1["default"])('as-img-upload-button', {
          'init-disable': disabled
        }),
        children: children
      })
    }))]
  });
};
exports["default"] = SingleImgUpload;