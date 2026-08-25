import type { QRCodeSegment, QRCodeToDataURLOptions } from 'qrcode';
type ValueTypes = string | QRCodeSegment[];
export declare const useQRCode: (value: ValueTypes, options?: QRCodeToDataURLOptions) => string;
export default useQRCode;
