import * as React from 'react';
import type { UploadProps } from 'rc-upload';
import { isFunction } from 'lodash';
import { Button } from 'antd';
import { CheckOutlined } from 'a-icons';
import classNames from 'classnames';
import Upload from 'rc-upload';

export interface RcFile extends File {
  uid: string;
}

export interface EnhancedUploadProps extends Omit<UploadProps, 'children'> {
  /** 上传的文案 */
  uploadText?: string;
  /** 点击的按钮 */
  textNode?: React.ReactNode;
  /** loading组件 */
  loadingNode?: ((v: { loading: boolean }) => React.ReactElement) | React.ReactElement;
  /** 上传成功后展示组件 */
  successNode?: React.ReactNode;
  /** 上传成功后展示的svg */
  successSVG?: React.ReactNode;
  /** 格式化接口返回数据 */
  onFormatResData?: (res: any) => string;
}

const EnhancedUpload = (props: EnhancedUploadProps) => {
  const {
    onStart,
    onFormatResData,
    onSuccess,
    beforeUpload = () => true,
    onError,
    action,
    accept = '.xls, .xlsx',
    className,
    uploadText,
    textNode,
    loadingNode,
    successNode,
    successSVG,
    ...restProps
  } = props;

  const uploadInstanceRef = React.useRef<Upload | null>();
  const fileRef = React.useRef<RcFile | null>();
  const [loading, setLoading] = React.useState(false);
  const [showSuccessButton, setShowSuccessButton] = React.useState<boolean>(false);

  const showSuccessButtonFun = () => {
    setShowSuccessButton(true);
    setTimeout(() => {
      setShowSuccessButton(false);
    }, 2000);
  };
  const onBeforeUpload: UploadProps['beforeUpload'] = async (...rest) => {
    if (beforeUpload) {
      const resultBefore = await beforeUpload(...rest);
      return resultBefore;
    }
    return true;
  };

  const handleStart = (file: RcFile) => {
    setLoading(true);
    fileRef.current = file;
    onStart?.(file);
  };

  const handleError = (error: Error, ret: Record<string, unknown>, file: RcFile) => {
    onError?.(error, ret, file);
  };

  const handleSuccess = (res: any, file: RcFile, xhr: XMLHttpRequest) => {
    setLoading(false);
    const result = onFormatResData ? onFormatResData(res) : res;
    showSuccessButtonFun();
    onSuccess?.(result, file, xhr);
  };

  const textElement = textNode || (
    <Button className="text-button">
      <span>{uploadText}</span>
    </Button>
  );

  const finalLoadingNode =
    loadingNode &&
    (isFunction(loadingNode)
      ? loadingNode({ loading })
      : React.cloneElement(loadingNode, { loading }));

  const loadingElement = finalLoadingNode || (
    <Button className="upload-loading-button" loading={loading} />
  );

  const successElement = successNode || (
    <Button className="upload-success-button">{successNode || <CheckOutlined />}</Button>
  );

  return (
    <Upload
      ref={(uploader) => {
        uploadInstanceRef.current = uploader;
      }}
      accept={accept}
      action={action}
      name="file"
      onStart={handleStart}
      onError={handleError}
      onSuccess={handleSuccess}
      disabled={loading}
      beforeUpload={onBeforeUpload}
      className={classNames('upload-button', className)}
      {...restProps}
    >
      <>
        {!showSuccessButton && !loading && textElement}
        {!showSuccessButton && loading && loadingElement}
        {showSuccessButton && successElement}
      </>
    </Upload>
  );
};

export default EnhancedUpload;
