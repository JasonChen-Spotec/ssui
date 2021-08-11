import React from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'assui';
import CheckCircle from './svg/check-circle-filled.svg';

export default () => (
  <Row gutter={16}>
    <Col className="gutter-row" span={2}>
      <Icon style={{ width: 34, color: '#eb2f96', fill: '#52c41a' }} component={CheckCircle} spin />
    </Col>
    <Col className="gutter-row" span={2}>
      <Icon style={{ width: 34, color: 'green', fill: 'red' }} component={CheckCircle} />
    </Col>
  </Row>
);
