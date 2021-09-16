import React from 'react';
import * as echarts from 'echarts';
import RcEchartCore from './core';

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

const RcEcharts = (props: RcEchartPropsType) => <RcEchartCore echarts={echarts} {...props} />;

export default RcEcharts;
