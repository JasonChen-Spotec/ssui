import React from 'react';
import SplitPane from 'assui/lib/react-split-panel';

export default () => (
  <div style={{ position: 'relative', height: 300 }}>
    <SplitPane
      split="vertical"
      minSize={50}
      maxSize={200}
      defaultSize={100}
      className="primary"
    >
      <div>min: 50px, max: 200px</div>
      <SplitPane split="horizontal">
        <div>default min: 50px</div>
        <div />
      </SplitPane>
    </SplitPane>
  </div>
);
