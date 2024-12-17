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

  return (
    <Space>
      <Button onClick={onClick}>下载</Button>

      <Button onClick={onClickHaveFileName}>下载2</Button>
    </Space>
  );
};

export default Demo;
