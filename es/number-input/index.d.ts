export default NumberInput;
declare function NumberInput(props: any): JSX.Element;
declare namespace NumberInput {
    namespace defaultProps {
        export { INT as numberType };
        export const enableMinus: boolean;
        export const precision: number;
    }
}
import { INT } from "./const/numberType";
