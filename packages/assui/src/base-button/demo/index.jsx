import React from 'react';
import { BaseButton } from 'assui';
import EarthOutlined from 'a-icons/lib/EarthOutlined';
require('./index.less')

const Demo = () => {
  return (
     <div className="btn-box">
        <h1>基础按钮</h1>
        <div>
          <BaseButton className="adfad" color="primary" type="submit">primary</BaseButton>
          <BaseButton color="primary" variant="outlined">
            primary
          </BaseButton>
          <BaseButton color="primary" variant="dashed">
            primary
          </BaseButton>
          <BaseButton color="primary" variant="link">
            primary
          </BaseButton>
          <BaseButton color="primary" disabled>
            primary
          </BaseButton>
          <BaseButton color="primary" variant="outlined" disabled>
            primary
          </BaseButton>
        </div>
        <div>
          <BaseButton color="success">success</BaseButton>
          <BaseButton color="success" variant="outlined">
            success
          </BaseButton>
          <BaseButton color="success" variant="dashed">
            success
          </BaseButton>
          <BaseButton color="success" variant="link">
            success
          </BaseButton>
          <BaseButton color="success" disabled>
            success
          </BaseButton>
          <BaseButton color="success" variant="outlined" disabled>
            success
          </BaseButton>
        </div>
        <div>
          <BaseButton color="dark">dark</BaseButton>
          <BaseButton color="dark" variant="outlined">
            dark
          </BaseButton>
          <BaseButton color="dark" variant="dashed">
            dark
          </BaseButton>
          <BaseButton color="dark" variant="link">
            dark
          </BaseButton>
          <BaseButton color="dark" disabled>
            dark
          </BaseButton>
          <BaseButton color="dark" variant="outlined" disabled>
            dark
          </BaseButton>
        </div>
        <div>
          <BaseButton color="gray">gray</BaseButton>
          <BaseButton color="gray" variant="outlined">gray</BaseButton>
          <BaseButton color="gray" variant="dashed">gray</BaseButton>
          <BaseButton color="gray" variant="link">gray</BaseButton>
          <BaseButton color="gray" disabled >gray</BaseButton>
          <BaseButton color="gray" variant="outlined" disabled>gray</BaseButton>
        </div>
        <div>
          <BaseButton>default</BaseButton>
          <BaseButton variant="outlined">outlined</BaseButton>
          <BaseButton variant="dashed">dashed</BaseButton>
          <BaseButton variant="link">link</BaseButton>
          <BaseButton disabled>disabled</BaseButton>
          <BaseButton variant="outlined" disabled>
            default
          </BaseButton>
        </div>
        <div>
          <BaseButton color="primary">primary</BaseButton>
          <BaseButton color="success">success</BaseButton>
          <BaseButton color="dark">dark</BaseButton>
          <BaseButton color="primary" variant="outlined">
            primary-outlined
          </BaseButton>
          <BaseButton color="primary" variant="dashed">
            primary-dashed
          </BaseButton>
          <BaseButton variant="outlined">variant-outlined</BaseButton>
          <BaseButton variant="dashed">variant-dashed</BaseButton>
          <BaseButton color="gray">color-gray</BaseButton>
          <BaseButton variant="link">variant-link</BaseButton>
        </div>
        <h1>图标按钮</h1>
        <div className='icon-box'>
          <BaseButton color="primary" prefixIcon={<EarthOutlined  />}>
            prefixIcon
          </BaseButton>
          <BaseButton color="primary" suffixIcon={<EarthOutlined />}>
            suffixIcon
          </BaseButton>
          <BaseButton
            color="primary"
            variant="outlined"
            prefixIcon={<EarthOutlined />}
          >
            prefixIcon
          </BaseButton>
          <BaseButton
            color="primary"
            variant="outlined"
            suffixIcon={<EarthOutlined />}
          >
            suffixIcon
          </BaseButton>
          <BaseButton variant="outlined" suffixIcon={<EarthOutlined />}>
            suffixIcon
          </BaseButton>
          <BaseButton variant="link" suffixIcon={<EarthOutlined />}>
            suffixIcon
          </BaseButton>
        </div>
        <h1>Block 按钮</h1>
        <div>
          <BaseButton color="primary" block>
            按钮
          </BaseButton>
          <BaseButton color="primary" block variant="outlined">
            按钮
          </BaseButton>
          <BaseButton block variant="outlined">
            按钮
          </BaseButton>
          <BaseButton block variant="dashed">
            按钮
          </BaseButton>
          <BaseButton block variant="link">
            按钮
          </BaseButton>
        </div>
        <h1>Loading 样式</h1>
        <div>
          <BaseButton
            color="gray"
            variant="link"
            loading
            prefixIcon={<EarthOutlined />}
          >
            按钮
          </BaseButton>
          <BaseButton color="primary" loading suffixIcon={<EarthOutlined />}>
            按钮
          </BaseButton>
          <BaseButton color="dark" loading suffixIcon={<EarthOutlined />}>
            按钮
          </BaseButton>
          <BaseButton color="success" loading suffixIcon={<EarthOutlined />}>
            按钮
          </BaseButton>
          <BaseButton
            color="primary"
            variant="outlined"
            loading
            prefixIcon={<EarthOutlined />}
          >
            按钮
          </BaseButton>
          <BaseButton
            color="success"
            variant="outlined"
            loading
            prefixIcon={<EarthOutlined />}
          >
            按钮
          </BaseButton>
          <BaseButton
            color="dark"
            variant="outlined"
            loading
            prefixIcon={<EarthOutlined />}
          >
            按钮
          </BaseButton>
          <BaseButton
            color="primary"
            variant="link"
            loading
            prefixIcon={<EarthOutlined />}
          >
            按钮
          </BaseButton>
          <BaseButton color="primary" loading>
            none-prefix-icon
          </BaseButton>
        </div>
        <h1>按钮尺寸</h1>
        <div>
          <BaseButton color="primary" size="small">
            small
          </BaseButton>
          <BaseButton color="primary" size="medium">
            medium
          </BaseButton>
          <BaseButton color="primary" size="large">
            large
          </BaseButton>
        </div>
        <h1>按钮状态</h1>
        <h4>Default</h4>
        <div>
          <BaseButton color="primary">按钮</BaseButton>
          <BaseButton color="success">按钮</BaseButton>
          <BaseButton color="dark">按钮</BaseButton>
          <BaseButton color="primary" variant="outlined">
            按钮
          </BaseButton>
          <BaseButton color="gray">按钮</BaseButton>
          <BaseButton variant="outlined">按钮</BaseButton>
          <BaseButton variant="dashed">按钮</BaseButton>
          <BaseButton variant="link">按钮</BaseButton>
        </div>
        <h4>Disabled</h4>
        <div>
          <BaseButton color="primary" disabled>
            按钮
          </BaseButton>
          <BaseButton color="success" disabled>
            按钮
          </BaseButton>
          <BaseButton color="dark" disabled>
            按钮
          </BaseButton>
          <BaseButton color="primary" variant="outlined" disabled>
            按钮
          </BaseButton>
          <BaseButton color="gray" disabled>
            按钮
          </BaseButton>
          <BaseButton variant="outlined" disabled>
            按钮
          </BaseButton>
          <BaseButton variant="dashed" disabled>
            按钮
          </BaseButton>
          <BaseButton variant="link" disabled>
            按钮
          </BaseButton>
        </div>
        <h1>圆角按钮</h1>
        <div>
          <BaseButton color="primary" round>
            按钮
          </BaseButton>
          <BaseButton color="success" round>
            按钮
          </BaseButton>
          <BaseButton color="dark" round>
            按钮
          </BaseButton>
          <BaseButton color="gray" round>
            按钮
          </BaseButton>
          <BaseButton round>
            按钮
          </BaseButton>
          <BaseButton color="dark" block round>
            按钮
          </BaseButton>
          <BaseButton color="dark" block round loading>
            按钮
          </BaseButton>
        </div>
      </div>
  );
};

export default Demo;
