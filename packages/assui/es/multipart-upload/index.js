var _excluded = ["className", "wrapperClassName", "accept", "method", "fileName", "onSuccess", "onError", "onStart", "cancelUpload", "uploadIcon", "disabled", "getInProgressUploadUrl", "getInitUploadIdAPI", "completeRequest", "chunkSize", "uploadText", "customRequest", "value", "errorCatch"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { CirclePlusFilled, CloseOutlined } from 'a-icons';
import { useMount, useUpdateEffect } from 'ahooks';
import { Progress } from 'antd';
import classNames from 'classnames';
import Upload from 'rc-upload';
import getMultipartUploadHandler from './getMultipartUploadHandler';
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
  var fileNameRef = useRef('');
  var uploadRef = useRef();
  var fileRef = useRef();
  var uploadIdRef = useRef('');
  var _useState = useState('init'),
    uploadStatus = _useState[0],
    setUploadStatus = _useState[1];
  var _useState2 = useState(0),
    uploadPercent = _useState2[0],
    setUploadPercent = _useState2[1];
  var resChunkSize = chunkSize || 1024 * 1024 * 50; // 50MB
  var currentChunk = 0;
  var totalChunks = 0;
  var uploadList = [];
  useUpdateEffect(function () {
    if (value) {
      setUploadStatus('done');
    } else {
      setUploadStatus('init');
    }
  }, [value]);
  useMount(function () {
    fileNameRef.current = fileName;
  });
  useUpdateEffect(function () {
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
  var uploadCls = classNames(className, {
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
      var multipartUploadHandler = getMultipartUploadHandler(resultUrl);
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
  return _jsxs("div", {
    className: classNames('multipart-upload-container', wrapperClassName),
    children: [uploadStatus === 'uploading' && _jsxs("div", {
      className: "multipart-uploading-container",
      children: [_jsxs("div", {
        className: "multipart-package-icon-files",
        children: [uploadIcon, _jsx("div", {
          className: "multipart-upload-file-name",
          title: fileNameRef.current,
          children: fileNameRef.current
        })]
      }), _jsx(Progress, {
        className: "multipart-upload-progress",
        percent: uploadPercent,
        size: "small",
        status: "active"
      }), _jsx("div", {
        className: "multipart-package-upload-close-button",
        onClick: handleCancelUpload,
        children: _jsx(CloseOutlined, {})
      })]
    }), uploadStatus === 'done' && _jsx("div", {
      className: "multipart-upload-container",
      children: _jsxs("div", {
        className: "multipart-upload-icon-files",
        children: [uploadIcon, _jsx("div", {
          className: "multipart-upload-file-name",
          title: fileNameRef.current,
          children: fileNameRef.current
        })]
      })
    }), _jsx(Upload, _extends({
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
      children: uploadStatus === 'init' && _jsxs("div", {
        className: classNames('multipart-uploading-file-container', {
          'multipart-uploading-file-container-disabled': disabled
        }),
        children: [_jsx(CirclePlusFilled, {}), _jsx("span", {
          children: uploadText
        })]
      })
    }))]
  });
};
MultipartUpload.displayName = 'MultipartUpload';
export default MultipartUpload;