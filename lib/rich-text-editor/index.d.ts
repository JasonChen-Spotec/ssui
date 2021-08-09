export default RichTextEditor;
declare function RichTextEditor(props: any): JSX.Element;
declare namespace RichTextEditor {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const data: PropTypes.Requireable<string>;
        const readOnly: PropTypes.Requireable<boolean>;
        const height: PropTypes.Requireable<string>;
        const minHeight: PropTypes.Requireable<string>;
        const maxHeight: PropTypes.Requireable<string>;
        const config: PropTypes.Requireable<PropTypes.InferProps<{
            language: PropTypes.Requireable<string>;
            toolbar: PropTypes.Requireable<PropTypes.InferProps<{
                items: PropTypes.Requireable<any[]>;
            }>>;
            image: PropTypes.Requireable<PropTypes.InferProps<{
                toolbar: PropTypes.Requireable<any[]>;
            }>>;
            table: PropTypes.Requireable<PropTypes.InferProps<{
                contentToolbar: PropTypes.Requireable<any[]>;
            }>>;
        }>>;
        const generateConfig: PropTypes.Requireable<(...args: any[]) => any>;
        const onReady: PropTypes.Requireable<(...args: any[]) => any>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const onError: PropTypes.Requireable<(...args: any[]) => any>;
    }
    const displayName: string;
}
import PropTypes from "prop-types";
