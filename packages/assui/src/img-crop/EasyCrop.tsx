import * as React from 'react';
import Cropper, { CropperProps } from 'react-easy-crop';

export interface EasyCropProps
  extends Omit<
    CropperProps,
    'onCropChange' | 'mediaProps' | 'crop' | 'zoomSpeed' | 'restrictPosition' | 'style'
  > {
  onComplete: (value: any) => void;
}

type Point = {
  x: number;
  y: number;
};

const EasyCrop = (props: EasyCropProps) => {
  const { aspect, minZoom, maxZoom, onComplete, ...restProps } = props;

  const [crop, setCrop] = React.useState<Point>({ x: 0, y: 0 });
  const [cropSize, setCropSize] = React.useState({ width: 0, height: 0 });

  const onCropComplete = React.useCallback(
    (_, croppedAreaPixels) => {
      onComplete(croppedAreaPixels);
    },
    [onComplete],
  );

  const onMediaLoaded = React.useCallback(
    (mediaSize) => {
      const { width, height } = mediaSize;
      const ratioWidth = height * aspect;

      if (width > ratioWidth) {
        setCropSize({ width: ratioWidth, height });
      } else {
        setCropSize({ width, height: width / aspect });
      }
    },
    [aspect],
  );

  return (
    <Cropper
      {...restProps}
      crop={crop}
      cropSize={cropSize}
      onCropChange={setCrop}
      aspect={aspect}
      minZoom={minZoom}
      maxZoom={maxZoom}
      onCropComplete={onCropComplete}
      onMediaLoaded={onMediaLoaded}
    />
  );
};

export default EasyCrop;
