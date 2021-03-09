import React, { useRef } from 'react';
import { Button } from 'antd';
import QRcode from 'assui/src/components/qrcode';
import canvasToImage from 'assui/lib/components/qrcode/canvas-to-image';

export default () => {
  const QRRef = useRef();

  const onDownloadFilled = () => {
    const options = {
      name: 'qrcode',
      type: 'jpg'
    };

    canvasToImage(QRRef.current, options);
  };

  return (
    <div>
      <QRcode value="http://www.baidu.com" getCanvasInstance={canvasInstance => QRRef.current = canvasInstance } />
      <Button onClick={onDownloadFilled}>下载</Button>
    </div>
  );};
