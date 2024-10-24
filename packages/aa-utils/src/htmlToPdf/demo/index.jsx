import React, { useRef, useEffect } from 'react';
import { Button } from 'antd';
import { htmlToPdf } from 'aa-utils';

export default () => {
  const QRRef = useRef();

  const onDownloadFilled = () => {
    const content = document.getElementById('myCanvas');

    htmlToPdf(content, {
      fileName: `report.pdf`,
      html2canvasOptions: {
        scale: 2,
        //... add any other html2canvas options
      },
      jsPDFOptions: {
        orientation: 'landscape',
        //... add any other jsPDF options
      },
      onBeforeCapture: () => {
        const style = document.createElement('style');
        document.head.append(style);
        style.sheet?.insertRule('body p { display: inline-block; font-size: 12px; }');
      },
      onSuccess: () => {
        window.alert('生成成功');
      },
      onError: () => {
        window.alert('生成失败');
      },
      onSettled: () => {
        window.alert('最终');
      },
    });
  };

  return (
    <div id="myCanvas">
      <div style={{ width: 100, height: 100, backgroundColor: 'purple' }}>生成PDF</div>
      <div style={{ width: 100, height: 100, backgroundColor: 'red' }}>生成PDF</div>
      <Button onClick={onDownloadFilled}>下载</Button>
    </div>
  );
};
