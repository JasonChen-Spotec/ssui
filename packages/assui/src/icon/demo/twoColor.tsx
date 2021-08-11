import React from 'react';
import { Row, Col, Divider } from 'antd';
import { Icon } from 'assui';
import CheckCircle from './svg/check-circle-filled.svg';

export default () => (
  <Row gutter={16}>
    <Col className="gutter-row" span={2}>
      <Icon style={{ width: 34, color: '#d8d8d8', fill: 'green' }} component={CheckCircle} spin />
    </Col>
    <Col className="gutter-row" span={2}>
      <Icon style={{ width: 34, color: '#fff', fill: 'red' }} component={CheckCircle} />
    </Col>
  </Row>
);
