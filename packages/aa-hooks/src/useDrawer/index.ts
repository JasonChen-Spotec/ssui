import type { DrawerProps } from 'antd/lib/drawer';
import { omit } from 'lodash';
import type React from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export const defaultProps = Symbol('defaultProps');
export type OptionalizeTuple<T> = T extends Record<string, any>
  ? { [K in keyof T]?: T[K] }
  : undefined;

export type DrawerAction<T> = {
  close: () => void;
  open: (params?: T) => void;
};
export type ResetProps = Omit<DrawerProps, 'open' | 'children' | 'onClose'> & {
  renderChildren?: <T>(v: DrawerAction<T>) => React.ReactElement;
};


export type UseDrawerProps = ResetProps & {
  [defaultProps]?: ResetProps;
}

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
type OpenProps = {open: boolean, onClose: () => void}
// eslint-disable-next-line max-len
type GetChildProps<T extends UseDrawerProps | unknown> = 'renderChildren' extends keyof T ? {children: React.ReactElement} : unknown;
// eslint-disable-next-line max-len
type GetDefaultProps<T extends UseDrawerProps> = typeof defaultProps extends keyof T ? {[K in keyof Omit<T[typeof defaultProps], 'renderChildren'>]: T[typeof defaultProps][K];} & GetChildProps<T[typeof defaultProps]> : unknown;
// eslint-disable-next-line max-len
type GetPropsTuple<T extends UseDrawerProps> = Prettify<OpenProps & GetChildProps<T> & Omit<T, 'renderChildren' | typeof defaultProps | keyof T[typeof defaultProps]> & GetDefaultProps<T>>;

export type NoParamResult = [GetPropsTuple<Record<never, never>>, DrawerAction<never>];
// eslint-disable-next-line max-len
export type HasParamResult<T extends UseDrawerProps> = [GetPropsTuple<T>, DrawerAction<OptionalizeTuple<Omit<T, typeof defaultProps>>>] 

// eslint-disable-next-line max-len
export type OnlyDefaultParamResult<T extends UseDrawerProps> = [GetPropsTuple<T>, DrawerAction<never>] 

export interface UseDrawer {
  (param?: Record<string, never>): NoParamResult;
  <T extends UseDrawerProps>(params: T): HasParamResult<T>
}

const useDrawer: UseDrawer = <T extends UseDrawerProps>(
  props?: T,
): [GetPropsTuple<T>, DrawerAction<OptionalizeTuple<T>>] => {
  const [open, setOpen] = useState(false);
  const { [defaultProps]: defaultParams, ...restState } = props ?? {};
  const restProps = useRef<typeof restState>(restState)

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const openDrawer = useCallback(
    (params?: OptionalizeTuple<typeof restState>) => {
      if (params) {
        restProps.current = { ...restState, ...params };
      } else {
        restProps.current = restState;
      }
      setOpen(true);
    },
    [restState],
  );

  const actionRef = useRef<DrawerAction<OptionalizeTuple<typeof restState>>>({
    close() {
      closeDrawer();
    },
    open(params?: OptionalizeTuple<typeof restState>) {
      openDrawer(params);
    },
  });
  const drawerProps = useMemo<GetPropsTuple<T>>(() => {
    const data: DrawerProps = {
      open,
      onClose: closeDrawer,
      ...omit(defaultParams, 'renderChildren'),
      ...omit(restProps.current, 'renderChildren'),
    };
    if(defaultParams && 'renderChildren' in defaultParams) {
      data.children = defaultParams.renderChildren?.(actionRef.current);
    }
    if ('renderChildren' in restProps.current) {
      data.children = restProps.current.renderChildren?.(actionRef.current);
    }
    return data as GetPropsTuple<T>;
  }, [closeDrawer, defaultParams, open, restProps]);
  return [drawerProps, actionRef.current];
}

export default useDrawer;