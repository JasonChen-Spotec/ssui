var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
export var useQRCode = function useQRCode(value, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = __read(useState(''), 2),
    dataURL = _a[0],
    setDataURL = _a[1];
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