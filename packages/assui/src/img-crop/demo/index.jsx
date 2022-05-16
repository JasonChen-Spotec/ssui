import React from 'react';
import { SingleImgUpload, ImgCrop } from 'assui';
import { PlusOutlined } from 'a-icons';

import 'assui/lib/img-crop/style/index';

const Demo = () => {
  const onSuccess = (resValues) => {
    console.log('Received values: ', resValues);
  };

  return (
    <ImgCrop rotate aspect={670 / 280} zipImg={{ width: 670, height: 280 }}>
      <SingleImgUpload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onSuccess={onSuccess}
      >
        <PlusOutlined />
      </SingleImgUpload>
    </ImgCrop>
  );
};

export default Demo;
