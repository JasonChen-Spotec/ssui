// SignaturePadComponent.tsx
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

interface SignaturePadProps {
    /** 默认背景文字 */
  defaultText?: string; 
  /** canvas宽度 */
  width?: number;
  /** canvas高度 */
  height?: number; 
  /** 自定义类名 */
  className?: string;
  /** 画笔颜色 */
  penColor?: string;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 背景文字颜色 */
  backgroundTextColor?: string;

    /** 背景文字大小 */
  backgroundTextSize?: string;
  /** 签名结束回调 */
  onEnd?: () => void;
  /** 签名开始回调 */
  onBegin?: () => void;
}

// 定义暴露给父组件的方法类型
export interface SignaturePadRef {
  clearSignature: () => void;
  saveSignature: () => string | null;
  isEmpty: () => boolean;
  undo: () => boolean; // 返回是否撤销成功
}

const SignaturePadComponent = forwardRef<SignaturePadRef, SignaturePadProps>(
  (
    {
      defaultText = '请在此处签名',
      width = 500,
      height = 300,
      className,
      penColor = 'black',
      backgroundColor = 'white',
      backgroundTextColor = '#ccc',
      backgroundTextSize = '30px',
      onEnd,
      onBegin,
    },
    ref,
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const signaturePadRef = useRef<any>(null);
    const historyRef = useRef<string[]>([]);
    const currentStepRef = useRef(-1);

    // 绘制背景文字
    const drawBackgroundText = useCallback(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          // 保存当前画布状态
          ctx.save();

          // 清除画布
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // 设置背景
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // 设置文字样式
          ctx.font = `${backgroundTextSize} Arial`;
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
    const saveToHistory = useCallback(() => {
      if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
        const dataURL = signaturePadRef.current.toDataURL();

        // 移除当前步骤之后的所有历史记录
        const newHistory = historyRef.current.slice(0, currentStepRef.current + 1);
        newHistory.push(dataURL);

        historyRef.current = newHistory;
        currentStepRef.current = newHistory.length - 1;
      }
    }, []);

    // 清除签名
    const clearSignature = useCallback(() => {
      if (signaturePadRef.current) {
        signaturePadRef.current.clear();
        drawBackgroundText();

        // 清除历史记录
        historyRef.current = [];
        currentStepRef.current = -1;
      }
    }, [drawBackgroundText]);

    // 保存签名
    const saveSignature = useCallback(() => {
      if (signaturePadRef.current && !signaturePadRef.current.isEmpty()) {
        return signaturePadRef.current;
      }
      return null;
    }, []);

    // 回撤功能
    const undo = useCallback(() => {
      // 如果没有历史记录或已经在第一步，则清除
      if (historyRef.current.length === 0 || currentStepRef.current <= 0) {
        clearSignature();
        return true;
      }

      // 回退到上一步
      const prevStep = currentStepRef.current - 1;
      currentStepRef.current = prevStep;

      if (prevStep >= 0 && historyRef.current[prevStep]) {
        // 从历史记录恢复
        const previousDataURL = historyRef.current[prevStep];

        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            const img = new Image();
            img.onload = () => {
              // 清除画布
              ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

              // 绘制背景
              ctx.fillStyle = backgroundColor;
              ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);

              // 绘制历史图片，确保缩放到正确的尺寸
              ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height, // 源图片的尺寸
                0,
                0,
                canvasRef.current!.width,
                canvasRef.current!.height, // 目标canvas的尺寸
              );

              // 更新 signature_pad 内部状态
              if (signaturePadRef.current) {
                // 使用 fromDataURL 更新 signature_pad 的内部数据
                signaturePadRef.current.fromDataURL(previousDataURL, {
                  width: canvasRef.current!.width,
                  height: canvasRef.current!.height,
                });
              }
            };
            img.onerror = () => {
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
    useEffect(() => {
      if (canvasRef.current) {
        // 动态导入signature_pad
        import('signature_pad').then((SignaturePadModule) => {
          const SignaturePad = SignaturePadModule.default;

          // 初始化签名板
          signaturePadRef.current = new SignaturePad(canvasRef.current!, {
            penColor,
            backgroundColor: 'transparent', // 设置为透明，因为我们自己绘制背景
            minWidth: 1,
            maxWidth: 4,
          });

          // 绘制默认背景文字
          drawBackgroundText();

          // 修复：正确添加事件监听
          signaturePadRef.current.onBegin = () => {
            onBegin?.();
          };

          signaturePadRef.current.onEnd = () => {
            setTimeout(() => {
              if (signaturePadRef.current) {
                saveToHistory();
                onEnd?.();
              }
            }, 50);
          };
        signaturePadRef.current.addEventListener('beginStroke', () => {
            console.log('签名开始事件触发');
            onBegin?.();
          });

          signaturePadRef.current.addEventListener('endStroke', () => {
            console.log('签名结束事件触发');
            setTimeout(() => {
              if (signaturePadRef.current) {
                const isPadEmpty = signaturePadRef.current.isEmpty();
                console.log('签名结束时的isEmpty:', isPadEmpty);
                saveToHistory();
                onEnd?.();
              }
            }, 50);
          });
        });
      }

      return () => {
        if (signaturePadRef.current) {
          // 清理事件监听
          signaturePadRef.current.off();
        }
      };
    }, [drawBackgroundText, saveToHistory, onEnd, onBegin, penColor]);

    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
      clearSignature,
      saveSignature,
      isEmpty: () => {
        if (signaturePadRef.current) {
          return signaturePadRef.current.isEmpty();
        }
        return true;
      },
      undo,
    }));

    return (
      <div className={`signature-pad-container ${className}`}>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            border: '1px dashed #ccc',
            backgroundColor,
            height: 'auto',
          }}
        />
      </div>
    );
  },
);

export default SignaturePadComponent;
