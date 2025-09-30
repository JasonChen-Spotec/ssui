import React from 'react';
interface SignaturePadProps {
    defaultText?: string;
    width?: number;
    height?: number;
    className?: string;
    penColor?: string;
    backgroundColor?: string;
    backgroundTextColor?: string;
    onEnd?: () => void;
    onBegin?: () => void;
}
export interface SignaturePadRef {
    clearSignature: () => void;
    saveSignature: () => string | null;
    isEmpty: () => boolean;
    undo: () => boolean;
}
declare const SignaturePadComponent: React.ForwardRefExoticComponent<SignaturePadProps & React.RefAttributes<SignaturePadRef>>;
export default SignaturePadComponent;
