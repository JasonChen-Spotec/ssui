import { NumberFormat } from 'assui';

const Demo = () => <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} />;

export default Demo;
