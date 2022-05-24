/**
 * title:  thousandSeparator
 * desc: 在数字上添加千位分隔符 单个字符串或布尔值 true（true 默认为 ,）
 */

import { NumberFormat } from 'assui';

const Demo = () => <NumberFormat thousandSeparator={true} prefix={'$'} />;

export default Demo;
