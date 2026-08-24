import { jsx as _jsx } from "react/jsx-runtime";
// SignaturePadComponent.tsx
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
var SignaturePadComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$defaultText = _ref.defaultText,
    defaultText = _ref$defaultText === void 0 ? '请在此处签名' : _ref$defaultText,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 500 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 300 : _ref$height,
    className = _ref.className,
    _ref$penColor = _ref.penColor,
    penColor = _ref$penColor === void 0 ? 'black' : _ref$penColor,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? 'white' : _ref$backgroundColor,
    _ref$backgroundTextCo = _ref.backgroundTextColor,
    backgroundTextColor = _ref$backgroundTextCo === void 0 ? '#ccc' : _ref$backgroundTextCo,
    _ref$backgroundTextSi = _ref.backgroundTextSize,
    backgroundTextSize = _ref$backgroundTextSi === void 0 ? '30px' : _ref$backgroundTextSi,
    onEnd = _ref.onEnd,
    onBegin = _ref.onBegin;
  var canvasRef = useRef(null);
  var signaturePadRef = useRef(null);
  var historyRef = useRef([]);
  var currentStepRef = useRef(-1);
  // 绘制背景文字
  var drawBackgroundText = useCallback(function () {
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
        ctx.font = backgroundTextSize + " Arial";
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
  var saveToHistory = useCallback(function () {
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
  var clearSignature = useCallback(function () {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      drawBackgroundText();
      // 清除历史记录
      historyRef.current = [];
      currentStepRef.current = -1;
    }
  }, [drawBackgroundText]);
  // 保存签名
  var saveSignature = useCallback(function () {
    if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
      return signaturePadRef.current;
    }
    return null;
  }, []);
  // 回撤功能
  var undo = useCallback(function () {
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
      var previousDataURL = historyRef.current[prevStep];
      if (canvasRef.current) {
        var ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          var img = new Image();
          img.onload = function () {
            // 清除画布
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            // 绘制背景
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            // 绘制历史图片，确保缩放到正确的尺寸
            ctx.drawImage(img, 0, 0, img.width, img.height,
            // 源图片的尺寸
            0, 0, canvasRef.current.width, canvasRef.current.height);
            // 更新 signature_pad 内部状态
            if (signaturePadRef.current) {
              // 使用 fromDataURL 更新 signature_pad 的内部数据
              signaturePadRef.current.fromDataURL(previousDataURL, {
                width: canvasRef.current.width,
                height: canvasRef.current.height
              });
            }
          };
          img.onerror = function () {
            // 如果图片加载失败，回退到清除
            clearSignature();
          };
          img.src = previousDataURL;
          return true;
        }
      }
    }
    return false;
  }, [clearSignature, backgroundColor]);
  // 初始化签名板
  useEffect(function () {
    if (canvasRef.current) {
      // 动态导入signature_pad
      import('signature_pad').then(function (SignaturePadModule) {
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
          onBegin == null || onBegin();
        };
        signaturePadRef.current.onEnd = function () {
          setTimeout(function () {
            if (signaturePadRef.current) {
              saveToHistory();
              onEnd == null || onEnd();
            }
          }, 50);
        };
        signaturePadRef.current.addEventListener('beginStroke', function () {
          console.log('签名开始事件触发');
          onBegin == null || onBegin();
        });
        signaturePadRef.current.addEventListener('endStroke', function () {
          console.log('签名结束事件触发');
          setTimeout(function () {
            if (signaturePadRef.current) {
              var isPadEmpty = signaturePadRef.current.isEmpty();
              console.log('签名结束时的isEmpty:', isPadEmpty);
              saveToHistory();
              onEnd == null || onEnd();
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
  useImperativeHandle(ref, function () {
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
  return _jsx("div", {
    className: "signature-pad-container " + className,
    children: _jsx("canvas", {
      ref: canvasRef,
      width: width,
      height: height,
      style: {
        border: '1px dashed #ccc',
        backgroundColor: backgroundColor,
        height: 'auto'
      }
    })
  });
});
export default SignaturePadComponent;