import React from 'react';
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
declare const BaseButton: React.FC<BaseButtonProps>;
export default BaseButton;
