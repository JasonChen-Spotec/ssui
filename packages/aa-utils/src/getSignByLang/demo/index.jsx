import React from 'react';
import { Descriptions, Table, Typography } from 'antd';
import { getSignByLang } from 'aa-utils';

const { Title } = Typography;

const Demo = () => {
  // 测试不同语言的标点符号转换
  const symbols = [',', '.', '?', '!', ';', ':', '(', ')', '"', "'"];
  const languages = ['zh-CN', 'fr', 'ja', 'en-US'];

  // 构建表格列定义
  const columns = [
    {
      title: '原始符号',
      dataIndex: 'symbol',
      key: 'symbol',
      width: 80,
    },
    ...languages.map(lang => ({
      title: lang,
      dataIndex: lang,
      key: lang,
      width: 100,
    })),
  ];
  // 构建表格数据
  const dataSource = symbols.map(symbol => ({
    key: symbol,
    symbol,
    ...languages.reduce((acc, lang) => ({
      ...acc,
      [lang]: getSignByLang(lang, symbol),
    }), {}),
  }));

  return (
    <div>
      <Title level={3}>各语言标点符号对照表</Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        size="small"
        style={{ marginBottom: 40 }}
      />

      <Title level={3}>中文标点符号转换示例</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="逗号">
         getSignByLang('zh-CN', ',') = "{getSignByLang('zh-CN', ',')}"
        </Descriptions.Item>
        <Descriptions.Item label="句号">
          getSignByLang('zh-CN', '.') = '{getSignByLang('zh-CN', '.')}'
        </Descriptions.Item>
        <Descriptions.Item label="问号">
          getSignByLang('zh-CN', '?') = '{getSignByLang('zh-CN', '?')}'
        </Descriptions.Item>
        <Descriptions.Item label="感叹号">
          getSignByLang('zh-CN', '!') = '{getSignByLang('zh-CN', '!')}'
        </Descriptions.Item>
        <Descriptions.Item label="括号">
          getSignByLang('zh-CN', '(') = {getSignByLang('zh-CN', '(')}
          <br/>
          getSignByLang('zh-CN', ')') = {getSignByLang('zh-CN', ')')}
        </Descriptions.Item>
      </Descriptions>

      <div style={{ marginBottom: 40 }}></div>
      <Title level={3}>日语标点符号（逗号变为顿号）</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="逗号（顿号）">
          getSignByLang('ja', ',') = '{getSignByLang('ja', ',')}'
        </Descriptions.Item>
        <Descriptions.Item label="句号">
          getSignByLang('ja', '.') = '{getSignByLang('ja', '.')}'
        </Descriptions.Item>
        <Descriptions.Item label="问号">
          getSignByLang('ja', '?') = '{getSignByLang('ja', '?')}'
        </Descriptions.Item>
      </Descriptions>

      <div style={{ marginBottom: 40 }}></div>
      <Title level={3}>英文标点符号（保持半角）</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="逗号">
          getSignByLang('en-US', ',') = '{getSignByLang('en-US', ',')}'
        </Descriptions.Item>
        <Descriptions.Item label="句号">
          getSignByLang('en-US', '.') = '{getSignByLang('en-US', '.')}'
        </Descriptions.Item>
        <Descriptions.Item label="问号">
          getSignByLang('en-US', '?') = '{getSignByLang('en-US', '?')}'
        </Descriptions.Item>
        <Descriptions.Item label="冒号">
          getSignByLang('en-US', '?') = '{getSignByLang('en-US', ':')}'
        </Descriptions.Item>
      </Descriptions>

      <div style={{ marginBottom: 40 }}></div>
      <Title level={3}>法文标点符号（半角）</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="逗号">
          getSignByLang('fr', ',') = '{getSignByLang('fr', ',')}'
        </Descriptions.Item>
        <Descriptions.Item label="句号">
          getSignByLang('fr', '.') = '{getSignByLang('fr', '.')}'
        </Descriptions.Item>
        <Descriptions.Item label="问号">
          getSignByLang('fr', '?') = '{getSignByLang('fr', '?')}'
        </Descriptions.Item>
        <Descriptions.Item label="感叹号">
          getSignByLang('fr', '!') = '{getSignByLang('fr', '!')}'
        </Descriptions.Item>
        <Descriptions.Item label="冒号">
          getSignByLang('fr', ':') = '{getSignByLang('fr', ':')}'
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Demo;
