import React, { useState } from 'react';
import { BaseButton } from 'assui';
import EarthOutlined from 'a-icons/lib/EarthOutlined';
import './index.less';

const COLORS = ['default', 'primary', 'success', 'dark', 'gray'];
const VARIANTS = [undefined, 'outlined', 'dashed', 'link'];

const Demo = () => {
  const [loadings, setLoadings] = useState({
    primary: false,
    outlined: false,
    link: false,
  });

  const handleLoadingClick = (key) => {
    setLoadings((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoadings((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="btn-demo">
      {/* ======================== 1. 颜色 × 变体 ======================== */}
      <h2 className="btn-demo__title">颜色 × 变体</h2>
      {COLORS.map((color) => (
        <div key={color} className="btn-demo__row">
          <span className="btn-demo__label">{color}</span>
          <div className="btn-demo__group">
            {VARIANTS.map((variant) => (
              <BaseButton
                key={String(variant)}
                color={color}
                variant={variant}
              >
                {variant || '基础'}
              </BaseButton>
            ))}
            <BaseButton color={color} disabled>
              disabled
            </BaseButton>
          </div>
        </div>
      ))}

      {/* ======================== 2. 尺寸 ======================== */}
      <h2 className="btn-demo__title">尺寸</h2>
      <div className="btn-demo__row">
        <span className="btn-demo__label">small</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" size="small">
            primary
          </BaseButton>
          <BaseButton color="primary" variant="outlined" size="small">
            outlined
          </BaseButton>
          <BaseButton variant="dashed" size="small">
            dashed
          </BaseButton>
          <BaseButton variant="link" size="small">
            link
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">medium</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" size="medium">
            primary
          </BaseButton>
          <BaseButton color="primary" variant="outlined" size="medium">
            outlined
          </BaseButton>
          <BaseButton variant="dashed" size="medium">
            dashed
          </BaseButton>
          <BaseButton variant="link" size="medium">
            link
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">large</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" size="large">
            primary
          </BaseButton>
          <BaseButton color="primary" variant="outlined" size="large">
            outlined
          </BaseButton>
          <BaseButton variant="dashed" size="large">
            dashed
          </BaseButton>
          <BaseButton variant="link" size="large">
            link
          </BaseButton>
        </div>
      </div>

      {/* ======================== 3. 图标 ======================== */}
      <h2 className="btn-demo__title">图标按钮</h2>
      <div className="btn-demo__row">
        <span className="btn-demo__label">prefixIcon</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton color="primary" variant="outlined" prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton color="success" prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton variant="link" prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">suffixIcon</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" suffixIcon={<EarthOutlined />}>
            更多
          </BaseButton>
          <BaseButton color="primary" variant="outlined" suffixIcon={<EarthOutlined />}>
            更多
          </BaseButton>
          <BaseButton suffixIcon={<EarthOutlined />}>
            更多
          </BaseButton>
          <BaseButton variant="link" suffixIcon={<EarthOutlined />}>
            更多
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">双图标</span>
        <div className="btn-demo__group">
          <BaseButton
            color="primary"
            prefixIcon={<EarthOutlined />}
            suffixIcon={<EarthOutlined />}
          >
            详情
          </BaseButton>
          <BaseButton
            variant="outlined"
            prefixIcon={<EarthOutlined />}
            suffixIcon={<EarthOutlined />}
          >
            详情
          </BaseButton>
          <BaseButton
            color="gray"
            prefixIcon={<EarthOutlined />}
            suffixIcon={<EarthOutlined />}
          >
            详情
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">纯图标</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" prefixIcon={<EarthOutlined />} />
          <BaseButton color="primary" variant="outlined" prefixIcon={<EarthOutlined />} />
          <BaseButton color="dark" prefixIcon={<EarthOutlined />} />
          <BaseButton variant="link" prefixIcon={<EarthOutlined />} />
        </div>
      </div>

      {/* ======================== 4. Loading ======================== */}
      <h2 className="btn-demo__title">加载状态</h2>
      <div className="btn-demo__row">
        <span className="btn-demo__label">静态</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" loading  >
            加载中22
          </BaseButton>
          <BaseButton color="success" loading>
            加载中
          </BaseButton>
          <BaseButton color="dark" variant="outlined" loading>
            加载中
          </BaseButton>
          <BaseButton variant="link" loading>
            加载中
          </BaseButton>
          <BaseButton color="gray" loading>
            加载中
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">+ 前缀图标</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" loading prefixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
          <BaseButton color="primary" variant="outlined" loading prefixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
          <BaseButton color="dark" loading prefixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
          <BaseButton variant="link" loading prefixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">+ 后缀图标</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" loading suffixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
          <BaseButton color="primary" variant="outlined" loading suffixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
          <BaseButton color="dark" loading suffixIcon={<EarthOutlined />}>
            加载中
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">动态</span>
        <div className="btn-demo__group">
          <BaseButton
            color="primary"
            loading={loadings.primary}
            onClick={() => handleLoadingClick('primary')}
            prefixIcon={<EarthOutlined />}
          >
            点击加载
          </BaseButton>
          <BaseButton
            color="primary"
            loading={loadings.primary}
            onClick={() => handleLoadingClick('primary')}
            suffixIcon={<EarthOutlined />}
          >
            点击加载
          </BaseButton>
          <BaseButton
            color="primary"
            loading={loadings.primary}
            onClick={() => handleLoadingClick('primary')}
            suffixIcon={<EarthOutlined />}
            prefixIcon={<EarthOutlined />}
          >
            点击加载
          </BaseButton>
          <BaseButton
            color="primary"
            variant="outlined"
            loading={loadings.outlined}
            onClick={() => handleLoadingClick('outlined')}
          >
            点击加载
          </BaseButton>
          <BaseButton
            variant="link"
            loading={loadings.link}
            onClick={() => handleLoadingClick('link')}
          >
            点击加载
          </BaseButton>
        </div>
      </div>

      {/* ======================== 5. Block ======================== */}
      <h2 className="btn-demo__title">Block 按钮</h2>
      <div style={{ maxWidth: 500 }}>
        <div className="btn-demo__row" style={{ flexDirection: 'column', gap: 12, alignItems: 'stretch' }}>
          <BaseButton color="primary" block>
            主要操作
          </BaseButton>
          <BaseButton color="primary" block variant="outlined">
            次要操作
          </BaseButton>
          <BaseButton block variant="dashed">
            虚线操作
          </BaseButton>
          <BaseButton block variant="link">
            链接操作
          </BaseButton>
          <BaseButton color="success" block loading>
            加载中
          </BaseButton>
          <BaseButton color="dark" block disabled>
            禁用
          </BaseButton>
          <BaseButton color="gray" block prefixIcon={<EarthOutlined />}>
            带图标
          </BaseButton>
        </div>
      </div>

      {/* ======================== 6. 圆角 ======================== */}
      <h2 className="btn-demo__title">圆角按钮</h2>
      <div className="btn-demo__row">
        <div className="btn-demo__group">
          <BaseButton color="primary" round>
            primary
          </BaseButton>
          <BaseButton color="success" round>
            success
          </BaseButton>
          <BaseButton color="dark" round>
            dark
          </BaseButton>
          <BaseButton color="gray" round>
            gray
          </BaseButton>
          <BaseButton round>
            default
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">+ variant</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" variant="outlined" round>
            outlined
          </BaseButton>
          <BaseButton variant="dashed" round>
            dashed
          </BaseButton>
          <BaseButton variant="link" round>
            link
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">+ disabled</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" round disabled>
            disabled
          </BaseButton>
          <BaseButton color="primary" variant="outlined" round disabled>
            disabled
          </BaseButton>
          <BaseButton color="dark" round disabled loading>
            loading
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">+ block</span>
        <div className="btn-demo__group" style={{ maxWidth: 500, alignSelf: 'stretch' }}>
          <BaseButton color="primary" block round>
            Block 圆角
          </BaseButton>
          <BaseButton color="dark" block round disabled>
            Block 圆角 禁用
          </BaseButton>
        </div>
      </div>

      {/* ======================== 7. 禁用状态全集 ======================== */}
      <h2 className="btn-demo__title">禁用状态全集</h2>
      <div className="btn-demo__row">
        <span className="btn-demo__label">default</span>
        <div className="btn-demo__group">
          {VARIANTS.map((variant) => (
            <BaseButton key={String(variant)} disabled variant={variant}>
              {variant || '基础'}
            </BaseButton>
          ))}
          <BaseButton disabled prefixIcon={<EarthOutlined />}>
            带图标
          </BaseButton>
        </div>
      </div>
      {COLORS.filter((c) => c !== 'default').map((color) => (
        <div key={color} className="btn-demo__row">
          <span className="btn-demo__label">{color}</span>
          <div className="btn-demo__group">
            {VARIANTS.map((variant) => (
              <BaseButton key={String(variant)} color={color} disabled variant={variant}>
                {variant || '基础'}
              </BaseButton>
            ))}
          </div>
        </div>
      ))}

      {/* ======================== 8. 组合场景 ======================== */}
      <h2 className="btn-demo__title">组合场景</h2>
      <div className="btn-demo__row">
        <span className="btn-demo__label">大小+圆角</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" size="small" round>
            small
          </BaseButton>
          <BaseButton color="primary" size="medium" round>
            medium
          </BaseButton>
          <BaseButton color="primary" size="large" round>
            large
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">图标+圆角</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" round prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton color="primary" variant="outlined" round prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton color="success" round loading>
            加载中
          </BaseButton>
        </div>
      </div>
      <div className="btn-demo__row">
        <span className="btn-demo__label">全禁用</span>
        <div className="btn-demo__group">
          <BaseButton color="primary" round disabled loading prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton color="gray" variant="outlined" round disabled prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
          <BaseButton variant="link" disabled prefixIcon={<EarthOutlined />}>
            发送
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Demo;
