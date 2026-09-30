import * as React from 'react';
import type { CropperProps } from 'react-easy-crop';
export interface EasyCropProps extends Omit<CropperProps, 'onCropChange' | 'mediaProps' | 'crop' | 'zoomSpeed' | 'restrictPosition' | 'style'> {
    onComplete: (value: any) => void;
}
declare const EasyCrop: (props: EasyCropProps) => React.JSX.Element;
export default EasyCrop;
