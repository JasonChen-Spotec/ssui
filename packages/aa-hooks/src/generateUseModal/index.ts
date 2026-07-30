import type { ResetProps, OnlyDefaultParamResult, HasParamResult } from '../useModal/index';
import useModal, { defaultProps } from '../useModal/index'


interface UseModalFunc<K extends ResetProps>{
  (params?: Record<string, never>): OnlyDefaultParamResult<{[defaultProps]: K}>; 
  <T extends ResetProps>(params: T): HasParamResult<T & {[defaultProps]: K}>
}

const generateUseModal = <K extends ResetProps>(defaultParams: K) => {
  // eslint-disable-next-line max-len
  const useModalFunc: UseModalFunc<K> = <T extends ResetProps>(newProps?: T) => useModal({ [defaultProps]: defaultParams, ...newProps })
  return useModalFunc
}

export default generateUseModal;