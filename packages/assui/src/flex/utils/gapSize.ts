/* eslint-disable max-len */
import type { SizeType } from 'antd/lib/config-provider/SizeContext';

export function isPresetSize(size?: SizeType | string | number): size is SizeType {
  return ['small', 'middle', 'large'].includes(size as string);
}
