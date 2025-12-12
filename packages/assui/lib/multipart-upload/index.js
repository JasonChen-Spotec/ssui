"use strict";

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
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importStar(require("react"));
var rc_upload_1 = __importDefault(require("rc-upload"));
var ahooks_1 = require("ahooks");
var classnames_1 = __importDefault(require("classnames"));
var antd_1 = require("antd");
var a_icons_1 = require("a-icons");
var getMultipartUploadHandler_1 = __importDefault(require("./getMultipartUploadHandler"));
var MultipartUpload = function MultipartUpload(props) {
  var className = props.className,
    wrapperClassName = props.wrapperClassName,
    accept = props.accept,
    method = props.method,
    _a = props.fileName,
    fileName = _a === void 0 ? '' : _a,
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
    restProps = __rest(props, ["className", "wrapperClassName", "accept", "method", "fileName", "onSuccess", "onError", "onStart", "cancelUpload", "uploadIcon", "disabled", "getInProgressUploadUrl", "getInitUploadIdAPI", "completeRequest", "chunkSize", "uploadText", "customRequest", "value", "errorCatch"]);
  var fileNameRef = (0, react_1.useRef)('');
  var uploadRef = (0, react_1.useRef)();
  var fileRef = (0, react_1.useRef)();
  var uploadIdRef = (0, react_1.useRef)('');
  var _b = __read((0, react_1.useState)('init'), 2),
    uploadStatus = _b[0],
    setUploadStatus = _b[1];
  var _c = __read((0, react_1.useState)(0), 2),
    uploadPercent = _c[0],
    setUploadPercent = _c[1];
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
    onStart && onStart(file);
  };
  var handleError = function handleError(error, ret, file) {
    setUploadStatus('init');
    onError && onError(error, ret, file);
  };
  var uploadCls = (0, classnames_1["default"])(className, {
    'not-upload-init': uploadStatus !== 'init'
  });
  var handleCancelUpload = function handleCancelUpload() {
    var _a;
    if (fileRef.current) {
      (_a = uploadRef.current) === null || _a === void 0 ? void 0 : _a.abort(fileRef.current);
      setUploadStatus('init');
      cancelUpload && cancelUpload();
    }
  };
  var progress = function progress(progressNumber) {
    var currentProgressNumber = parseInt("".concat(progressNumber * (currentChunk + 1) / totalChunks), 10);
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
            onSuccess && onSuccess(fileUrl, fileNameRef.current);
          });
        }
      })["catch"](function (error) {
        errorCatch && errorCatch(error);
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
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('multipart-upload-container', wrapperClassName)
  }, uploadStatus === 'uploading' && react_1["default"].createElement("div", {
    className: "multipart-uploading-container"
  }, react_1["default"].createElement("div", {
    className: "multipart-package-icon-files"
  }, uploadIcon, react_1["default"].createElement("div", {
    className: "multipart-upload-file-name",
    title: fileNameRef.current
  }, fileNameRef.current)), react_1["default"].createElement(antd_1.Progress, {
    className: "multipart-upload-progress",
    percent: uploadPercent,
    size: "small",
    status: "active"
  }), react_1["default"].createElement("div", {
    className: "multipart-package-upload-close-button",
    onClick: handleCancelUpload
  }, react_1["default"].createElement(a_icons_1.CloseOutlined, null))), uploadStatus === 'done' && react_1["default"].createElement("div", {
    className: "multipart-upload-container"
  }, react_1["default"].createElement("div", {
    className: "multipart-upload-icon-files"
  }, uploadIcon, react_1["default"].createElement("div", {
    className: "multipart-upload-file-name",
    title: fileNameRef.current
  }, fileNameRef.current))), react_1["default"].createElement(rc_upload_1["default"], __assign({
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
  }, restProps), uploadStatus === 'init' && react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('multipart-uploading-file-container', {
      'multipart-uploading-file-container-disabled': disabled
    })
  }, react_1["default"].createElement(a_icons_1.CirclePlusFilled, null), react_1["default"].createElement("span", null, uploadText))));
};
MultipartUpload.displayName = 'MultipartUpload';
exports["default"] = MultipartUpload;