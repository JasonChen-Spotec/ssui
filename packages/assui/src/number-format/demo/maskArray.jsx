/**
 * title:  mask
 * desc: 未输入时 format 的占位列表
 */

import { NumberFormat } from 'assui';

const Demo = () => <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} />;

export default Demo;
