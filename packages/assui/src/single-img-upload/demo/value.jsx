import React from 'react';
import { SingleImgUpload } from 'assui';
import { PlusOutlined } from 'a-icons';

const Demo = () => {
  const onSuccess = (resValues) => {
    console.log('Received values: ', resValues);
  };

  return (
    <SingleImgUpload
      action="http://192.168.0.126:10000/oss/file/upload"
      value="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fauto%2Ftransform%2F299%2Fw660h439%2F20210907%2F0290-3a002940b16b9faa08bd02950f322671.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633673923&t=a4564f6d800a02b67303f60e716153c9"
      onSuccess={onSuccess}
    >
      <PlusOutlined />
    </SingleImgUpload>
  );
};

export default Demo;
