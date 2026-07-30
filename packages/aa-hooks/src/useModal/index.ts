import type { ModalProps } from 'antd/lib/modal';
import { omit } from 'lodash';
import type React from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

export const defaultProps = Symbol('defaultProps');
export type OptionalizeTuple<T> = T extends Record<string, any>
  ? { [K in keyof T]?: T[K] }
  : undefined;

export type ModalAction<T> = {
  close: () => void;
  open: (params?: T) => void;
};
export type ResetProps = Omit<ModalProps, 'open' | 'children' | 'onClose'> & {
  renderChildren?: <T>(v: ModalAction<T>) => React.ReactElement;
};


export type UseModalProps = ResetProps & {
  [defaultProps]?: ResetProps;
}

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
type OpenProps = {open: boolean, onCancel: () => void}
// eslint-disable-next-line max-len
type GetChildProps<T extends UseModalProps | unknown> = 'renderChildren' extends keyof T ? {children: React.ReactElement} : unknown;
// eslint-disable-next-line max-len
type GetDefaultProps<T extends UseModalProps> = typeof defaultProps extends keyof T ? {[K in keyof Omit<T[typeof defaultProps], 'renderChildren'>]: T[typeof defaultProps][K];} & GetChildProps<T[typeof defaultProps]> : unknown;
// eslint-disable-next-line max-len
type GetPropsTuple<T extends UseModalProps> = Prettify<OpenProps & GetChildProps<T> & Omit<T, 'renderChildren' | typeof defaultProps | keyof T[typeof defaultProps]> & GetDefaultProps<T>>;

export type NoParamResult = [GetPropsTuple<Record<never, never>>, ModalAction<never>];
// eslint-disable-next-line max-len
export type HasParamResult<T extends UseModalProps> = [GetPropsTuple<T>, ModalAction<OptionalizeTuple<Omit<T, typeof defaultProps>>>] 

// eslint-disable-next-line max-len
export type OnlyDefaultParamResult<T extends UseModalProps> = [GetPropsTuple<T>, ModalAction<never>] 

export interface UseModal {
  (param?: Record<string, never>): NoParamResult;
  <T extends UseModalProps>(params: T): HasParamResult<T>
}

const useModal: UseModal = <T extends UseModalProps>(
  props?: T,
): [GetPropsTuple<T>, ModalAction<OptionalizeTuple<T>>] => {
  const [open, setOpen] = useState(false);
  const { [defaultProps]: defaultParams, ...restState } = props ?? {};
  const restProps = useRef<typeof restState>(restState)

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const openModal = useCallback(
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

  const actionRef = useRef<ModalAction<OptionalizeTuple<typeof restState>>>({
    close() {
      closeModal();
    },
    open(params?: OptionalizeTuple<typeof restState>) {
      openModal(params);
    },
  });
  const modalProps = useMemo<GetPropsTuple<T>>(() => {
    const data: ModalProps = {
      open,
      onCancel: closeModal,
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
  }, [closeModal, defaultParams, open, restProps]);
  return [modalProps, actionRef.current];
}

export default useModal;