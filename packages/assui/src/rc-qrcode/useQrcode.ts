import { useEffect, useState } from 'react';
import type { QRCodeSegment, QRCodeToDataURLOptions } from 'qrcode';
import QRCode from 'qrcode';

type ValueTypes = string | QRCodeSegment[];

export const useQRCode = (
  value: ValueTypes,
  options: QRCodeToDataURLOptions = {},
): string => {
  const [dataURL, setDataURL] = useState<string>('');

  useEffect(() => {
    if (!value) {
      setDataURL('');
      return;
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
