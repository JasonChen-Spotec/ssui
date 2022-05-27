/**
 * title: 根据hash格式化或者传入的function格式化内容
 * desc: 通过 format  (#### #### #### ####)Or Function
 */
import { NumberFormatInput } from 'assui';

const Demo = () => {
  const onValueChange = (value) => {
    console.log('---', value);
  };
  return <NumberFormatInput onValueChange={onValueChange} format="#### #### #### ####" />;
};

export default Demo;
