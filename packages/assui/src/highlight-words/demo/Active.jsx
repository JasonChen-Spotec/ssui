import React from 'react';
import { HighlightWords } from 'assui';
import { Input, Row, Col } from 'antd';
import styles from './index.css';

export default class HighlighterExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '的 上 不停',
      textToHighlight: `池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有那蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年`,
      activeIndex: -1,
    };
  }

  render() {
    const { activeIndex, searchText, textToHighlight } = this.state;
    const searchWords = searchText.split(/\s/).filter((word) => word);

    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <h4> 高亮字符串 </h4>
            <Input
              name="searchTerms"
              value={searchText}
              onChange={(event) => this.setState({ searchText: event.target.value })}
            />
          </Col>
          <Col span={6}>
            <h4> Active Index </h4>
            <Input
              name="activeIndex"
              value={activeIndex}
              onChange={(event) => this.setState({ activeIndex: parseInt(event.target.value, 10) })}
              type="number"
            />
          </Col>
        </Row>

        <h4 style={{ marginTop: 20 }}> 输入文档 </h4>
        <Input.TextArea
          name="textToHighlight"
          value={textToHighlight}
          onChange={(event) => this.setState({ textToHighlight: event.target.value })}
        />

        <h4 style={{ marginTop: 20 }}> 输出 </h4>

        <HighlightWords
          activeClassName={styles.active}
          activeIndex={activeIndex}
          highlightClassName={styles.highlight}
          searchWords={searchWords}
          textToHighlight={textToHighlight}
        />
      </div>
    );
  }
}
