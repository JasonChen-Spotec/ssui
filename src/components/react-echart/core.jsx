import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import useMount from 'ahooks/lib/useMount';
import useUpdateEffect from 'ahooks/lib/useUpdateEffect';
import classNames from 'classnames';

const ReactEchartCore = props => {
  const { className, option, style, echarts, notMerge, lazyUpdate,
    silent, onEvents, opts, theme
  } = props;
  const chartDomRef = useRef(null);
  const chartRef = useRef({});

  const bindEvents = () => {
    const bindEventFunc = (eventName, func) => {
      if (typeof eventName === 'string' && typeof func === 'function') {
        chartRef.current.on(eventName, param => {
          func(param, chartRef.current);
        });
      }
    };

    for (const eventName in onEvents) {
      if (Object.prototype.hasOwnProperty.call(onEvents, eventName)) {
        bindEventFunc(eventName, onEvents[eventName]);
      }
    }
  };

  const initEcharts = () => {
    chartRef.current = echarts.init(chartDomRef.current);
  };

  const renderEchartDom = () => {
    chartRef.current.setOption(option, notMerge, lazyUpdate, silent);
  };

  const dispose = () => {
    chartRef.current.dispose(chartDomRef.current);
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
  }, [option, notMerge, lazyUpdate, silent]);


  // need resize
  const resizeChart = () => {
    chartRef.current.resize();
  };

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      resizeChart();
    });

    resizeObserver.observe(chartDomRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useUpdateEffect(() => {
    resizeChart();
  }, [style, className]);

  const finalyStyle = {
    width: '100%',
    height: '100%',
    ...style
  };

  return (
    <div
      ref={chartDomRef}
      style={finalyStyle}
      className={classNames('react-echart', className)}
    />
  );
};

ReactEchartCore.propTypes = {
  option: PropTypes.object.isRequired,
  echarts: PropTypes.object,
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onEvents: PropTypes.object,
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.oneOf(['canvas', 'svg']),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null, undefined, 'auto'])
    ]),
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null, undefined, 'auto'])
    ])
  })
};

ReactEchartCore.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: {},
  className: '',
  theme: null,
  onEvents: {},
  opts: {}
};

export default ReactEchartCore;
