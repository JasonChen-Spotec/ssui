import React from 'react';
import { RcSplitView } from 'assui';

import styles from './index.less';

const demo1 = () => {
  const minSize = 50;
  const maxSize = 200;

  return (
    <>
      <div style={{ position: 'relative', height: 300 }}>
        <RcSplitView
          onResizerClick={() => console.log('onResizerClick')}
          minSize={minSize}
          maxSize={maxSize}
          defaultSize={100}
          draggable={true}
          handleContent={<div className={styles.handle} />}
        >
          <div>{`min: ${minSize}px, max: ${maxSize}px`}</div>
          <div>min: 50px</div>
        </RcSplitView>
      </div>
    </>
  );
};

export default demo1;
