import * as React from 'react';
import type { QRCodeRenderersOptions, QRCodeSegment } from 'qrcode';
import QRCode from 'qrcode';
import useMount from 'ahooks/lib/useMount';
import useQrcode from './useQrcode';

export interface RcQrcodeProps {
  /** 生成二维码的值 */
  value?: QRCodeSegment[] | string;
  /** qrcode的QRCodeRenderersOptions */
  options?: QRCodeRenderersOptions;
  /** 获取HTMLCanvasElement */
  getCanvasInstance?: (result: HTMLCanvasElement) => void;
}

const RcQrcode = (props: RcQrcodeProps) => {
  const { value = '', options = {}, getCanvasInstance } = props;
  const domElRef = React.useRef<HTMLDivElement>(null);

  const defaultOptions = { errorCorrectionLevel: 'H', margin: 0, width: 134 };
  const finallyOptions = { ...defaultOptions, ...options } as QRCodeRenderersOptions;

  useMount(() => {
    QRCode.toCanvas(value, finallyOptions, (err, result: HTMLCanvasElement) => {
      if (err) {
        throw err;
      }

      getCanvasInstance && getCanvasInstance(result);
      domElRef.current?.appendChild(result);
    });
  });

  return <div ref={domElRef} />;
};

RcQrcode.useQrcode = useQrcode;

export default RcQrcode;

export { useQrcode };
