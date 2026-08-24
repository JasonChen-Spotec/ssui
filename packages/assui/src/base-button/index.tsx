import React from 'react';
import classNames from 'classnames';

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default' | 'primary' | 'success' | 'dark' | 'gray';
  variant?: 'outlined' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
  block?: boolean;
  /** 圆角 */
  round?: boolean;
  loading?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const btnNamePrefix = 'base-btn';

const loadingIcon = (
  <div className={`${btnNamePrefix}-loading-icon`}>
    <div className={`${btnNamePrefix}-loading-icon-mask`} />
  </div>
);

const BaseButton: React.FC<BaseButtonProps> = ({
  color = 'default',
  variant,
  size = 'medium',
  disabled,
  round = false,
  block = false,
  loading = false,
  prefixIcon,
  suffixIcon,
  children,
  className,
  ...restProps
}) => (
  <button
    type="button"
    disabled={disabled || loading}
    {...restProps}
    className={classNames(
      btnNamePrefix,
      `${btnNamePrefix}-${color}`,
      `${btnNamePrefix}-${size}`,
      variant && `${btnNamePrefix}-variant-${variant}`,
      {
        [`${btnNamePrefix}-round`]: round,
        [`${btnNamePrefix}-block`]: block,
        [`${btnNamePrefix}-disabled`]: disabled,
        [`${btnNamePrefix}-loading`]: loading,
      },
      className,
    )}
  >
    {prefixIcon && (
      <span className={`${btnNamePrefix}-icon`}>
        {loading ? loadingIcon : prefixIcon}
      </span>
    )}
    {loading && !prefixIcon && !suffixIcon && loadingIcon}
    <span className={`${btnNamePrefix}-content`}>{children}</span>
    {loading && !prefixIcon && suffixIcon && (
      <span className={`${btnNamePrefix}-icon`}>{loadingIcon}</span>
    )}
    {(!loading || prefixIcon) && suffixIcon && (
      <span className={`${btnNamePrefix}-icon`}>{suffixIcon}</span>
    )}
  </button>
);

export default BaseButton;
