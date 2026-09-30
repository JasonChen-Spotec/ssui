import type { ConfigProviderProps } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
export declare function isPresetSize(size?: SizeType | string | number): size is SizeType;
export {};
