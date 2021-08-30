import React from 'react';
import { SplitPane } from 'assui';

export default () => (
  <div style={{ position: 'relative', height: 300 }}>
    <SplitPane
      split="vertical"
      onResizerClick={() => console.log('onResizerClick')}
      minSize={50}
      maxSize={200}
      defaultSize={100}
      className="primary"
    >
      <div>min: 50px, max: 200px</div>
      <div>min: 50px</div>
    </SplitPane>
  </div>
);
