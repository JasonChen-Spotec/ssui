import * as React from 'react';
import type { CropperProps } from 'react-easy-crop';
import getCroppedImg from './getCroppedImg';
import './style/index.less';
export interface RcFile extends File {
    uid: string;
}
export interface ImgCropProps {
    prefix?: string;
    aspect?: number;
    shape?: 'rect' | 'round';
    grid?: boolean;
    quality?: number;
    zoom?: boolean;
    rotate?: boolean;
    minZoom?: number;
    maxZoom?: number;
    fillColor?: string;
    modalTitle: string;
    modalWidth?: string | number;
    modalCancel?: string;
    modalOk?: string;
    closable?: boolean;
    zipImg?: {
        width: number;
        height: number;
    };
    beforeCrop?: (file: RcFile, fileList: RcFile[]) => boolean;
    cropperProps?: CropperProps;
    children?: React.ReactElement;
}
export declare type Area = {
    width: number;
    height: number;
    x: number;
    y: number;
};
declare const ImgCrop: {
    (props: ImgCropProps): JSX.Element;
    getCroppedImg: typeof getCroppedImg;
};
export default ImgCrop;
