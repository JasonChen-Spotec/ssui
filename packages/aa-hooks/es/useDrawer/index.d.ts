import type { DrawerProps } from 'antd/lib/drawer';
import type React from 'react';
export declare const defaultProps: unique symbol;
export type OptionalizeTuple<T> = T extends Record<string, any> ? {
    [K in keyof T]?: T[K];
} : undefined;
export type DrawerAction<T> = {
    close: () => void;
    open: (params?: T) => void;
};
export type ResetProps = Omit<DrawerProps, 'open' | 'children' | 'onClose'> & {
    renderChildren?: <T>(v: DrawerAction<T>) => React.ReactElement;
};
export type UseDrawerProps = ResetProps & {
    [defaultProps]?: ResetProps;
};
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type OpenProps = {
    open: boolean;
    onClose: () => void;
};
type GetChildProps<T extends UseDrawerProps | unknown> = 'renderChildren' extends keyof T ? {
    children: React.ReactElement;
} : unknown;
type GetDefaultProps<T extends UseDrawerProps> = typeof defaultProps extends keyof T ? {
    [K in keyof Omit<T[typeof defaultProps], 'renderChildren'>]: T[typeof defaultProps][K];
} & GetChildProps<T[typeof defaultProps]> : unknown;
type GetPropsTuple<T extends UseDrawerProps> = Prettify<OpenProps & GetChildProps<T> & Omit<T, 'renderChildren' | typeof defaultProps | keyof T[typeof defaultProps]> & GetDefaultProps<T>>;
export type NoParamResult = [GetPropsTuple<Record<never, never>>, DrawerAction<never>];
export type HasParamResult<T extends UseDrawerProps> = [GetPropsTuple<T>, DrawerAction<OptionalizeTuple<Omit<T, typeof defaultProps>>>];
export type OnlyDefaultParamResult<T extends UseDrawerProps> = [GetPropsTuple<T>, DrawerAction<never>];
export interface UseDrawer {
    (param?: Record<string, never>): NoParamResult;
    <T extends UseDrawerProps>(params: T): HasParamResult<T>;
}
declare const useDrawer: UseDrawer;
export default useDrawer;
