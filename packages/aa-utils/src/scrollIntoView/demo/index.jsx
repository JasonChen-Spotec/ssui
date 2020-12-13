import React from 'react';
import { Input, Select, Form, Button, Row, Col } from 'antd';
import scrollIntoView from '../';
import './index.less';

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  const onFinish = (values) => {
    const container = document.querySelector('#container');
    const targetDom = document.querySelector('#ex1');
    scrollIntoView(targetDom, container, values);
  }
  return (
    <div>
    <Row>
        <Col span={8}>
          <Form
            {...layout}
            initialValues={
              {
                offsetTop: 0,
                offsetLeft: 0,
                offsetBottom: 0,
                offsetRight: 0
              }
            }
            onFinish={onFinish}
          >
            <Form.Item name="alignWithLeft" label="alignWithLeft">
              <Select>
                <Option value={undefined}>undefined</Option>
                <Option value={true}>true</Option>
                <Option value={false}>false</Option>
              </Select>
            </Form.Item>
            <Form.Item name="alignWithTop" label="alignWithTop">
              <Select>
                <Option value={undefined}>undefined</Option>
                <Option value={true}>true</Option>
                <Option value={false}>false</Option>
              </Select>
            </Form.Item>
            <Form.Item name="allowHorizontalScroll" label="allowHorizontalScroll">
              <Select>
                <Option value={undefined}>undefined</Option>
                <Option value={true}>true</Option>
                <Option value={false}>false</Option>
              </Select>
            </Form.Item>
            <Form.Item name="onlyScrollIfNeeded" label="onlyScrollIfNeeded">
              <Select>
                <Option value={undefined}>undefined</Option>
                <Option value={true}>true</Option>
                <Option value={false}>false</Option>
              </Select>
            </Form.Item>
            <Form.Item name="offsetTop" label="offsetTop">
              <Input />
            </Form.Item>
            <Form.Item name="offsetBottom" label="offsetBottom">
              <Input />
            </Form.Item>
            <Form.Item name="offsetLeft" label="offsetLeft">
              <Input />
            </Form.Item>
            <Form.Item name="offsetRight" label="offsetRight">
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
        </Form>
        </Col>
        <Col span={8} offset={8}>
          <div id="container" className="demo-container">
            <div id="ex1" className="demo-box"> find me! </div>
            <div className="demo-placeholder">container</div>
          </div>
        </Col>
    </Row>

    </div>
  )
};

export default Demo;
