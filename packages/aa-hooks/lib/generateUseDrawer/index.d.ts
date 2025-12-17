import type { ResetProps, OnlyDefaultParamResult, HasParamResult } from '../useDrawer/index';
import { defaultProps } from '../useDrawer/index';
interface UseDrawerFunc<K extends ResetProps> {
    (params?: Record<string, never>): OnlyDefaultParamResult<{
        [defaultProps]: K;
    }>;
    <T extends ResetProps>(params: T): HasParamResult<T & {
        [defaultProps]: K;
    }>;
}
declare const generateUseDrawer: <K extends ResetProps>(defaultParams: K) => UseDrawerFunc<K>;
export default generateUseDrawer;
