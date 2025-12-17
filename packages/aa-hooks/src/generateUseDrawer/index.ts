import type { ResetProps, OnlyDefaultParamResult, HasParamResult } from '../useDrawer/index';
import useDrawer, { defaultProps } from '../useDrawer/index'


interface UseDrawerFunc<K extends ResetProps>{
  (params?: Record<string, never>): OnlyDefaultParamResult<{[defaultProps]: K}>; 
  <T extends ResetProps>(params: T): HasParamResult<T & {[defaultProps]: K}>
}

const generateUseDrawer = <K extends ResetProps>(defaultParams: K) => {
  // eslint-disable-next-line max-len
  const useDrawerFunc: UseDrawerFunc<K> = <T extends ResetProps>(newProps?: T) => useDrawer({ [defaultProps]: defaultParams, ...newProps })
  return useDrawerFunc
}

export default generateUseDrawer;