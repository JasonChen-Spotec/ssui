import * as React from 'react';
import Modal from 'antd/lib/modal';
import Slider from 'antd/lib/slider';

import type { CropperProps } from 'react-easy-crop';
import getCroppedImg from './getCroppedImg';
import EasyCrop from './EasyCrop';
import './style/index.less';

const noop = () => {};
const ZOOM_STEP = 0.1;

const MIN_ROTATE = 0;
const MAX_ROTATE = 360;
const ROTATE_STEP = 1;

export interface RcFile extends File {
  uid: string;
}

export interface ImgCropProps {
  prefix: string;
  aspect: number;
  shape: 'rect' | 'round';
  grid?: boolean;
  quality?: number;
  zoom?: boolean;
  rotate?: boolean;
  minZoom: number;
  maxZoom: number;
  fillColor: string;
  modalTitle: string;
  modalWidth?: string | number;
  modalCancel?: string;
  modalOk?: string;
  zipImg?: { width: number; height: number };
  beforeCrop?: (file: RcFile, fileList: RcFile[]) => boolean;
  cropperProps?: CropperProps;
  children?: React.ReactElement;
}

interface modalPartProps {
  width?: number | string;
  okText?: string;
  cancelText?: string;
}

export declare type Area = {
  width: number;
  height: number;
  x: number;
  y: number;
};

type beforeUploadFunc = (file: RcFile, fileList: RcFile[]) => boolean;

