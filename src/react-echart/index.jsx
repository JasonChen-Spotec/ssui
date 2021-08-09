import React from 'react';
import echarts from 'echarts';
import ReactEchartCore from './core';

const ReactEcharts = props => <ReactEchartCore echarts={echarts} {...props} />;

export default ReactEcharts;
