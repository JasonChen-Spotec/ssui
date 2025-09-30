import React from 'react';
export type SignaturePadProps = {
    /** 默认背景文字 */
    defaultText?: string;
    /** canvas宽度 */
    width?: number;
    /** canvas高度 */
    height?: number;
    /** 自定义类名 */
    className?: string;
    /** 画笔颜色 */
    penColor?: string;
    /** 背景颜色 */
    backgroundColor?: string;
    /** 背景文字颜色 */
    backgroundTextColor?: string;
    /** 背景文字大小 */
    backgroundTextSize?: string;
    /** 签名结束回调 */
    onEnd?: () => void;
    /** 签名开始回调 */
    onBegin?: () => void;
};
export interface SignaturePadRef {
    clearSignature: () => void;
    saveSignature: () => string | null;
    isEmpty: () => boolean;
    undo: () => boolean;
}
declare const SignaturePadComponent: React.ForwardRefExoticComponent<SignaturePadProps & React.RefAttributes<SignaturePadRef>>;
export default SignaturePadComponent;