const ImgCrop = (props: ImgCropProps) => {
  const {
    aspect,
    shape,
    grid,
    quality,
    zoom,
    rotate,
    minZoom,
    maxZoom,
    fillColor,
    prefix,
    modalTitle,
    modalWidth,
    modalOk,
    modalCancel,
    beforeCrop,
    zipImg,
    children,
    cropperProps,
  } = props;

  const pkg = `${prefix}-img-crop`;
  const MEDIA_CLASS = `${pkg}-media`;

  const hasZoom = zoom === true;
  const hasRotate = rotate === true;

  const [src, setSrc] = React.useState<string>('');
  const [zoomVal, setZoomVal] = React.useState(1);
  const [rotateVal, setRotateVal] = React.useState(0);

  const beforeUploadRef = React.useRef<beforeUploadFunc | Promise<beforeUploadFunc>>();
  const fileRef = React.useRef<RcFile>();
  const resolveRef = React.useRef<(file: any) => void>(noop);
  const rejectRef = React.useRef<(value: any) => void>(noop);

  const cropPixelsRef = React.useRef<Area>();

  /**
   * Upload
   */
  const renderUpload = React.useCallback(() => {
    const upload = Array.isArray(children) ? children[0] : children;
    const { beforeUpload, accept, ...restUploadProps } = upload.props;
    beforeUploadRef.current = beforeUpload;

    return {
      ...upload,
      props: {
        ...restUploadProps,
        accept: accept || 'image/*',
        beforeUpload: (file: RcFile, fileList: RcFile[]) =>
          new Promise((resolve, reject) => {
            if (beforeCrop && !beforeCrop(file, fileList)) {
              reject();
              return;
            }

            fileRef.current = file;
            resolveRef.current = resolve;
            rejectRef.current = reject;

            const reader = new FileReader() as FileReader;
            reader.addEventListener('load', () => {
              setSrc(reader.result as string);
            });
            reader.readAsDataURL(file);
          }),
      },
    };
  }, [beforeCrop, children]);

  /**
   * EasyCrop
   */
  const onComplete = React.useCallback((croppedAreaPixels: any) => {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);

  /**
   * Controls
   */
  const isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  const isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  const isMinRotate = rotateVal === MIN_ROTATE;
  const isMaxRotate = rotateVal === MAX_ROTATE;

  const subZoomVal = React.useCallback(() => {
    if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
  }, [isMinZoom, zoomVal]);

  const addZoomVal = React.useCallback(() => {
    if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
  }, [isMaxZoom, zoomVal]);

  const subRotateVal = React.useCallback(() => {
    if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
  }, [isMinRotate, rotateVal]);

  const addRotateVal = React.useCallback(() => {
    if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
  }, [isMaxRotate, rotateVal]);

  /**
   * Modal
   */
  const modalProps = React.useMemo(() => {
    const obj: modalPartProps = { width: modalWidth, okText: modalOk, cancelText: modalCancel };
    return obj;
  }, [modalCancel, modalOk, modalWidth]);

  const onClose = React.useCallback(() => {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);

  const onOk = React.useCallback(async () => {
    onClose();

    const naturalImg = document.querySelector(`.${MEDIA_CLASS}`) as HTMLImageElement;
    const { naturalWidth, naturalHeight } = naturalImg;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // create a max canvas to cover the source image after rotated
    const maxLen = Math.sqrt(naturalWidth ** 2 + naturalHeight ** 2);
    canvas.width = maxLen;
    canvas.height = maxLen;

    // rotate the image
    if (hasRotate && rotateVal > 0 && rotateVal < 360) {
      const halfMax = maxLen / 2;
      ctx?.translate(halfMax, halfMax);
      ctx?.rotate((rotateVal * Math.PI) / 180);
      ctx?.translate(-halfMax, -halfMax);
    }

    ctx.fillStyle = fillColor;
    ctx?.fillRect(0, 0, canvas.width, canvas.height);

    // draw the source image in the center of the max canvas
    const left = (maxLen - naturalWidth) / 2;
    const top = (maxLen - naturalHeight) / 2;
    ctx?.drawImage(naturalImg, left, top);

    // shrink the max canvas to the crop area size, then align two center points
    const maxImgData = ctx?.getImageData(0, 0, maxLen, maxLen);
    const { width, height, x, y } = cropPixelsRef.current as Area;
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y));

    // get the new image
    const { type, name, uid } = fileRef.current as RcFile;

    canvas.toBlob(
      async (blob: Blob) => {
        let newFile = new File([blob], name, { type }) as RcFile;

        if (zipImg) {
          const url = window.URL || window.webkitURL;
          const imgUrl = url.createObjectURL(newFile);
          const { fileObj } = (await getCroppedImg(imgUrl, zipImg, name, type)) as {
            url: string;
            fileObj: RcFile;
          };
          newFile = fileObj;
        }
        newFile.uid = uid;
        if (typeof beforeUploadRef.current !== 'function') return resolveRef.current(newFile);

        const res = beforeUploadRef.current(newFile, [newFile]);

        if (typeof res !== 'boolean' && !res) {
          console.error('beforeUpload must return a boolean or Promise');
        } else {
          if (res === true) return resolveRef.current(newFile);
          if (res === false) return rejectRef.current('not upload');
          if (res && typeof (res as Promise<beforeUploadFunc>).then === 'function') {
            try {
              const passedFile = await res;
              const fileType = Object.prototype.toString.call(passedFile);
              if (fileType === '[object File]' || fileType === '[object Blob]')
                newFile = passedFile;
              resolveRef.current(newFile);
            } catch (err) {
              rejectRef.current(err);
            }
          }
        }
        return null;
      },
      type,
      quality,
    );
  }, [hasRotate, onClose, quality, rotateVal]);

  const renderComponent = (titleOfModal: string) => (
    <>
      {renderUpload()}
      {src && (
        <Modal
          open
          wrapClassName={`${pkg}-modal`}
          title={titleOfModal}
          onOk={onOk}
          onCancel={onClose}
          maskClosable={false}
          destroyOnClose
          {...modalProps}
        >
          <EasyCrop
            image={src}
            aspect={aspect}
            cropShape={shape}
            showGrid={grid}
            zoomWithScroll={hasZoom}
            zoom={zoomVal}
            rotation={rotateVal}
            onZoomChange={setZoomVal}
            onRotationChange={setRotateVal}
            minZoom={minZoom}
            maxZoom={maxZoom}
            onComplete={onComplete}
            classes={{ containerClassName: `${pkg}-container`, mediaClassName: MEDIA_CLASS }}
            {...cropperProps}
          />
          {hasZoom && (
            <div className={`${pkg}-control zoom`}>
              <button type="button" onClick={subZoomVal} disabled={isMinZoom}>
                －
              </button>
              <Slider
                min={minZoom}
                max={maxZoom}
                step={ZOOM_STEP}
                value={zoomVal}
                onChange={setZoomVal}
              />
              <button type="button" onClick={addZoomVal} disabled={isMaxZoom}>
                ＋
              </button>
            </div>
          )}
          {hasRotate && (
            <div className={`${pkg}-control rotate`}>
              <button type="button" onClick={subRotateVal} disabled={isMinRotate}>
                ↺
              </button>
              <Slider
                min={MIN_ROTATE}
                max={MAX_ROTATE}
                step={ROTATE_STEP}
                value={rotateVal}
                onChange={setRotateVal}
              />
              <button type="button" onClick={addRotateVal} disabled={isMaxRotate}>
                ↻
              </button>
            </div>
          )}
        </Modal>
      )}
    </>
  );
  return renderComponent(modalTitle);
};

ImgCrop.defaultProps = {
  prefix: 'ant',
  aspect: 1,
  shape: 'rect',
  grid: false,
  quality: 0.4,
  zoom: true,
  rotate: false,
  minZoom: 1,
  maxZoom: 3,
  fillColor: 'rgba(0,0,0,0)',
};

ImgCrop.getCroppedImg = getCroppedImg;

export default ImgCrop;
