import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import { RcMotion } from 'assui';
import './CSSMotion.less';

interface DemoState {
  show: boolean;
  forceRender: boolean;
  motionLeaveImmediately: boolean;
  removeOnLeave: boolean;
  hasMotionClassName: boolean;
  prepare: boolean;
}

const Div = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  React.useEffect(() => {
    console.log('DIV >>> Mounted!');

    return () => {
      console.log('DIV >>> UnMounted!');
    };
  }, []);

  return <div {...props} ref={ref} />;
});

class Demo extends React.Component<{}, DemoState> {
  state: DemoState = {
    show: true,
    forceRender: false,
    motionLeaveImmediately: false,
    removeOnLeave: true,
    hasMotionClassName: true,
    prepare: false,
  };

  onTrigger = () => {
    setTimeout(() => {
      this.setState(({ show }) => ({ show: !show }));
    }, 100);
  };

  onTriggerDelay = () => {
    this.setState(({ prepare }) => ({ prepare: !prepare }));
  };

  onForceRender = () => {
    this.setState(({ forceRender }) => ({ forceRender: !forceRender }));
  };

  onRemoveOnLeave = () => {
    this.setState(({ removeOnLeave }) => ({ removeOnLeave: !removeOnLeave }));
  };

  onTriggerClassName = () => {
    this.setState(({ hasMotionClassName }) => ({
      hasMotionClassName: !hasMotionClassName,
    }));
  };

  onCollapse = () => ({ height: 0 });

  onMotionLeaveImmediately = () => {
    this.setState(({ motionLeaveImmediately }) => ({
      motionLeaveImmediately: !motionLeaveImmediately,
    }));
  };

  render() {
    const { show, hasMotionClassName } = this.state;

    return (
      <div>
        <Button onClick={this.onTrigger}>Show Component {show}</Button>

        <div className="grid">
          <div>
            <h2>With Transition Class</h2>
            <RcMotion
              visible={show}
              motionName={hasMotionClassName ? 'transition' : null}
              leavedClassName="hidden"
              onAppearStart={this.onCollapse}
              onEnterStart={this.onCollapse}
              onLeaveActive={this.onCollapse}
            >
              {({ style, className }, ref) => (
                <Div ref={ref} className={classNames('demo-block', className)} style={style} />
              )}
            </RcMotion>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
