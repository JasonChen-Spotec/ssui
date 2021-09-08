import React from 'react';
import { SingleImgUpload } from 'assui';
import { PlusOutlined } from 'a-icons';

const Demo = () => {
  const onSuccess = (resValues) => {
    console.log('Received values: ', resValues);
  };

  return (
    <SingleImgUpload action="http://192.168.0.126:10000/oss/file/upload" onSuccess={onSuccess}>
      <PlusOutlined />
    </SingleImgUpload>
  );
};

export default Demo;
