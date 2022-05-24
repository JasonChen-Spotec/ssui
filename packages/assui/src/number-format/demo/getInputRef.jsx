import { NumberFormat } from 'assui';

const getInputRef = (el) => {
  console.log(el);
};

const Demo = () => <NumberFormat getInputRef={getInputRef} format="#### #### #### ####" />;
export default Demo;
