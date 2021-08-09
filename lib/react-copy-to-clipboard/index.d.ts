export default CopyToClipboardWrap;
declare function CopyToClipboardWrap({ children, text, tooltipTitle, onCopySuccess, tooltipProps, ...restProps }: {
    [x: string]: any;
    children: any;
    text: any;
    tooltipTitle: any;
    onCopySuccess: any;
    tooltipProps: any;
}): JSX.Element;
declare namespace CopyToClipboardWrap {
    namespace defaultProps {
        const tooltipProps: {};
    }
}
