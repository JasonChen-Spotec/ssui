import React, { useRef, useEffect } from 'react';
import { Button } from 'antd';
import { canvas2Img } from 'aa-utils';

export default () => {
  const QRRef = useRef();

  useEffect(() => {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 200, 100);

    QRRef.current = c;
  }, []);

  const onDownloadFilled = () => {
    canvas2Img.saveAsImage(QRRef.current, { name: '2323' });
  };

  return (
    <div>
      <canvas id="myCanvas" width="200" height="100" />
      <Button onClick={onDownloadFilled}>下载</Button>
    </div>
  );
};
