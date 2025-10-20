import React from 'react';
import { SingleImgUpload } from 'assui';
import { PlusOutlined } from 'a-icons';

const Demo = () => {
  const onSuccess = (resValues) => {
    console.log('Received values: ', resValues);
  };

  return (
    <SingleImgUpload action="http://192.168.0.129:31000/api/h5/oss/upload/file/kyc" onSuccess={onSuccess}>
      <PlusOutlined />
    </SingleImgUpload>
  );
};

export default Demo;
