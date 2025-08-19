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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
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
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create((typeof Iterator === 'function' ? Iterator : Object).prototype);
    return (
      (g.next = verb(0)),
      (g['throw'] = verb(1)),
      (g['return'] = verb(2)),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _)) {
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false,
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
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true,
      };
    }
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
import Modal from 'antd/es/modal';
import Slider from 'antd/es/slider';
import * as React from 'react';
import EasyCrop from './EasyCrop';
import getCroppedImg from './getCroppedImg';
import './style/index.less';
var noop = function noop() {};
var ZOOM_STEP = 0.1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var ROTATE_STEP = 1;
var ImgCrop = function ImgCrop(props) {
  var _a = props.aspect,
    aspect = _a === void 0 ? 1 : _a,
    _b = props.shape,
    shape = _b === void 0 ? 'rect' : _b,
    _c = props.grid,
    grid = _c === void 0 ? false : _c,
    _d = props.quality,
    quality = _d === void 0 ? 1 : _d,
    _e = props.zoom,
    zoom = _e === void 0 ? true : _e,
    _f = props.rotate,
    rotate = _f === void 0 ? false : _f,
    _g = props.minZoom,
    minZoom = _g === void 0 ? 1 : _g,
    _h = props.maxZoom,
    maxZoom = _h === void 0 ? 3 : _h,
    _j = props.fillColor,
    fillColor = _j === void 0 ? 'rgba(0,0,0,0)' : _j,
    _k = props.prefix,
    prefix = _k === void 0 ? 'ant' : _k,
    modalTitle = props.modalTitle,
    modalWidth = props.modalWidth,
    modalOk = props.modalOk,
    modalCancel = props.modalCancel,
    _l = props.closable,
    closable = _l === void 0 ? true : _l,
    beforeCrop = props.beforeCrop,
    zipImg = props.zipImg,
    children = props.children,
    cropperProps = props.cropperProps;
  var pkg = ''.concat(prefix, '-img-crop');
  var MEDIA_CLASS = ''.concat(pkg, '-media');
  var hasZoom = zoom === true;
  var hasRotate = rotate === true;
  var _m = __read(React.useState(''), 2),
    src = _m[0],
    setSrc = _m[1];
  var _o = __read(React.useState(1), 2),
    zoomVal = _o[0],
    setZoomVal = _o[1];
  var _p = __read(React.useState(0), 2),
    rotateVal = _p[0],
    setRotateVal = _p[1];
  var beforeUploadRef = React.useRef();
  var fileRef = React.useRef();
  var resolveRef = React.useRef(noop);
  var rejectRef = React.useRef(noop);
  var cropPixelsRef = React.useRef();
  /**
   * Upload
   */
  var renderUpload = React.useCallback(
    function () {
      var upload = Array.isArray(children) ? children[0] : children;
      var _a = upload.props,
        beforeUpload = _a.beforeUpload,
        accept = _a.accept,
        restUploadProps = __rest(_a, ['beforeUpload', 'accept']);
      beforeUploadRef.current = beforeUpload;
      return __assign(__assign({}, upload), {
        props: __assign(__assign({}, restUploadProps), {
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
          },
        }),
      });
    },
    [beforeCrop, children],
  );
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
  var subZoomVal = React.useCallback(
    function () {
      if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
    },
    [isMinZoom, zoomVal],
  );
  var addZoomVal = React.useCallback(
    function () {
      if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
    },
    [isMaxZoom, zoomVal],
  );
  var subRotateVal = React.useCallback(
    function () {
      if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
    },
    [isMinRotate, rotateVal],
  );
  var addRotateVal = React.useCallback(
    function () {
      if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
    },
    [isMaxRotate, rotateVal],
  );
  /**
   * Modal
   */
  var modalProps = React.useMemo(
    function () {
      var obj = {
        width: modalWidth,
        okText: modalOk,
        cancelText: modalCancel,
        closable: closable,
      };
      return obj;
    },
    [modalCancel, modalOk, modalWidth],
  );
  var onClose = React.useCallback(function () {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);
  var onOk = React.useCallback(
    function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var naturalImg,
          naturalWidth,
          naturalHeight,
          canvas,
          ctx,
          maxLen,
          halfMax,
          left,
          top,
          maxImgData,
          _a,
          width,
          height,
          x,
          y,
          _b,
          type,
          name,
          uid;
        return __generator(this, function (_c) {
          onClose();
          naturalImg = document.querySelector('.'.concat(MEDIA_CLASS));
          (naturalWidth = naturalImg.naturalWidth),
            (naturalHeight = naturalImg.naturalHeight);
          canvas = document.createElement('canvas');
          ctx = canvas.getContext('2d');
          maxLen = Math.sqrt(Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2));
          canvas.width = maxLen;
          canvas.height = maxLen;
          // rotate the image
          if (hasRotate && rotateVal > 0 && rotateVal < 360) {
            halfMax = maxLen / 2;
            ctx === null || ctx === void 0 ? void 0 : ctx.translate(halfMax, halfMax);
            ctx === null || ctx === void 0
              ? void 0
              : ctx.rotate((rotateVal * Math.PI) / 180);
            ctx === null || ctx === void 0 ? void 0 : ctx.translate(-halfMax, -halfMax);
          }
          ctx.fillStyle = fillColor;
          ctx === null || ctx === void 0
            ? void 0
            : ctx.fillRect(0, 0, canvas.width, canvas.height);
          left = (maxLen - naturalWidth) / 2;
          top = (maxLen - naturalHeight) / 2;
          ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(naturalImg, left, top);
          maxImgData =
            ctx === null || ctx === void 0
              ? void 0
              : ctx.getImageData(0, 0, maxLen, maxLen);
          (_a = cropPixelsRef.current),
            (width = _a.width),
            (height = _a.height),
            (x = _a.x),
            (y = _a.y);
          canvas.width = width;
          canvas.height = height;
          ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y));
          (_b = fileRef.current), (type = _b.type), (name = _b.name), (uid = _b.uid);
          canvas.toBlob(
            function (blob) {
              return __awaiter(void 0, void 0, void 0, function () {
                var newFile, url, imgUrl, fileObj, res, passedFile, fileType, err_1;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      newFile = new File([blob], name, {
                        type: type,
                      });
                      if (!zipImg) return [3 /*break*/, 2];
                      url = window.URL || window.webkitURL;
                      imgUrl = url.createObjectURL(newFile);
                      return [4 /*yield*/, getCroppedImg(imgUrl, zipImg, name, type)];
                    case 1:
                      fileObj = _a.sent().fileObj;
                      newFile = fileObj;
                      _a.label = 2;
                    case 2:
                      newFile.uid = uid;
                      if (typeof beforeUploadRef.current !== 'function')
                        return [2 /*return*/, resolveRef.current(newFile)];
                      res = beforeUploadRef.current(newFile, [newFile]);
                      if (!(typeof res !== 'boolean' && !res)) return [3 /*break*/, 3];
                      console.error('beforeUpload must return a boolean or Promise');
                      return [3 /*break*/, 7];
                    case 3:
                      if (res === true)
                        return [2 /*return*/, resolveRef.current(newFile)];
                      if (res === false)
                        return [2 /*return*/, rejectRef.current('not upload')];
                      if (!(res && typeof res.then === 'function'))
                        return [3 /*break*/, 7];
                      _a.label = 4;
                    case 4:
                      _a.trys.push([4, 6, , 7]);
                      return [4 /*yield*/, res];
                    case 5:
                      passedFile = _a.sent();
                      fileType = Object.prototype.toString.call(passedFile);
                      if (fileType === '[object File]' || fileType === '[object Blob]')
                        newFile = passedFile;
                      resolveRef.current(newFile);
                      return [3 /*break*/, 7];
                    case 6:
                      err_1 = _a.sent();
                      rejectRef.current(err_1);
                      return [3 /*break*/, 7];
                    case 7:
                      return [2 /*return*/, null];
                  }
                });
              });
            },
            type,
            quality,
          );
          return [2 /*return*/];
        });
      });
    },
    [hasRotate, onClose, quality, rotateVal],
  );
  var renderComponent = function renderComponent(titleOfModal) {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      renderUpload(),
      src &&
        /*#__PURE__*/ React.createElement(
          Modal,
          __assign(
            {
              open: true,
              wrapClassName: ''.concat(pkg, '-modal'),
              title: titleOfModal,
              onOk: onOk,
              onCancel: onClose,
              maskClosable: false,
              destroyOnClose: true,
              centered: true,
            },
            modalProps,
          ),
          /*#__PURE__*/ React.createElement(
            EasyCrop,
            __assign(
              {
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
                  containerClassName: ''.concat(pkg, '-container'),
                  mediaClassName: MEDIA_CLASS,
                },
              },
              cropperProps,
            ),
          ),
          hasZoom &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: ''.concat(pkg, '-control zoom'),
              },
              /*#__PURE__*/ React.createElement(
                'button',
                {
                  type: 'button',
                  onClick: subZoomVal,
                  disabled: isMinZoom,
                },
                '\uFF0D',
              ),
              /*#__PURE__*/ React.createElement(Slider, {
                min: minZoom,
                max: maxZoom,
                step: ZOOM_STEP,
                value: zoomVal,
                onChange: setZoomVal,
              }),
              /*#__PURE__*/ React.createElement(
                'button',
                {
                  type: 'button',
                  onClick: addZoomVal,
                  disabled: isMaxZoom,
                },
                '\uFF0B',
              ),
            ),
          hasRotate &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: ''.concat(pkg, '-control rotate'),
              },
              /*#__PURE__*/ React.createElement(
                'button',
                {
                  type: 'button',
                  onClick: subRotateVal,
                  disabled: isMinRotate,
                },
                '\u21BA',
              ),
              /*#__PURE__*/ React.createElement(Slider, {
                min: MIN_ROTATE,
                max: MAX_ROTATE,
                step: ROTATE_STEP,
                value: rotateVal,
                onChange: setRotateVal,
              }),
              /*#__PURE__*/ React.createElement(
                'button',
                {
                  type: 'button',
                  onClick: addRotateVal,
                  disabled: isMaxRotate,
                },
                '\u21BB',
              ),
            ),
        ),
    );
  };
  return renderComponent(modalTitle);
};
ImgCrop.getCroppedImg = getCroppedImg;
export default ImgCrop;
