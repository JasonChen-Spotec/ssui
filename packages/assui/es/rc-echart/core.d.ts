import type { EChartsOption } from 'echarts';
export type Opts = {
  devicePixelRatio?: number;
  renderer?: 'canvas' | 'svg';
  width?: number | null | undefined | 'auto';
  height?: number | null | undefined | 'auto';
  locale?: string;
};
export interface RcEchartPropsType {
  option: EChartsOption;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  echarts: any;
  className?: string;
  theme?: string;
  onEvents?: Record<string, Function>;
  opts?: Opts;
}
declare const ReactEchartCore: (props: RcEchartPropsType) => JSX.Element;
export default ReactEchartCore;
