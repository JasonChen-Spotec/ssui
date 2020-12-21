import React from 'react';
import TextLoop from 'assui/lib/components/text-loop';

const Base = () => (
  <div>
    <TextLoop>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);

const Fast = () => (
  <div>
    <TextLoop interval={1000}>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);

const Smooth = () => (
  <div>
    <TextLoop
      springConfig={{ stiffness: 70, damping: 31 }}
      adjustingSpeed={500}
    >
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);

const Variable = () => (
  <div>
    <TextLoop interval={[3000, 1000]}>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
    in every category.
  </div>
);

const Masked = () => (
  <div>
    <TextLoop mask>
      <span>Trade faster</span>
      <span>Increase sales</span>
      <span>Stock winners</span>
    </TextLoop>
      in every category.
  </div>
);

const App = () => {
  return (
    <div>
      <Base />
      <Fast />
      <Smooth />
      <Variable />
      <Masked />
    </div>
  );
};

export default App;
