import { NumberFormat } from 'assui';

const Demo = () => (
  <NumberFormat thousandSeparator={true} thousandsGroupStyle="wan" prefix={'¥'} value={123456789} />
);

export default Demo;
