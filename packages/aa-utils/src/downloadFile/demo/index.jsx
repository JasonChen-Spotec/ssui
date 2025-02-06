import React from 'react';
import { Button, Space } from 'antd';
import { downloadFile } from 'aa-utils';

const Demo = () => {
  const onClick = () => {
    downloadFile(
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20241217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241217T065918Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=3352d06b4d247772de79f08e600ce5127c015bb36bb55fe89f862ad66f4561e1%22',
    ).then(() => {
      console.log('下载成功');
    });
  };

  const onClickHaveFileName = () => {
    downloadFile(
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      {
        fileName: '好看的图片',
        onProgress({ percent }) {
          console.log('percent', percent);
        },
      },
    );
  };

  const onClickExcel = () => {
    downloadFile(
      'http://192.168.0.126:9000/s3-crm-s/report/5c79cc2fee3e6437e8597a6eddc329cd.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio/20250206/us-east-1/s3/aws4_request&X-Amz-Date=20250206T102945Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5c9828b80b37dd48e98d997ee40c3288f7392bfa088f18d807e08f3ad539e595',
      {
        fileName: `zip格式`,
      },
    );
  };

  return (
    <Space>
      <Button onClick={onClick}>下载</Button>
      <Button onClick={onClickHaveFileName}>下载2</Button>
      <Button onClick={onClickExcel}>下载其他格式</Button>
    </Space>
  );
};

export default Demo;
