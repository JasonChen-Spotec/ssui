import React from 'react';
import { Button, Radio } from 'antd';
import { RcTransitionGroup } from 'assui';
import './index.css';

const { SwitchTransition, CSSTransition } = RcTransitionGroup;

export default function App() {
  const [mode, setMode] = React.useState('out-in');
  const [state, setState] = React.useState(true);
  return (
    <>
      <div className="label">Mode:</div>
      <div className="modes">
        <Radio.Group
          onChange={(e) => {
            setMode(e.target.value);
          }}
          value={mode}
        >
          <Radio value="out-in">out-in</Radio>
          <Radio value="in-out">in-out</Radio>
        </Radio.Group>
      </div>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames="fade"
          >
            <div className="button-container">
              <Button type="primary" onClick={() => setState((state) => !state)}>
                {state ? 'Hello, world!' : 'Goodbye, world!'}
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
