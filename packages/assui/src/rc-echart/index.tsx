import React from 'react';
import * as echarts from 'echarts';
import ReactEchartCore from './core';

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
  style?: React.CSSProperties;
  className?: string;
  theme?: string;
  onEvents?: Record<string, Function>;
  opts?: Opts;
}

const ReactEcharts = (props: RcEchartPropsType) => <ReactEchartCore echarts={echarts} {...props} />;

export default ReactEcharts;
