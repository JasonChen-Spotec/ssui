/**
 * title: 定义千位分组方式
 * desc: 通过 thousandsGroupStyle  千式（千）印度式（十万）：，中国式（万）['thousand', 'lakh', 'wan']
 */

import { NumberFormatInput } from 'assui';

const Demo = () => (
  <NumberFormatInput
    thousandSeparator={true}
    thousandsGroupStyle="wan"
    prefix={'¥'}
    value={123456789}
  />
);

export default Demo;
