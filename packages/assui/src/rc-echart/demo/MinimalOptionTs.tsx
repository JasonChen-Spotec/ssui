import React from 'react';
import ReactEchartsCore from 'assui/lib/rc-echart/core';
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<BarSeriesOption | TitleComponentOption | GridComponentOption>;

// 注册必须的组件
echarts.use([TitleComponent, GridComponent, BarChart, CanvasRenderer]);
const option: ECOption = {
  title: {
    text: '世界人口总量',
    subtext: '数据来自网络',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['2011年', '2012年'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
    {
      name: '2012年',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    },
  ],
};

const ReactEchart = () => (
  <div style={{ height: 300 }}>
    <ReactEchartsCore echarts={echarts} option={option} />
  </div>
);

export default ReactEchart;
