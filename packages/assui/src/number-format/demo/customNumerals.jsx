import { NumberFormat } from 'assui';

const persianNumeral = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
const Demo = () => <NumberFormat customNumerals={persianNumeral} />;

export default Demo;
