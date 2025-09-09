import type { QRCodeRenderersOptions, QRCodeSegment } from 'qrcode';
import QRCode from 'qrcode';
import useQrcode from './useQrcode';
export interface RcQrcodeProps {
    /** 生成二维码的值 */
    value?: QRCodeSegment[] | string;
    /** qrcode的QRCodeRenderersOptions */
    options?: QRCodeRenderersOptions;
    /** 获取HTMLCanvasElement */
    getCanvasInstance?: (result: HTMLCanvasElement) => void;
}
declare const RcQrcode: {
    (props: RcQrcodeProps): JSX.Element;
    useQrcode: (value: string | QRCodeSegment[], options?: QRCode.QRCodeToDataURLOptions) => string;
};
export default RcQrcode;
export { useQrcode };
