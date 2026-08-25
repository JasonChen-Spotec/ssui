import type { EChartsOption } from 'echarts';
export type Opts = {
    devicePixelRatio?: number;
    renderer?: 'canvas' | 'svg';
    width?: number | null | undefined | 'auto';
    height?: number | null | undefined | 'auto';
    locale?: string;
};
/** echarts 事件回调：(事件参数, 图表实例) => void */
export type EchartEventFunc = (param: any, chart: any) => void;
export interface RcEchartPropsType {
    option: EChartsOption;
    notMerge?: boolean;
    lazyUpdate?: boolean;
    echarts: any;
    className?: string;
    theme?: string;
    onEvents?: Record<string, EchartEventFunc>;
    opts?: Opts;
}
declare const ReactEchartCore: (props: RcEchartPropsType) => import("react/jsx-runtime").JSX.Element;
export default ReactEchartCore;
