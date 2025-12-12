var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
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
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from 'react';
import Upload from 'rc-upload';
import Progress from "antd/es/progress";
import Image from "antd/es/image";
import Spin from "antd/es/spin";
import classNames from 'classnames';
import CloseOutlined from "a-icons/es/CloseOutlined";
import Pdf from "a-icons/es/Pdf";
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
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
    _a = props.beforeUpload,
    beforeUpload = _a === void 0 ? initBeforeUpload : _a,
    onError = props.onError,
    disabled = props.disabled,
    pdfName = props.pdfName,
    restProps = __rest(props, ["className", "wrapperClassName", "children", "value", "onStart", "onDeleteUpload", "onFormatResData", "onSuccess", "onCancel", "beforeUpload", "onError", "disabled", "pdfName"]);
  var uploadInstanceRef = React.useRef();
  var fileRef = React.useRef();
  var _b = __read(React.useState(value ? 'done' : 'init'), 2),
    uploadStatus = _b[0],
    setUploadStatus = _b[1];
  var _c = __read(React.useState(value), 2),
    fileUrl = _c[0],
    setFileUrl = _c[1];
  var _d = __read(React.useState(0), 2),
    uploadPercent = _d[0],
    setUploadPercent = _d[1];
  var _e = __read(React.useState(false), 2),
    imageLoading = _e[0],
    setImageLoading = _e[1];
  var _f = __read(React.useState(IMAGE_TYPE), 2),
    fileType = _f[0],
    setFileType = _f[1];
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
      // eslint-disable-next-line global-require
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
  var onBeforeUpload = function onBeforeUpload() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      rest[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
      var resultBefore;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setFileUrl('');
            if (!beforeUpload) return [3 /*break*/, 2];
            return [4 /*yield*/, beforeUpload.apply(void 0, __spreadArray([], __read(rest), false))];
          case 1:
            resultBefore = _a.sent();
            if (isObject(resultBefore)) {
              setFileUrl(getLocalImgURL(resultBefore));
            }
            return [2 /*return*/, resultBefore];
          case 2:
            return [2 /*return*/, true];
        }
      });
    });
  };
  var handleStart = function handleStart(file) {
    fileRef.current = file;
    setUploadPercent(0);
    var isImage = file.type.startsWith('image/');
    setFileType(isImage ? IMAGE_TYPE : PDF_TYPE);
    if (!fileUrl) {
      setFileUrl(getLocalImgURL(file));
    }
    setUploadStatus('uploading');
    onStart && onStart(file);
  };
  var handleProgress = function handleProgress(e) {
    var percent = e.percent;
    setUploadPercent(parseInt("".concat(percent), 10));
  };
  var handleError = function handleError(error, ret, file) {
    setUploadStatus('init');
    onError && onError(error, ret, file);
  };
  var handleSuccess = function handleSuccess(res, file, xhr) {
    var result = onFormatResData ? onFormatResData(res) : res;
    onSuccess && onSuccess(result, file, xhr);
    setUploadStatus('done');
  };
  var uploadCls = classNames(className, {
    'not-upload-init': uploadStatus !== 'init'
  });
  var handleDeleteUpload = function handleDeleteUpload() {
    setUploadStatus('init');
    onDeleteUpload && onDeleteUpload();
  };
  var cancelUpload = function cancelUpload() {
    var _a;
    if (fileRef.current) {
      (_a = uploadInstanceRef.current) === null || _a === void 0 ? void 0 : _a.abort(fileRef.current);
    }
    setUploadStatus('init');
    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
  };
  var cls = classNames('as-img-upload', wrapperClassName);
  var getShowNode = function getShowNode() {
    if (fileType === IMAGE_TYPE) {
      return /*#__PURE__*/React.createElement(Image, {
        wrapperClassName: "as-img-upload-preview",
        src: fileUrl,
        preview: true
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "as-img-upload-pdf-preview",
      onClick: function onClick() {
        return window.open(fileUrl || value, '_blank');
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "as-img-upload-pdf-preview-content"
    }, /*#__PURE__*/React.createElement(Pdf, null), pdfName && /*#__PURE__*/React.createElement("div", {
      className: "as-img-upload-pdf-name"
    }, pdfName)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, uploadStatus === 'uploading' && /*#__PURE__*/React.createElement("div", {
    className: "as-img-upload-content"
  }, getShowNode(), /*#__PURE__*/React.createElement("div", {
    className: "dark"
  }), /*#__PURE__*/React.createElement(Progress, {
    className: "as-img-upload-upload-progress",
    percent: uploadPercent,
    size: "small",
    status: "active"
  }), /*#__PURE__*/React.createElement("div", {
    className: "as-img-upload-close-button",
    onClick: cancelUpload
  }, /*#__PURE__*/React.createElement(CloseOutlined, null))), uploadStatus === 'done' && /*#__PURE__*/React.createElement(Spin, {
    spinning: imageLoading
  }, /*#__PURE__*/React.createElement("div", {
    className: "as-img-upload-content"
  }, getShowNode(), !disabled && /*#__PURE__*/React.createElement("div", {
    className: "as-img-upload-close-button",
    onClick: handleDeleteUpload
  }, /*#__PURE__*/React.createElement(CloseOutlined, null)))), /*#__PURE__*/React.createElement(Upload, __assign({
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
  }, restProps), uploadStatus === 'init' && /*#__PURE__*/React.createElement("div", {
    className: classNames('as-img-upload-button', {
      'init-disable': disabled
    })
  }, children)));
};
export default SingleImgUpload;