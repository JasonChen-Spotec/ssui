import { NumberFormatInput } from 'assui';

const Demo = () => (
  <NumberFormatInput value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
);
export default Demo;
