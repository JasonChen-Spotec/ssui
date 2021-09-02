import QRCode, { QRCodeToDataURLOptions, QRCodeSegment } from 'qrcode';
import { useEffect, useState } from 'react';

type ValueTypes = string | QRCodeSegment[];

export const useQRCode = (value: ValueTypes, options: QRCodeToDataURLOptions): string => {
  const [dataURL, setDataURL] = useState<string>('');
  useEffect(() => {
    if (!value) {
      return setDataURL('');
    }

    QRCode.toDataURL(value, options, (err, url: string) => {
      if (err) {
        throw err;
      }
      setDataURL(url);
    });
  }, [value, options]);

  return dataURL;
};

export default useQRCode;
