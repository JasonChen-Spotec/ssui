import React from 'react';
import { SingleImgUpload, ImgCrop } from 'assui';
import { PlusOutlined } from 'a-icons';

import 'assui/es/img-crop/style/index';

const Demo = () => {
  const onSuccess = (resValues) => {
    console.log('Received values: ', resValues);
  };

  return (
    <ImgCrop rotate aspect={670 / 280} zipImg={{ width: 670, height: 280 }}>
      <SingleImgUpload action="http://192.168.0.126:10000/oss/file/upload" onSuccess={onSuccess}>
        <PlusOutlined />
      </SingleImgUpload>
    </ImgCrop>
  );
};

export default Demo;
