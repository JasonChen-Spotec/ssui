import * as React from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'assui';
import CoinCircle from './svg/coin-circle.svg';

export default () => (
  <Row gutter={16}>
    <Col className="gutter-row" span={2}>
      <Icon style={{ width: 34 }} component={CoinCircle} spin />
    </Col>
    <Col className="gutter-row" span={2}>
      <Icon style={{ width: 34 }} component={CoinCircle} />
    </Col>
  </Row>
);
