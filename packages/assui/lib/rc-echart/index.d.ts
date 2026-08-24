import * as echarts from 'echarts';
import type { EchartEventFunc } from './core';
export type Opts = {
    devicePixelRatio?: number;
    renderer?: 'canvas' | 'svg';
    width?: number | null | undefined | 'auto';
    height?: number | null | undefined | 'auto';
    locale?: string;
};
export interface RcEchartPropsType {
    option: echarts.EChartsOption;
    notMerge?: boolean;
    lazyUpdate?: boolean;
    className?: string;
    theme?: string;
    onEvents?: Record<string, EchartEventFunc>;
    opts?: Opts;
}
declare const RcEcharts: (props: RcEchartPropsType) => import("react/jsx-runtime").JSX.Element;
export default RcEcharts;
