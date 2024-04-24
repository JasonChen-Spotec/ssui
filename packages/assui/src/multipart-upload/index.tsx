import React, { useState, useRef } from 'react';
import Upload from 'rc-upload';
import type { UploadProps } from 'rc-upload';
import { useMount, useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import { Progress } from 'antd';
import { CloseOutlined, CirclePlusFilled } from 'a-icons';
import getMultipartUploadHandler from './getMultipartUploadHandler';

export interface RcFile extends File {
  uid: string;
}

export interface UploadProgressEvent extends ProgressEvent {
  percent: number;
}

export interface MultipartUploadProps extends Omit<UploadProps, 'onSuccess'> {
  value?: string;
  wrapperClassName?: string;
  className?: string;
  defaultFileUrl?: string;
  defaultFileName?: string;
  /** 上传文字 */
  uploadText?: string;
  onSuccess?: (res: any, fileName: string) => void;
  uploadIcon: React.ReactElement;
  cancelUpload?: () => void;
  folderType: any;
  /** 分片大小 */
  chunkSize?: number;
  /** 第一步 获取ID  */
  getInitUploadIdAPI: ({
    fileName,
    folderType,
  }: {
    fileName: string;
    folderType: any;
  }) => Promise<any>;
  /** 第二步 获取url 进行分片上传  */
  getInProgressUploadUrl: ({
    fileName,
    partNumber,
    uploadId,
  }: {
    fileName: string;
    partNumber: number;
    uploadId: string;
  }) => string;
  /** 第三步 合并上传文件 完成上传  */
  completeRequest: (
    {
      fileName,
      folderType,
      uploadId,
    }: {
      fileName: string;
      uploadId: string;
      folderType: any;
    },
    list: string[],
  ) => Promise<any>;
  errorCatch?: (error: any) => void;
}

const MultipartUpload = (props: MultipartUploadProps) => {
  const {
    className,
    wrapperClassName,
    accept,
    method,
    defaultFileName = '',
    onSuccess,
    onError,
    onStart,
    cancelUpload,
    uploadIcon,
    disabled,
    folderType,
    getInProgressUploadUrl,
    getInitUploadIdAPI,
    completeRequest,
    chunkSize,
    uploadText,
    customRequest,
    value,
    errorCatch,
    ...restProps
  } = props;

  const fileNameRef = useRef<string>('');
  const uploadRef = useRef<Upload | null>();
  const fileRef = useRef<RcFile | null>();
  const uploadIdRef = useRef<string>('');
  const [uploadStatus, setUploadStatus] = useState('init');
  const [uploadPercent, setUploadPercent] = useState(0);

  const resChunkSize = chunkSize || 1024 * 1024 * 50; // 50MB
  let currentChunk = 0;
  let totalChunks = 0;
  const uploadList: string[] = [];

  useUpdateEffect(() => {
    if (value) {
      setUploadStatus('done');
    } else {
      setUploadStatus('init');
    }
  }, [value]);

  useMount(() => {
    fileNameRef.current = defaultFileName;
  });

  useUpdateEffect(() => {
    fileNameRef.current = defaultFileName;
  }, [defaultFileName]);

  const handleStart = (file: RcFile) => {
    fileRef.current = file;
    setUploadPercent(0);
    fileNameRef.current = file.name;
    totalChunks = Math.ceil(fileRef.current.size / resChunkSize);
    setUploadStatus('uploading');
    onStart && onStart(file);
  };

  const handleError = (error: Error, ret: Record<string, unknown>, file: RcFile) => {
    setUploadStatus('init');
    onError && onError(error, ret, file);
  };

  const uploadCls = classNames(className, {
    'not-upload-init': uploadStatus !== 'init',
  });

  const handleCancelUpload = () => {
    if (fileRef.current) {
      uploadRef.current?.abort(fileRef.current);
      setUploadStatus('init');
      cancelUpload && cancelUpload();
    }
  };

  const progress = (progressNumber: number) => {
    const currentProgressNumber = parseInt(
      `${(progressNumber * (currentChunk + 1)) / totalChunks}`,
      10,
    );
    if (currentProgressNumber >= (currentChunk / totalChunks) * 100) {
      setUploadPercent(currentProgressNumber);
    }
  };

  const uploadNextChunk = () => {
    /** 第二步 获取url 进行分片上传  */
    if (fileRef.current) {
      const resultUrl = getInProgressUploadUrl({
        fileName: fileNameRef.current,
        partNumber: currentChunk + 1,
        uploadId: uploadIdRef.current,
      });

      const multipartUploadHandler = getMultipartUploadHandler(resultUrl);
      const start = currentChunk * resChunkSize;
      const end = Math.min(fileRef.current.size, start + resChunkSize);
      const chunk = fileRef.current.slice(start, end);

      multipartUploadHandler(chunk, progress)
        .then((res: any) => {
          uploadList.push(res as string);
          currentChunk += 1;

          if (currentChunk < totalChunks) {
            uploadNextChunk();
          } else {
            /** 分片上传完成 进行文件合并 上传完成  */
            completeRequest(
              {
                fileName: fileNameRef.current,
                uploadId: uploadIdRef.current,
                folderType,
              },
              uploadList,
            ).then((fileUrl: any) => {
              setUploadStatus('done');
              onSuccess && onSuccess(fileUrl, fileNameRef.current);
            });
          }
        })
        .catch((error) => {
          errorCatch && errorCatch(error);
        });
    }
  };

  const customMultipartRequest = () => {
    if (fileRef.current) {
      totalChunks = Math.ceil(fileRef.current.size / resChunkSize);

      /** 第一步 获取ID  */
      getInitUploadIdAPI({
        fileName: fileNameRef.current,
        folderType,
      }).then((id: string) => {
        uploadIdRef.current = id;
        uploadNextChunk();
      });
    }
  };

  return (
    <div className={classNames('multipart-upload-container', wrapperClassName)}>
      {uploadStatus === 'uploading' && (
        <div className="multipart-uploading-container">
          <div className="multipart-package-icon-files">
            {uploadIcon}
            <div className="multipart-upload-file-name" title={fileNameRef.current}>
              {fileNameRef.current}
            </div>
          </div>
          <Progress
            className="multipart-upload-progress"
            percent={uploadPercent}
            size="small"
            status="active"
          />
          <div
            className="multipart-package-upload-close-button"
            onClick={handleCancelUpload}
          >
            <CloseOutlined />
          </div>
        </div>
      )}

      {uploadStatus === 'done' && (
        <div className="multipart-upload-container">
          <div className="multipart-upload-icon-files">
            {uploadIcon}
            <div className="multipart-upload-file-name" title={fileNameRef.current}>
              {fileNameRef.current}
            </div>
          </div>
        </div>
      )}

      <Upload
        ref={(uploader) => {
          uploadRef.current = uploader;
        }}
        name="file"
        accept={accept}
        disabled={disabled}
        method={method}
        className={uploadCls}
        onStart={handleStart}
        onError={handleError}
        customRequest={customMultipartRequest}
        {...restProps}
      >
        {uploadStatus === 'init' && (
          <div
            className={classNames('multipart-uploading-file-container', {
              'multipart-uploading-file-container-disabled': disabled,
            })}
          >
            <CirclePlusFilled />
            <span>{uploadText}</span>
          </div>
        )}
      </Upload>
    </div>
  );
};

MultipartUpload.displayName = 'MultipartUpload';

export default MultipartUpload;
