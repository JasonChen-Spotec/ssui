"use strict";

var _excluded = ["className", "wrapperClassName", "accept", "method", "fileName", "onSuccess", "onError", "onStart", "cancelUpload", "uploadIcon", "disabled", "getInProgressUploadUrl", "getInitUploadIdAPI", "completeRequest", "chunkSize", "uploadText", "customRequest", "value", "errorCatch"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var a_icons_1 = require("a-icons");
var ahooks_1 = require("ahooks");
var antd_1 = require("antd");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var rc_upload_1 = tslib_1.__importDefault(require("rc-upload"));
var getMultipartUploadHandler_1 = tslib_1.__importDefault(require("./getMultipartUploadHandler"));
var MultipartUpload = function MultipartUpload(props) {
  var className = props.className,
    wrapperClassName = props.wrapperClassName,
    accept = props.accept,
    method = props.method,
    _props$fileName = props.fileName,
    fileName = _props$fileName === void 0 ? '' : _props$fileName,
    onSuccess = props.onSuccess,
    onError = props.onError,
    onStart = props.onStart,
    cancelUpload = props.cancelUpload,
    uploadIcon = props.uploadIcon,
    disabled = props.disabled,
    getInProgressUploadUrl = props.getInProgressUploadUrl,
    getInitUploadIdAPI = props.getInitUploadIdAPI,
    completeRequest = props.completeRequest,
    chunkSize = props.chunkSize,
    uploadText = props.uploadText,
    customRequest = props.customRequest,
    value = props.value,
    errorCatch = props.errorCatch,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var fileNameRef = (0, react_1.useRef)('');
  var uploadRef = (0, react_1.useRef)();
  var fileRef = (0, react_1.useRef)();
  var uploadIdRef = (0, react_1.useRef)('');
  var _ref = (0, react_1.useState)('init'),
    uploadStatus = _ref[0],
    setUploadStatus = _ref[1];
  var _ref2 = (0, react_1.useState)(0),
    uploadPercent = _ref2[0],
    setUploadPercent = _ref2[1];
  var resChunkSize = chunkSize || 1024 * 1024 * 50; // 50MB
  var currentChunk = 0;
  var totalChunks = 0;
  var uploadList = [];
  (0, ahooks_1.useUpdateEffect)(function () {
    if (value) {
      setUploadStatus('done');
    } else {
      setUploadStatus('init');
    }
  }, [value]);
  (0, ahooks_1.useMount)(function () {
    fileNameRef.current = fileName;
  });
  (0, ahooks_1.useUpdateEffect)(function () {
    fileNameRef.current = fileName;
  }, [fileName]);
  var handleStart = function handleStart(file) {
    fileRef.current = file;
    setUploadPercent(0);
    fileNameRef.current = file.name;
    totalChunks = Math.ceil(fileRef.current.size / resChunkSize);
    setUploadStatus('uploading');
    onStart == null || onStart(file);
  };
  var handleError = function handleError(error, ret, file) {
    setUploadStatus('init');
    onError == null || onError(error, ret, file);
  };
  var uploadCls = (0, classnames_1["default"])(className, {
    'not-upload-init': uploadStatus !== 'init'
  });
  var handleCancelUpload = function handleCancelUpload() {
    if (fileRef.current) {
      var _uploadRef$current;
      (_uploadRef$current = uploadRef.current) == null || _uploadRef$current.abort(fileRef.current);
      setUploadStatus('init');
      cancelUpload == null || cancelUpload();
    }
  };
  var progress = function progress(progressNumber) {
    var currentProgressNumber = parseInt("" + progressNumber * (currentChunk + 1) / totalChunks, 10);
    if (currentProgressNumber >= currentChunk / totalChunks * 100) {
      setUploadPercent(currentProgressNumber);
    }
  };
  var _uploadNextChunk = function uploadNextChunk() {
    /** 第二步 获取url 进行分片上传  */
    if (fileRef.current) {
      var resultUrl = getInProgressUploadUrl({
        fileName: fileNameRef.current,
        partNumber: currentChunk + 1,
        uploadId: uploadIdRef.current
      });
      var multipartUploadHandler = (0, getMultipartUploadHandler_1["default"])(resultUrl);
      var start = currentChunk * resChunkSize;
      var end = Math.min(fileRef.current.size, start + resChunkSize);
      var chunk = fileRef.current.slice(start, end);
      multipartUploadHandler(chunk, progress).then(function (res) {
        uploadList.push(res);
        currentChunk += 1;
        if (currentChunk < totalChunks) {
          _uploadNextChunk();
        } else {
          /** 分片上传完成 进行文件合并 上传完成  */
          completeRequest({
            fileName: fileNameRef.current,
            uploadId: uploadIdRef.current,
            list: uploadList
          }).then(function (fileUrl) {
            setUploadStatus('done');
            onSuccess == null || onSuccess(fileUrl, fileNameRef.current);
          });
        }
      })["catch"](function (error) {
        errorCatch == null || errorCatch(error);
      });
    }
  };
  var customMultipartRequest = function customMultipartRequest() {
    if (fileRef.current) {
      totalChunks = Math.ceil(fileRef.current.size / resChunkSize);
      /** 第一步 获取ID  */
      getInitUploadIdAPI({
        fileName: fileNameRef.current
      }).then(function (id) {
        uploadIdRef.current = id;
        _uploadNextChunk();
      });
    }
  };
  return (0, jsx_runtime_1.jsxs)("div", {
    className: (0, classnames_1["default"])('multipart-upload-container', wrapperClassName),
    children: [uploadStatus === 'uploading' && (0, jsx_runtime_1.jsxs)("div", {
      className: "multipart-uploading-container",
      children: [(0, jsx_runtime_1.jsxs)("div", {
        className: "multipart-package-icon-files",
        children: [uploadIcon, (0, jsx_runtime_1.jsx)("div", {
          className: "multipart-upload-file-name",
          title: fileNameRef.current,
          children: fileNameRef.current
        })]
      }), (0, jsx_runtime_1.jsx)(antd_1.Progress, {
        className: "multipart-upload-progress",
        percent: uploadPercent,
        size: "small",
        status: "active"
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "multipart-package-upload-close-button",
        onClick: handleCancelUpload,
        children: (0, jsx_runtime_1.jsx)(a_icons_1.CloseOutlined, {})
      })]
    }), uploadStatus === 'done' && (0, jsx_runtime_1.jsx)("div", {
      className: "multipart-upload-container",
      children: (0, jsx_runtime_1.jsxs)("div", {
        className: "multipart-upload-icon-files",
        children: [uploadIcon, (0, jsx_runtime_1.jsx)("div", {
          className: "multipart-upload-file-name",
          title: fileNameRef.current,
          children: fileNameRef.current
        })]
      })
    }), (0, jsx_runtime_1.jsx)(rc_upload_1["default"], _extends({
      ref: function ref(uploader) {
        uploadRef.current = uploader;
      },
      name: "file",
      accept: accept,
      disabled: disabled,
      method: method,
      className: uploadCls,
      onStart: handleStart,
      onError: handleError,
      customRequest: customMultipartRequest
    }, restProps, {
      children: uploadStatus === 'init' && (0, jsx_runtime_1.jsxs)("div", {
        className: (0, classnames_1["default"])('multipart-uploading-file-container', {
          'multipart-uploading-file-container-disabled': disabled
        }),
        children: [(0, jsx_runtime_1.jsx)(a_icons_1.CirclePlusFilled, {}), (0, jsx_runtime_1.jsx)("span", {
          children: uploadText
        })]
      })
    }))]
  });
};
MultipartUpload.displayName = 'MultipartUpload';
exports["default"] = MultipartUpload;