import React from 'react';
import { MultipartUpload } from 'assui';
import { FileOutlined } from 'a-icons';

const Demo = () => {
  const getUrl = ({ fileName, partNumber, uploadId }) => {
    return `http://192.168.0.129:31000/api/be/oss/upload/file/split/2?fileName=${fileName}&partNumber=${partNumber}&uploadId=${uploadId}`;
  };

  const getUploadIdAPI = ({ fileName, folderType }) => {
    return new Promise((resolve, reject) => {
      resolve('73bc4b3b-0898-4f9b-ade5-9258f51a8413');
    });
  };

  const completeUploadAPI = () => {
    return new Promise((resolve, reject) => {
      resolve('completeUploadAPI');
    });
  };

  return (
    <MultipartUpload
      getInitUploadIdAPI={getUploadIdAPI}
      completeRequest={completeUploadAPI}
      uploadIcon={<FileOutlined style={{ height: 60, width: 60, marginBottom: 20 }} />}
      getInProgressUploadUrl={getUrl}
      folderType={'2'}
    />
  );
};

export default Demo;
