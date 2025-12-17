import type { ModalProps } from 'antd/lib/modal';
import type React from 'react';
export declare const defaultProps: unique symbol;
export type OptionalizeTuple<T> = T extends Record<string, any> ? {
    [K in keyof T]?: T[K];
} : undefined;
export type ModalAction<T> = {
    close: () => void;
    open: (params?: T) => void;
};
export type ResetProps = Omit<ModalProps, 'open' | 'children' | 'onClose'> & {
    renderChildren?: <T>(v: ModalAction<T>) => React.ReactElement;
};
export type UseModalProps = ResetProps & {
    [defaultProps]?: ResetProps;
};
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type OpenProps = {
    open: boolean;
    onCancel: () => void;
};
type GetChildProps<T extends UseModalProps | unknown> = 'renderChildren' extends keyof T ? {
    children: React.ReactElement;
} : unknown;
type GetDefaultProps<T extends UseModalProps> = typeof defaultProps extends keyof T ? {
    [K in keyof Omit<T[typeof defaultProps], 'renderChildren'>]: T[typeof defaultProps][K];
} & GetChildProps<T[typeof defaultProps]> : unknown;
type GetPropsTuple<T extends UseModalProps> = Prettify<OpenProps & GetChildProps<T> & Omit<T, 'renderChildren' | typeof defaultProps | keyof T[typeof defaultProps]> & GetDefaultProps<T>>;
export type NoParamResult = [GetPropsTuple<Record<never, never>>, ModalAction<never>];
export type HasParamResult<T extends UseModalProps> = [GetPropsTuple<T>, ModalAction<OptionalizeTuple<Omit<T, typeof defaultProps>>>];
export type OnlyDefaultParamResult<T extends UseModalProps> = [GetPropsTuple<T>, ModalAction<never>];
export interface UseModal {
    (param?: Record<string, never>): NoParamResult;
    <T extends UseModalProps>(params: T): HasParamResult<T>;
}
declare const useModal: UseModal;
export default useModal;
