export default RegexInput;
declare function RegexInput(props: any): JSX.Element;
declare namespace RegexInput {
    export const displayName: string;
    export namespace propTypes {
        const regexes: PropTypes.Requireable<(string | object | null | undefined)[]>;
    }
    export { regexPatterns as patterns };
}
import PropTypes from "prop-types";
import * as regexPatterns from "./regexPattern";
