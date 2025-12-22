import React from 'react';
import type { StatesTypes } from './index';
/** 获取默认尺寸 */
export declare const getDefaultSize: (defaultSize: number | string | undefined, minSize: number | undefined, maxSize: number | undefined, draggedSize?: number) => string | number | undefined;
/** 获取更新尺寸 */
export declare const getSizeUpdate: (props: {
    size?: string | number;
    defaultSize?: string | number;
    minSize?: number;
    maxSize?: number;
    primary: "first" | "second";
}, state: StatesTypes) => any;
/** 排除空的子元素 */
export declare const removeNullChildren: (children: React.ReactNode) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal)[];
/** 失去焦点 */
export declare const unFocus: (document: Document, window: Window) => void;
