import type { UploadProps } from 'rc-upload';
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
declare const SingleImgUpload: (props: SingleImgUploadProps) => JSX.Element;
export default SingleImgUpload;
