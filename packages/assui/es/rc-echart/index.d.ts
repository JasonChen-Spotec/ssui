import * as echarts from 'echarts';
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
  onEvents?: Record<string, Function>;
  opts?: Opts;
}
declare const RcEcharts: (props: RcEchartPropsType) => JSX.Element;
export default RcEcharts;
