import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
export var useQRCode = function useQRCode(value, options) {
  if (options === void 0) {
    options = {};
  }
  var _useState = useState(''),
    dataURL = _useState[0],
    setDataURL = _useState[1];
  useEffect(function () {
    if (!value) {
      setDataURL('');
      return;
    }
    QRCode.toDataURL(value, options, function (err, url) {
      if (err) {
        throw err;
      }
      setDataURL(url);
    });
  }, [value, options]);
  return dataURL;
};
export default useQRCode;