import React from 'react';
import { Button, Space } from 'antd';
import { downloadFile } from 'aa-utils';

const Demo = () => {
  const onClick = () => {
    downloadFile(
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    ).then(() => {
      console.log('下载成功');
    });
  };

  const onClickHaveFileName = () => {
    downloadFile('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', {
      fileName: '好看的图片',
      onProgress({ percent }) {
        console.log('percent', percent);
      },
    });
  };

  return (
    <Space>
      <Button onClick={onClick}>下载</Button>

      <Button onClick={onClickHaveFileName}>下载2</Button>
    </Space>
  );
};

export default Demo;
