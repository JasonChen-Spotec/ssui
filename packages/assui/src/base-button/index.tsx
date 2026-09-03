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
}) => {
  const showDefaultLoading = loading && !prefixIcon && !suffixIcon;
  const loadingIcon = (
    <div
      className={classNames(`${btnNamePrefix}-loading-icon`, {
        [`${btnNamePrefix}-loading-icon-default`]: showDefaultLoading,
      })}
    >
      <div className={`${btnNamePrefix}-loading-icon-mask`} />
    </div>
  );

  return (
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
          [`${btnNamePrefix}-default-loadingBox`]: showDefaultLoading,
        },
        className,
      )}
    >
      {prefixIcon && (
        <span className={`${btnNamePrefix}-icon`}>
          {loading ? loadingIcon : prefixIcon}
        </span>
      )}
      {showDefaultLoading && loadingIcon}
      <span
        className={classNames(`${btnNamePrefix}-content`, {
          [`${btnNamePrefix}-content-hidden`]: showDefaultLoading,
        })}
      >
        {children}
      </span>
      {loading && !prefixIcon && suffixIcon && (
        <span className={`${btnNamePrefix}-icon`}>{loadingIcon}</span>
      )}
      {(!loading || prefixIcon) && suffixIcon && (
        <span className={`${btnNamePrefix}-icon`}>{suffixIcon}</span>
      )}
    </button>
  );
};

export default BaseButton;
