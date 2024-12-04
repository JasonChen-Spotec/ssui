import React from 'react';
import { CountDown } from 'assui';

export default class App extends React.PureComponent {
  render() {
    return (
      <div style={{ color: 'red' }}>
        <CountDown
          options={{
            leftTime: 2345395 * 1000,
          }}
          render={({ days, hours, minutes, seconds }) =>
            `${days} 天 ${hours}:${minutes}:${seconds}`
          }
        />
      </div>
    );
  }
}
