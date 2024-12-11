import React, { useState } from 'react';
import { Button } from 'antd';
import { RcEchart } from 'assui';

export default () => {
  const [height, setHeight] = useState(400);
  const option = {
    xAxis: {
      type: 'category' as const,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value' as const,
    },
    visualMap: {
      show: true,
      pieces: [
        {
          min: 0,
          max: 200,
        },
        {
          min: -200,
          max: 0,
        },
      ],
      inRange: {
        color: ['green', 'red'],
        symbol: ['diamond', 'rect'],
        symbolSize: [10],
      },
      seriesIndex: 0,
    },
    series: [
      {
        data: [120, -80, 150, -80, 70, -110, 130],
        type: 'line' as const,
        symbol: 'triangle' as const,
        symbolSize: 10,
        smooth: true,
        lineStyle: {
          width: 4,
        },
        areaStyle: {
          opacity: 0.1,
        },
        itemStyle: {
          color: (a) => {
            if (a.value < 0) {
              return '#F00';
            } else {
              return '#0Fa';
            }
          },
        },
      },
    ],
  };
  return (
    <div>
      <div />
      <Button onClick={() => setHeight(height + 10)}>增高</Button>
      <div style={{ width: '100%', height }}>
        <RcEchart option={option} />
      </div>
    </div>
  );
};
