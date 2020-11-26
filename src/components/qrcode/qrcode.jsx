import React, { useRef } from 'react';
import QRCode from 'qrcode';
import useMount from 'ahooks/lib/useMount';
import isFunction from 'lodash/isFunction';

const ReactQRcode = props => {
  const { value, method, options, getCanvasInstance } = props;
  const domElRef = useRef(null);

  const defaultOptions = { errorCorrectionLevel: 'H', margin: 0, width: 134 };
  const finalyOptions = { ...defaultOptions, ...options };

  useMount(() => {
    QRCode[method](value, finalyOptions, (err, result) => {
      if (err) {
        throw err;
      };
      isFunction(getCanvasInstance) && getCanvasInstance(result);
      domElRef.current.appendChild(result);
    });
  });

  return (
    <div ref={domElRef} />
  );
};

ReactQRcode.defaultProps = {
  value: '',
  method: 'toCanvas',
  options: { }
};

export default ReactQRcode;

