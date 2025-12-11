"use strict";

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
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
// SignaturePadComponent.tsx
var react_1 = __importStar(require("react"));
var SignaturePadComponent = (0, react_1.forwardRef)(function (_a, ref) {
  var _b = _a.defaultText,
    defaultText = _b === void 0 ? '请在此处签名' : _b,
    _c = _a.width,
    width = _c === void 0 ? 500 : _c,
    _d = _a.height,
    height = _d === void 0 ? 300 : _d,
    className = _a.className,
    _e = _a.penColor,
    penColor = _e === void 0 ? 'black' : _e,
    _f = _a.backgroundColor,
    backgroundColor = _f === void 0 ? 'white' : _f,
    _g = _a.backgroundTextColor,
    backgroundTextColor = _g === void 0 ? '#ccc' : _g,
    _h = _a.backgroundTextSize,
    backgroundTextSize = _h === void 0 ? '30px' : _h,
    onEnd = _a.onEnd,
    onBegin = _a.onBegin;
  var canvasRef = (0, react_1.useRef)(null);
  var signaturePadRef = (0, react_1.useRef)(null);
  var historyRef = (0, react_1.useRef)([]);
  var currentStepRef = (0, react_1.useRef)(-1);
  // 绘制背景文字
  var drawBackgroundText = (0, react_1.useCallback)(function () {
    if (canvasRef.current) {
      var canvas = canvasRef.current;
      var ctx = canvas.getContext('2d');
      if (ctx) {
        // 保存当前画布状态
        ctx.save();
        // 清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 设置背景
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 设置文字样式
        ctx.font = "".concat(backgroundTextSize, " Arial");
        ctx.fillStyle = backgroundTextColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // 绘制背景文字
        ctx.fillText(defaultText, canvas.width / 2, canvas.height / 2);
        // 恢复画布状态
        ctx.restore();
      }
    }
  }, [defaultText, backgroundColor, backgroundTextColor]);
  // 保存当前状态到历史记录
  var saveToHistory = (0, react_1.useCallback)(function () {
    if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      var dataURL = signaturePadRef.current.toDataURL();
      // 移除当前步骤之后的所有历史记录
      var newHistory = historyRef.current.slice(0, currentStepRef.current + 1);
      newHistory.push(dataURL);
      historyRef.current = newHistory;
      currentStepRef.current = newHistory.length - 1;
    }
  }, []);
  // 清除签名
  var clearSignature = (0, react_1.useCallback)(function () {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      drawBackgroundText();
      // 清除历史记录
      historyRef.current = [];
      currentStepRef.current = -1;
    }
  }, [drawBackgroundText]);
  // 保存签名
  var saveSignature = (0, react_1.useCallback)(function () {
    if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      return signaturePadRef.current;
    }
    return null;
  }, []);
  // 回撤功能
  var undo = (0, react_1.useCallback)(function () {
    // 如果没有历史记录或已经在第一步，则清除
    if (historyRef.current.length === 0 || currentStepRef.current <= 0) {
      clearSignature();
      return true;
    }
    // 回退到上一步
    var prevStep = currentStepRef.current - 1;
    currentStepRef.current = prevStep;
    if (prevStep >= 0 && historyRef.current[prevStep]) {
      // 从历史记录恢复
      var previousDataURL_1 = historyRef.current[prevStep];
      if (canvasRef.current) {
        var ctx_1 = canvasRef.current.getContext('2d');
        if (ctx_1) {
          var img_1 = new Image();
          img_1.onload = function () {
            // 清除画布
            ctx_1.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            // 绘制背景
            ctx_1.fillStyle = backgroundColor;
            ctx_1.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            // 绘制历史图片，确保缩放到正确的尺寸
            ctx_1.drawImage(img_1, 0, 0, img_1.width, img_1.height,
            // 源图片的尺寸
            0, 0, canvasRef.current.width, canvasRef.current.height);
            // 更新 signature_pad 内部状态
            if (signaturePadRef.current) {
              // 使用 fromDataURL 更新 signature_pad 的内部数据
              signaturePadRef.current.fromDataURL(previousDataURL_1, {
                width: canvasRef.current.width,
                height: canvasRef.current.height
              });
            }
          };
          img_1.onerror = function () {
            // 如果图片加载失败，回退到清除
            clearSignature();
          };
          img_1.src = previousDataURL_1;
          return true;
        }
      }
    }
    return false;
  }, [clearSignature, backgroundColor]);
  // 初始化签名板
  (0, react_1.useEffect)(function () {
    if (canvasRef.current) {
      // 动态导入signature_pad
      Promise.resolve().then(function () {
        return __importStar(require('signature_pad'));
      }).then(function (SignaturePadModule) {
        var SignaturePad = SignaturePadModule["default"];
        // 初始化签名板
        signaturePadRef.current = new SignaturePad(canvasRef.current, {
          penColor: penColor,
          backgroundColor: 'transparent',
          // 设置为透明，因为我们自己绘制背景
          minWidth: 1,
          maxWidth: 4
        });
        // 绘制默认背景文字
        drawBackgroundText();
        // 修复：正确添加事件监听
        signaturePadRef.current.onBegin = function () {
          onBegin === null || onBegin === void 0 ? void 0 : onBegin();
        };
        signaturePadRef.current.onEnd = function () {
          setTimeout(function () {
            if (signaturePadRef.current) {
              saveToHistory();
              onEnd === null || onEnd === void 0 ? void 0 : onEnd();
            }
          }, 50);
        };
        signaturePadRef.current.addEventListener('beginStroke', function () {
          console.log('签名开始事件触发');
          onBegin === null || onBegin === void 0 ? void 0 : onBegin();
        });
        signaturePadRef.current.addEventListener('endStroke', function () {
          console.log('签名结束事件触发');
          setTimeout(function () {
            if (signaturePadRef.current) {
              var isPadEmpty = signaturePadRef.current.isEmpty();
              console.log('签名结束时的isEmpty:', isPadEmpty);
              saveToHistory();
              onEnd === null || onEnd === void 0 ? void 0 : onEnd();
            }
          }, 50);
        });
      });
    }
    return function () {
      if (signaturePadRef.current) {
        // 清理事件监听
        signaturePadRef.current.off();
      }
    };
  }, [drawBackgroundText, saveToHistory, onEnd, onBegin, penColor]);
  // 暴露方法给父组件
  (0, react_1.useImperativeHandle)(ref, function () {
    return {
      clearSignature: clearSignature,
      saveSignature: saveSignature,
      isEmpty: function isEmpty() {
        if (signaturePadRef.current) {
          return signaturePadRef.current.isEmpty();
        }
        return true;
      },
      undo: undo
    };
  });
  return react_1["default"].createElement("div", {
    className: "signature-pad-container ".concat(className)
  }, react_1["default"].createElement("canvas", {
    ref: canvasRef,
    width: width,
    height: height,
    style: {
      border: '1px dashed #ccc',
      backgroundColor: backgroundColor,
      height: 'auto'
    }
  }));
});
exports["default"] = SignaturePadComponent;