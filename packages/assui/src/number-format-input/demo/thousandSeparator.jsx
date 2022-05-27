/**
 * title:  thousandSeparator
 * desc: 在数字上添加千位分隔符 单个字符串或布尔值 true（true 默认为 ,）
 */

import { NumberFormatInput } from 'assui';

const Demo = () => <NumberFormatInput thousandSeparator={true} prefix={'$'} />;

export default Demo;
