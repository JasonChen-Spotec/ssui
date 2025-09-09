import React from 'react';
import type { UploadProps } from 'rc-upload';
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
    fileName?: string;
    /** 上传文字 */
    uploadText?: string;
    onSuccess?: (res: string, fileName: string) => void;
    uploadIcon: React.ReactElement;
    cancelUpload?: () => void;
    /** 分片大小 */
    chunkSize?: number;
    /** 第一步 获取ID  */
    getInitUploadIdAPI: ({ fileName }: {
        fileName: string;
    }) => Promise<string>;
    /** 第二步 获取url 进行分片上传  */
    getInProgressUploadUrl: ({ fileName, partNumber, uploadId, }: {
        fileName: string;
        partNumber: number;
        uploadId: string;
    }) => string;
    /** 第三步 合并上传文件 完成上传  */
    completeRequest: ({ fileName, uploadId, list, }: {
        fileName: string;
        uploadId: string;
        list: string[];
    }) => Promise<string>;
    errorCatch?: (error: any) => void;
}
declare const MultipartUpload: {
    (props: MultipartUploadProps): JSX.Element;
    displayName: string;
};
export default MultipartUpload;
