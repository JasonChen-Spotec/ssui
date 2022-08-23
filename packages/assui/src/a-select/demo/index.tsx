import { ASelect } from 'assui';
import { BusinessCardOutlined } from 'a-icons';
import { Space } from 'antd';
import React from 'react';
import './index.less';

const { Option } = ASelect;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => {
  const valueRender = (value) => {
    return (
      <div className="a-select-value-wrap">
        <BusinessCardOutlined />
        <span>{value}</span>
      </div>
    );
  };

  const options = [
    { label: 'Jack', value: 'jack' },
    { label: 'Lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' },
  ];

  return (
    <ASelect
      valueRender={valueRender}
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={options}
    />
  );
};

export default App;
