import type { ResetProps, OnlyDefaultParamResult, HasParamResult } from '../useModal/index';
import { defaultProps } from '../useModal/index';
interface UseModalFunc<K extends ResetProps> {
    (params?: Record<string, never>): OnlyDefaultParamResult<{
        [defaultProps]: K;
    }>;
    <T extends ResetProps>(params: T): HasParamResult<T & {
        [defaultProps]: K;
    }>;
}
declare const generateUseModal: <K extends ResetProps>(defaultParams: K) => UseModalFunc<K>;
export default generateUseModal;
