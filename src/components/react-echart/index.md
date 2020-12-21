---
title: react-echart
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /components
  order: 1
---

## 1. 使用默认全量导入的echarts
<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />

## 公共API(core)
属性如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| echarts | 原生echarts对象 | echart | core是空， index是全量echarts |
| option | `echartsInstance.setOption` 第一个参数(option) | Object | - |
| notMerge | `echartsInstance.setOption` 第二个参数(notMerge) | Boolean | `false` |
| lazyUpdate | `echartsInstance.setOption` 第三个参数(lazyUpdate) | Boolean | `false` |
| onEvents | `echartsInstance.on` 需要监听的事件函数 | Object | {} |
| className | css class name | String | - |
| style | 内联样式 | Object | - |


## 1. 默认全量导入echarts

```js
import React from 'react';
import ReactEchart from 'assui/lib/components/react-echart'

<ReactEchart option={option} />
```
## 2. 导入需要的echarts modules，减小打包大小

```js
import React from 'react';
import ReactEchartsCore from 'assui/lib/components/react-echart/lib/core';

import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';

// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/grid';
// import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';

import 'echarts/lib/component/title';

// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';

// import 'zrender/lib/vml/vml';

// The usage of ReactEchartsCore are same with above.
<ReactEchartsCore echarts={echarts} option={this.getOption()}
```
