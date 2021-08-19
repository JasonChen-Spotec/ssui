/**
 * title: 对齐滚动
 * desc: `boundary` 设置边界 是个非标准属性
 */
import { animate } from 'popmotion';
import React, { useRef } from 'react';
import { Button } from 'antd';
import Styler from 'stylefire';
import { scrollIntoView } from 'aa-utils';
import styles from './index.modules.less';

const range = ['A', 'B', 'C'];

const Demo = () => {
  const itemsDomRef = useRef({});

  const doScroll = (value) =>
    scrollIntoView(itemsDomRef.current[value], {
      behavior: (instructions) => {
        const [{ el, left }] = instructions;
        const styler = Styler(el);

        animate({
          from: el.scrollLeft,
          to: left,
          type: 'spring',
          onUpdate: (aLeft) => styler.set('scrollLeft', aLeft),
        });
      },
      boundary: document.querySelector('.example-boundary'),
      inline: 'center',
    });

  return (
    <div>
      <Button type="primary" onClick={() => doScroll('A')}>
        A
      </Button>
      <Button type="primary" onClick={() => doScroll('B')}>
        B
      </Button>
      <Button type="primary" onClick={() => doScroll('C')}>
        C
      </Button>
      <div className={styles['scroll-container']}>
        <div className={styles['custom-transition-container']}>
          {range.map((value) => (
            <div
              className={styles['transition-item']}
              key={value}
              ref={(el) => {
                itemsDomRef.current[value] = el;
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
