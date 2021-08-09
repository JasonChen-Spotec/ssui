export default ReactEchartCore;
declare function ReactEchartCore(props: any): JSX.Element;
declare namespace ReactEchartCore {
    namespace propTypes {
        const option: PropTypes.Validator<object>;
        const echarts: PropTypes.Requireable<object>;
        const notMerge: PropTypes.Requireable<boolean>;
        const lazyUpdate: PropTypes.Requireable<boolean>;
        const style: PropTypes.Requireable<object>;
        const className: PropTypes.Requireable<string>;
        const theme: PropTypes.Requireable<string | object>;
        const onEvents: PropTypes.Requireable<object>;
        const opts: PropTypes.Requireable<PropTypes.InferProps<{
            devicePixelRatio: PropTypes.Requireable<number>;
            renderer: PropTypes.Requireable<string>;
            width: PropTypes.Requireable<string | number>;
            height: PropTypes.Requireable<string | number>;
        }>>;
    }
    namespace defaultProps {
        const echarts_1: {};
        export { echarts_1 as echarts };
        const notMerge_1: boolean;
        export { notMerge_1 as notMerge };
        const lazyUpdate_1: boolean;
        export { lazyUpdate_1 as lazyUpdate };
        const style_1: {};
        export { style_1 as style };
        const className_1: string;
        export { className_1 as className };
        const theme_1: null;
        export { theme_1 as theme };
        const onEvents_1: {};
        export { onEvents_1 as onEvents };
        const opts_1: {};
        export { opts_1 as opts };
    }
}
import PropTypes from "prop-types";
