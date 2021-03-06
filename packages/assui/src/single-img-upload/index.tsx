/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from 'react';
import type { UploadProps } from 'rc-upload';
import Upload from 'rc-upload';
import Progress from 'antd/lib/progress';
import Image from 'antd/lib/image';
import classNames from 'classnames';
import useUpdateEffect from 'ahooks/lib/useUpdateEffect';
import CloseOutlined from 'a-icons/lib/CloseOutlined';
import isObject from 'lodash/isObject';

const getLocalImgURL = (file: File) => {
  const URL = window.URL || window.webkitURL;
  const imgURL = URL.createObjectURL(file);
  return imgURL;
};

export interface RcFile extends File {
  uid: string;
}

export interface UploadProgressEvent extends ProgressEvent {
  percent: number;
}

export interface SingleImgUploadProps extends UploadProps {
  value?: string;
  wrapperClassName?: string;
  onDeleteUpload?: () => void;
  onCancel?: () => void;
  /** 格式化接口返回数据 */
  onFormatResData?: (res: any) => string;
}

const SingleImgUpload = (props: SingleImgUploadProps) => {
  const {
    className,
    wrapperClassName,
    children,
    value,
    onStart,
    onDeleteUpload,
    onFormatResData,
    onSuccess,
    onCancel,
    beforeUpload,
    onError,
    disabled,
    ...restProps
  } = props;
  const uploadInstanceRef = React.useRef<Upload | null>();
  const fileRef = React.useRef<RcFile | null>();
  const [uploadStatus, setUploadStatus] = React.useState(value ? 'done' : 'init');
  const [fileUrl, setFileUrl] = React.useState(value);
  const [uploadPercent, setUploadPercent] = React.useState(0);

  useUpdateEffect(() => {
    setFileUrl(value);

    if (value) {
      setUploadStatus('done');
    } else {
      setUploadStatus('init');
    }
  }, [value]);

  const onBeforeUpload: UploadProps['beforeUpload'] = async (...rest) => {
    setFileUrl('');

    if (beforeUpload) {
      const resultBefore = await beforeUpload(...rest);
      if (isObject(resultBefore)) {
        setFileUrl(getLocalImgURL(resultBefore as File));
      }

      return resultBefore;
    }

    return true;
  };

  const handleStart = (file: RcFile) => {
    fileRef.current = file;
    setUploadPercent(0);
    if (!fileUrl) {
      setFileUrl(getLocalImgURL(file));
    }
    setUploadStatus('uploading');
    onStart && onStart(file);
  };

  const handleProgress = (e: UploadProgressEvent) => {
    const { percent } = e;
    setUploadPercent(parseInt(`${percent}`, 10));
  };

  const handleError = (error: Error, ret: Record<string, unknown>, file: RcFile) => {
    setUploadStatus('init');
    onError && onError(error, ret, file);
  };

  const handleSuccess = (res: any, file: RcFile, xhr: XMLHttpRequest) => {
    const result = onFormatResData ? onFormatResData(res) : res;
    onSuccess && onSuccess(result, file, xhr);
    setUploadStatus('done');
  };

  const uploadCls = classNames(className, {
    'not-upload-init': uploadStatus !== 'init',
  });

  const handleDeleteUpload = () => {
    setUploadStatus('init');
    onDeleteUpload && onDeleteUpload();
  };

  const cancelUpload = () => {
    if (fileRef.current) {
      uploadInstanceRef.current?.abort(fileRef.current);
    }
    setUploadStatus('init');
    onCancel?.();
  };

  const cls = classNames('as-img-upload', wrapperClassName);

  return (
    <div className={cls}>
      {uploadStatus === 'uploading' && (
        <div className="as-img-upload-content">
          <Image wrapperClassName="as-img-upload-preview" src={fileUrl} preview />
          <div className="dark" />
          <Progress
            className="as-img-upload-upload-progress"
            percent={uploadPercent}
            size="small"
            status="active"
          />
          <div className="as-img-upload-close-button" onClick={cancelUpload}>
            <CloseOutlined />
          </div>
        </div>
      )}
      {uploadStatus === 'done' && (
        <div className="as-img-upload-content">
          <Image wrapperClassName="as-img-upload-preview" src={fileUrl} preview />
          {!disabled && (
            <div className="as-img-upload-close-button" onClick={handleDeleteUpload}>
              <CloseOutlined />
            </div>
          )}
        </div>
      )}
      <Upload
        ref={(uploader) => {
          uploadInstanceRef.current = uploader;
        }}
        name="file"
        className={uploadCls}
        onStart={handleStart}
        onProgress={handleProgress}
        onError={handleError}
        onSuccess={handleSuccess}
        disabled={disabled}
        beforeUpload={onBeforeUpload}
        {...restProps}
      >
        {uploadStatus === 'init' && (
          <div className={classNames('as-img-upload-button', { 'init-disable': disabled })}>
            {children}
          </div>
        )}
      </Upload>
    </div>
  );
};

SingleImgUpload.defaultProps = {
  beforeUpload() {
    return true;
  },
};

export default SingleImgUpload;
