import { NumberFormat } from 'assui';

const Demo = () => (
  <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
);
export default Demo;
