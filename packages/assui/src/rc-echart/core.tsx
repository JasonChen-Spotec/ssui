/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React, { useRef, useLayoutEffect } from 'react';
import useMount from 'ahooks/lib/useMount';
import useUpdateEffect from 'ahooks/lib/useUpdateEffect';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import { ECharts as EChartsInterfaceType, EChartsOption } from 'echarts';

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
  style?: React.CSSProperties;
  className?: string;
  theme?: string;
  onEvents?: Record<string, Function>;
  opts?: Opts;
}

const ReactEchartCore = (props: RcEchartPropsType) => {
  const { className, option, style, echarts, notMerge, lazyUpdate, onEvents, opts, theme } = props;
  const chartDomRef = useRef<HTMLDivElement>();
  const chartRef = useRef<EChartsInterfaceType>();

  const bindEvents = () => {
    const bindEventFunc = (eventName: string, func: Function) => {
      if (typeof eventName === 'string' && typeof func === 'function') {
        if (chartRef.current) {
          chartRef.current.on(eventName, (param) => {
            func(param, chartRef.current);
          });
        }
      }
    };

    for (const eventName in onEvents) {
      if (Object.prototype.hasOwnProperty.call(onEvents, eventName)) {
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
    renderEchartDom();
    bindEvents();
  }, [theme, opts, onEvents]);

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

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      resizeChart();
    });
    if (chartDomRef.current) {
      resizeObserver.observe(chartDomRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useUpdateEffect(() => {
    resizeChart();
  }, [style, className]);

  const finallyStyle = {
    width: '100%',
    height: '100%',
    ...style,
  };

  return (
    <div
      ref={(node: HTMLDivElement) => {
        chartDomRef.current = node;
      }}
      style={finallyStyle}
      className={classNames('react-echart', className)}
    />
  );
};

ReactEchartCore.defaultProps = {
  notMerge: false,
  lazyUpdate: false,
  style: {},
  className: '',
  onEvents: {},
  opts: {},
};

export default ReactEchartCore;
