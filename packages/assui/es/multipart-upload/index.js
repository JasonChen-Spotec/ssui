var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
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
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
import { CirclePlusFilled, CloseOutlined } from 'a-icons';
import { useMount, useUpdateEffect } from 'ahooks';
import { Progress } from 'antd';
import classNames from 'classnames';
import Upload from 'rc-upload';
import React, { useRef, useState } from 'react';
import getMultipartUploadHandler from './getMultipartUploadHandler';
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
    restProps = __rest(props, [
      'className',
      'wrapperClassName',
      'accept',
      'method',
      'fileName',
      'onSuccess',
      'onError',
      'onStart',
      'cancelUpload',
      'uploadIcon',
      'disabled',
      'getInProgressUploadUrl',
      'getInitUploadIdAPI',
      'completeRequest',
      'chunkSize',
      'uploadText',
      'customRequest',
      'value',
      'errorCatch',
    ]);
  var fileNameRef = useRef('');
  var uploadRef = useRef();
  var fileRef = useRef();
  var uploadIdRef = useRef('');
  var _b = __read(useState('init'), 2),
    uploadStatus = _b[0],
    setUploadStatus = _b[1];
  var _c = __read(useState(0), 2),
    uploadPercent = _c[0],
    setUploadPercent = _c[1];
  var resChunkSize = chunkSize || 1024 * 1024 * 50; // 50MB
  var currentChunk = 0;
  var totalChunks = 0;
  var uploadList = [];
  useUpdateEffect(
    function () {
      if (value) {
        setUploadStatus('done');
      } else {
        setUploadStatus('init');
      }
    },
    [value],
  );
  useMount(function () {
    fileNameRef.current = fileName;
  });
  useUpdateEffect(
    function () {
      fileNameRef.current = fileName;
    },
    [fileName],
  );
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
  var uploadCls = classNames(className, {
    'not-upload-init': uploadStatus !== 'init',
  });
  var handleCancelUpload = function handleCancelUpload() {
    var _a;
    if (fileRef.current) {
      (_a = uploadRef.current) === null || _a === void 0
        ? void 0
        : _a.abort(fileRef.current);
      setUploadStatus('init');
      cancelUpload && cancelUpload();
    }
  };
  var progress = function progress(progressNumber) {
    var currentProgressNumber = parseInt(
      ''.concat((progressNumber * (currentChunk + 1)) / totalChunks),
      10,
    );
    if (currentProgressNumber >= (currentChunk / totalChunks) * 100) {
      setUploadPercent(currentProgressNumber);
    }
  };
  var uploadNextChunk = function uploadNextChunk() {
    /** 第二步 获取url 进行分片上传  */
    if (fileRef.current) {
      var resultUrl = getInProgressUploadUrl({
        fileName: fileNameRef.current,
        partNumber: currentChunk + 1,
        uploadId: uploadIdRef.current,
      });
      var multipartUploadHandler = getMultipartUploadHandler(resultUrl);
      var start = currentChunk * resChunkSize;
      var end = Math.min(fileRef.current.size, start + resChunkSize);
      var chunk = fileRef.current.slice(start, end);
      multipartUploadHandler(chunk, progress)
        .then(function (res) {
          uploadList.push(res);
          currentChunk += 1;
          if (currentChunk < totalChunks) {
            uploadNextChunk();
          } else {
            /** 分片上传完成 进行文件合并 上传完成  */
            completeRequest({
              fileName: fileNameRef.current,
              uploadId: uploadIdRef.current,
              list: uploadList,
            }).then(function (fileUrl) {
              setUploadStatus('done');
              onSuccess && onSuccess(fileUrl, fileNameRef.current);
            });
          }
        })
        ['catch'](function (error) {
          errorCatch && errorCatch(error);
        });
    }
  };
  var customMultipartRequest = function customMultipartRequest() {
    if (fileRef.current) {
      totalChunks = Math.ceil(fileRef.current.size / resChunkSize);
      /** 第一步 获取ID  */
      getInitUploadIdAPI({
        fileName: fileNameRef.current,
      }).then(function (id) {
        uploadIdRef.current = id;
        uploadNextChunk();
      });
    }
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames('multipart-upload-container', wrapperClassName),
    },
    uploadStatus === 'uploading' &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'multipart-uploading-container',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'multipart-package-icon-files',
          },
          uploadIcon,
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'multipart-upload-file-name',
              title: fileNameRef.current,
            },
            fileNameRef.current,
          ),
        ),
        /*#__PURE__*/ React.createElement(Progress, {
          className: 'multipart-upload-progress',
          percent: uploadPercent,
          size: 'small',
          status: 'active',
        }),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'multipart-package-upload-close-button',
            onClick: handleCancelUpload,
          },
          /*#__PURE__*/ React.createElement(CloseOutlined, null),
        ),
      ),
    uploadStatus === 'done' &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'multipart-upload-container',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'multipart-upload-icon-files',
          },
          uploadIcon,
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'multipart-upload-file-name',
              title: fileNameRef.current,
            },
            fileNameRef.current,
          ),
        ),
      ),
    /*#__PURE__*/ React.createElement(
      Upload,
      __assign(
        {
          ref: function ref(uploader) {
            uploadRef.current = uploader;
          },
          name: 'file',
          accept: accept,
          disabled: disabled,
          method: method,
          className: uploadCls,
          onStart: handleStart,
          onError: handleError,
          customRequest: customMultipartRequest,
        },
        restProps,
      ),
      uploadStatus === 'init' &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classNames('multipart-uploading-file-container', {
              'multipart-uploading-file-container-disabled': disabled,
            }),
          },
          /*#__PURE__*/ React.createElement(CirclePlusFilled, null),
          /*#__PURE__*/ React.createElement('span', null, uploadText),
        ),
    ),
  );
};
MultipartUpload.displayName = 'MultipartUpload';
export default MultipartUpload;
