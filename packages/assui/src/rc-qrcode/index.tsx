import * as React from 'react';
import QRCode, { QRCodeRenderersOptions, QRCodeSegment } from 'qrcode';
import useMount from 'ahooks/lib/useMount';
import useQrcode from './useQrcode';

export interface RcQRcodeProps {
  /** 生成二维码的值 */
  value: QRCodeSegment[];
  /** qrcode的QRCodeRenderersOptions */
  options: QRCodeRenderersOptions;
  /** 获取HTMLCanvasElement */
  getCanvasInstance: (result: HTMLCanvasElement) => void;
}

const RcQRcode = (props: RcQRcodeProps) => {
  const { value, options } = props;
  const domElRef = React.useRef<HTMLDivElement>(null);

  const defaultOptions = { errorCorrectionLevel: 'H', margin: 0, width: 134 };
  const finallyOptions = { ...defaultOptions, ...options } as QRCodeRenderersOptions;

  useMount(() => {
    QRCode.toCanvas(value, finallyOptions, (err, result: HTMLCanvasElement) => {
      if (err) {
        throw err;
      }

      props?.getCanvasInstance(result);
      domElRef.current?.appendChild(result);
    });
  });

  return <div ref={domElRef} />;
};

RcQRcode.defaultProps = {
  value: '',
  options: {},
};

RcQRcode.useQrcode = useQrcode;

export default RcQRcode;

export { useQrcode };
