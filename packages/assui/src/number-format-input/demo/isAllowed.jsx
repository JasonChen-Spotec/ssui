/**
 * title:  isAllowed
 * desc: 检查输入值是否有效的检查函数 如果此函数返回false，则不会触发 onChange 方法
 */

import { NumberFormatInput } from 'assui';

const MAX_VAL = 1400;
const withValueLimit = ({ floatValue }) => floatValue <= MAX_VAL;
const Demo = () => <NumberFormatInput value={12} isAllowed={withValueLimit} />;

export default Demo;
