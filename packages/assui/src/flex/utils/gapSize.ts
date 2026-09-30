import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

export function isPresetSize(size?: SizeType | string | number): size is SizeType {
  return ['small', 'middle', 'large'].includes(size as string);
}
