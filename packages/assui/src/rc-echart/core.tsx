import React, { useEffect, useRef } from 'react';
import useMount from 'ahooks/lib/useMount';
import useUpdateEffect from 'ahooks/lib/useUpdateEffect';
import classNames from 'classnames';
import type { ECharts as EChartsInterfaceType, EChartsOption } from 'echarts';

export type Opts = {
  devicePixelRatio?: number;
  renderer?: 'canvas' | 'svg';
  width?: number | null | undefined | 'auto';
  height?: number | null | undefined | 'auto';
  locale?: string;
};

/** echarts 事件回调：(事件参数, 图表实例) => void */
export type EchartEventFunc = (param: any, chart: any) => void;

export interface RcEchartPropsType {
  option: EChartsOption;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  echarts: any;
  className?: string;
  theme?: string;
  onEvents?: Record<string, EchartEventFunc>;
  opts?: Opts;
}

const initEmptyObject: Record<string, EchartEventFunc> = {};

const ReactEchartCore = (props: RcEchartPropsType) => {
  const {
    className = '',
    option,
    echarts,
    notMerge = false,
    lazyUpdate = false,
    onEvents = initEmptyObject,
    opts = initEmptyObject,
    theme,
  } = props;
  const chartDomRef = useRef<HTMLDivElement>();
  const chartRef = useRef<EChartsInterfaceType>();

  const bindEvents = () => {
    const bindEventFunc = (eventName: string, func: EchartEventFunc) => {
      if (typeof eventName === 'string' && typeof func === 'function') {
        if (chartRef.current) {
          chartRef.current.on(eventName, (param) => {
            func(param, chartRef.current);
          });
        }
      }
    };

    for (const eventName in onEvents) {
      if (Object.hasOwn(onEvents, eventName)) {
        bindEventFunc(eventName, onEvents[eventName]);
      }
    }
  };

  const initEcharts = () => {
    chartRef.current = echarts.init(chartDomRef.current, theme, opts);
  };

  const renderEchartDom = () => {
    if (chartRef.current) {
      chartRef.current.setOption(option, notMerge, lazyUpdate);
    }
  };

  const dispose = () => {
    if (chartRef.current) {
      chartRef.current.dispose();
    }
  };

  // first add
  useMount(() => {
    initEcharts();
    renderEchartDom();
    bindEvents();
  });

  // need reBuild
  useUpdateEffect(() => {
    dispose();
    initEcharts();
    renderEchartDom();
    bindEvents();
  }, [theme, opts]);

  // need setOption
  useUpdateEffect(() => {
    renderEchartDom();
  }, [option, notMerge, lazyUpdate]);

  // need resize
  const resizeChart = () => {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  };

  // 页面卸载，销毁监听
  useEffect(() => {
    // 监听echartsResize函数，实现图表自适应
    window.addEventListener('resize', resizeChart);
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useUpdateEffect(() => {
    resizeChart();
  }, [className]);

  const defaultStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div
      ref={(node: HTMLDivElement) => {
        chartDomRef.current = node;
      }}
      style={defaultStyle}
      className={classNames('react-echart', className)}
    />
  );
};

export default ReactEchartCore;
