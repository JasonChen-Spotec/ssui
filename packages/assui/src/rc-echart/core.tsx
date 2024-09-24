/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React, { useRef, useLayoutEffect } from 'react';
import useMount from 'ahooks/lib/useMount';
import useUpdateEffect from 'ahooks/lib/useUpdateEffect';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import ResizeObserver from 'resize-observer-polyfill';
import type { ECharts as EChartsInterfaceType, EChartsOption } from 'echarts';

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

const initEmptyObject: Record<string, Function> = {};

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
