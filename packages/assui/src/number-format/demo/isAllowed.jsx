import { NumberFormat } from 'assui';

const MAX_VAL = 1400;
const withValueLimit = ({ floatValue }) => floatValue <= MAX_VAL;
const Demo = () => <NumberFormat value={12} isAllowed={withValueLimit} />;

export default Demo;
