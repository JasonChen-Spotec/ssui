import React from 'react';
import * as echarts from 'echarts';
import type { EchartEventFunc } from './core';
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
  className?: string;
  theme?: string;
  onEvents?: Record<string, EchartEventFunc>;
  opts?: Opts;
}

const RcEcharts = (props: RcEchartPropsType) => (
  <RcEchartCore echarts={echarts} {...props} />
);

export default RcEcharts;
