import React from 'react';
import classNames from 'classnames';

export interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'success' | 'dark' | 'gray';
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
  variant = '',
  size = 'medium',
  disabled,
  round = false,
  block = false,
  loading = false,
  prefixIcon,
  suffixIcon,
  children,
  ...resetProps
}) => {
  const { className } = resetProps;
  const loadingIcon = (
    <div className={`${btnNamePrefix}-loading-icon`}>
      <div className={`${btnNamePrefix}-loading-icon-mask`} />
    </div>
  );
  const prefixIconWithLoading = loading ? loadingIcon : prefixIcon;
  const suffixIconWithLoading = loading ? loadingIcon : suffixIcon;
  return (
    <button
      {...resetProps}
      className={classNames(
        btnNamePrefix,
        `${btnNamePrefix}-${color}`,
        `${btnNamePrefix}-${size}`,
        `${btnNamePrefix}-variant-${variant}`,
        {
          [`${btnNamePrefix}-round`]: round,
          [`${btnNamePrefix}-block`]: block,
          [`${btnNamePrefix}-disabled`]: disabled,
          [`${btnNamePrefix}-loading`]: loading,
        },
        className,
      )}
    >
      {(prefixIcon || (loading && !suffixIcon)) && prefixIconWithLoading}
      <span className={`${btnNamePrefix}-content`}>{children}</span>
      {suffixIcon && suffixIconWithLoading}
    </button>
  );
};

export default BaseButton;
