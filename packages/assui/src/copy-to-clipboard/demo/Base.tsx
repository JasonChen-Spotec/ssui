import React from 'react';
import { Button, Input, message } from 'antd';
import { CopyToClipboard } from 'assui';

export default class App extends React.PureComponent {
  state = { value: 'some\ntext' };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onCopy = () => {
    message.success('复制成功');
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <section style={{ marginBottom: 20 }}>
          <Input.TextArea onChange={this.onChange} rows={4} cols={10} value={value} />
        </section>
        <CopyToClipboard onCopy={this.onCopy} text={value}>
          <Button type="primary">复制</Button>
        </CopyToClipboard>
      </div>
    );
  }
}
