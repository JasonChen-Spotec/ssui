/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from 'react';
import type { UploadProps } from 'rc-upload';
import Upload from 'rc-upload';
import Progress from 'antd/lib/progress';
import Image from 'antd/lib/image';
import Spin from 'antd/lib/spin';
import classNames from 'classnames';
import CloseOutlined from 'a-icons/lib/CloseOutlined';
import Pdf from 'a-icons/lib/Pdf';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';

const getLocalImgURL = (file: File) => {
  const URL = window.URL || window.webkitURL;
  const imgURL = URL.createObjectURL(file);
  return imgURL;
};

const IMAGE_TYPE = 'image';

const PDF_TYPE = 'pdf';

type FileType = typeof IMAGE_TYPE | typeof PDF_TYPE

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
  /** pdf名称 */
  pdfName?: string
}

const initBeforeUpload = () => true;

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
    beforeUpload = initBeforeUpload,
    onError,
    disabled,
    pdfName,
    ...restProps
  } = props;
  const uploadInstanceRef = React.useRef<Upload | null>();
  const fileRef = React.useRef<RcFile | null>();
  const [uploadStatus, setUploadStatus] = React.useState(value ? 'done' : 'init');
  const [fileUrl, setFileUrl] = React.useState(value);
  const [uploadPercent, setUploadPercent] = React.useState(0);
  const [imageLoading, setImageLoading] = React.useState<boolean>(false);
  const [fileType, setFileType] = React.useState<FileType>(IMAGE_TYPE);

  React.useEffect(() => {
    if (!value) {
      setUploadStatus('init');
      setFileUrl('');
      return;
    }

    setUploadStatus('done');
    setFileUrl(value);

    const isPdf = /\.pdf($|\?)/i.test(value);
    const isImage = /\.(jpg|jpeg|png|gif|webp|bmp|svg|heic)($|\?)/i.test(value);


    if (isImage) {
      setFileType(IMAGE_TYPE);
      setImageLoading(true);
      // eslint-disable-next-line global-require
      const heic2Jpeg = require('aa-utils/lib/heic2Jpeg').default;
      if (isFunction(heic2Jpeg)) {
        heic2Jpeg(value)
          .then((resultUrl: string) => {
            setFileUrl(resultUrl);
            setImageLoading(false);
          })
          .catch(() => setImageLoading(false));
      } else {
        setImageLoading(false);
      }
      return;

    }


    if (isPdf) {
      setFileType(PDF_TYPE);
      setImageLoading(false);
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

    const isImage = file.type.startsWith('image/');
    setFileType(isImage ? IMAGE_TYPE : PDF_TYPE);

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

  const getShowNode = () => {
    if (fileType === IMAGE_TYPE) {
      return (
        <Image wrapperClassName="as-img-upload-preview"
          src={fileUrl}
          preview
        />
      )
    }

    return (
      <div
        className="as-img-upload-pdf-preview"
        onClick={() => window.open(fileUrl || value, '_blank')}
      >
        <div className="as-img-upload-pdf-preview-content">
          <Pdf />
          {pdfName && <div className="as-img-upload-pdf-name">{pdfName}</div>}
        </div>
      </div>
    )

  }

  return (
    <div className={cls}>
      {uploadStatus === 'uploading' && (
        <div className="as-img-upload-content">
          {getShowNode()}
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
        <Spin spinning={imageLoading}>
          <div className="as-img-upload-content">
            {getShowNode()}
            {!disabled && (
              <div className="as-img-upload-close-button" onClick={handleDeleteUpload}>
                <CloseOutlined />
              </div>
            )}
          </div>
        </Spin>
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
          <div
            className={classNames('as-img-upload-button', { 'init-disable': disabled })}
          >
            {children}
          </div>
        )}
      </Upload>
    </div>
  );
};

export default SingleImgUpload;
