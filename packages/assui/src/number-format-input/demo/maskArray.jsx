/**
 * title:  mask
 * desc: 未输入时 format 的占位列表
 */

import { NumberFormatInput } from 'assui';

const Demo = () => {
  const onValueChange = (value) => {
    console.log('---', value);
  };

  return (
    <NumberFormatInput
      onValueChange={onValueChange}
      format="##/##"
      placeholder="MM/YY"
      mask={['M', 'M', 'Y', 'Y']}
    />
  );
};

export default Demo;
