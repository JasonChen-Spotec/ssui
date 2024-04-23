import React from 'react';
import { MultipartUpload } from 'assui';
import { PlusOutlined } from 'a-icons';

const Demo = () => {
  const getUrl = ({ fileName, partNumber, uploadId }) => {
    return `http://192.168.0.129:31000/api/be/oss/upload/file/split/2?fileName=${fileName}&partNumber=${partNumber}&uploadId=${uploadId}`;
  };

  const getUploadIdAPI = ({ fileName, folderType }) => {
    return new Promise((resolve, reject) => {
      resolve({ body: '123123' });
    });
  };

  const completeUploadAPI = () => {
    return new Promise((resolve, reject) => {
      resolve('completeUploadAPI');
    });
  };

  return (
    <MultipartUpload
      getUploadIdAPI={getUploadIdAPI}
      completeUploadAPI={completeUploadAPI}
      uploadIcon={<PlusOutlined />}
      getUrl={getUrl}
      folderType={'2'}
    >
      <PlusOutlined />
    </MultipartUpload>
  );
};

export default Demo;
