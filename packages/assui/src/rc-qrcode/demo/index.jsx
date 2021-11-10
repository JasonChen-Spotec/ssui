import React, { useRef } from 'react';
import { Button } from 'antd';
import { RcQrcode } from 'assui';
import { canvasToImg } from 'aa-utils';

export default () => {
  const QRRef = useRef();
  const onDownloadFilled = () => {
    canvasToImg.saveAsImage(QRRef.current, { name: '2323' });
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
