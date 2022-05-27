/**
 * title:  getInputRef
 * desc: 获取Ref
 */
import { NumberFormatInput } from 'assui';

const getInputRef = (el) => {
  console.log(el);
};

const Demo = () => <NumberFormatInput getInputRef={getInputRef} format="#### #### #### ####" />;
export default Demo;
