import React, { useRef } from 'react';
import { Button } from 'antd';
import RcQRcode from 'assui/lib/rc-qrcode';
import { canvasToImg } from 'aa-utils';

export default () => {
  const QRRef = useRef<HTMLCanvasElement>();
  const onDownloadFilled = () => {
    canvasToImg.saveAsImage(QRRef.current, { fileName: '文件名' });
  };

  return (
    <div>
      <RcQRcode
        value="http://www.baidu.com"
        getCanvasInstance={(canvasInstance) => {
          QRRef.current = canvasInstance;
        }}
      />
      <Button onClick={onDownloadFilled}>下载二维码</Button>
    </div>
  );
};
