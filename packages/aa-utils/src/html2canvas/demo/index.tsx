import { Card } from 'antd';
import React from 'react';
import { canvasToImg, html2canvas } from 'aa-utils';
import './index.less';

const InviteFriends = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    html2canvas(ref.current as HTMLDivElement).then((canvas) => {
      canvasToImg.saveAsImage(canvas, { fileName: '2323ddd', width: 400, height: 284 });

      canvasRef.current.appendChild(canvas);
    });
  };

  return (
    <>
      <div onClick={onClick}>点击下载</div>
      <div className="download-img-card" ref={ref}>
        <Card title="asf">
          <div>乱七八糟</div>
        </Card>
      </div>
      <div>这是复制的canvas</div>
      <div ref={canvasRef} />
    </>
  );
};

export default InviteFriends;
