var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

import React, { useRef } from 'react';
import QRCode from 'qrcode';
import useMount from 'ahooks/lib/useMount';
import isFunction from 'lodash/isFunction';

var ReactQRcode = function ReactQRcode(props) {
  var value = props.value,
      method = props.method,
      options = props.options,
      getCanvasInstance = props.getCanvasInstance;
  var domElRef = useRef(null);
  var defaultOptions = {
    errorCorrectionLevel: 'H',
    margin: 0,
    width: 134
  };

  var finalyOptions = __assign(__assign({}, defaultOptions), options);

  useMount(function () {
    QRCode[method](value, finalyOptions, function (err, result) {
      if (err) {
        throw err;
      }

      ;
      isFunction(getCanvasInstance) && getCanvasInstance(result);
      domElRef.current.appendChild(result);
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: domElRef
  });
};

ReactQRcode.defaultProps = {
  value: '',
  method: 'toCanvas',
  options: {}
};
export default ReactQRcode;