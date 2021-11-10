import React, { useRef } from 'react';
import { Button } from 'antd';
import { RcQrcode } from 'assui';

export default () => {
  const QRRef = useRef();
  const onDownloadFilled = () => {
    // import { canvas2img } from 'aa-utils';
    // canvas2img.saveAsImage(QRRef.current, { name: '2323' });
  };

  return (
    <div>
      <RcQrcode
        value="http://www.baidu.com"
        getCanvasInstance={(canvasInstance) => {
          QRRef.current = canvasInstance;
        }}
      />
      <Button onClick={onDownloadFilled}>下载</Button>
    </div>
  );
};
