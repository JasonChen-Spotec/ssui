import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleChainOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.18 16.02c-.76-.07-1.51-.42-2.09-1.03-1.32-1.39-1.32-3.67 0-5.06l2.19-2.3a3.307 3.307 0 014.82 0c1.32 1.39 1.32 3.67 0 5.06l-1.09 1.15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.82 7.98c.76.07 1.51.42 2.09 1.03 1.32 1.39 1.32 3.67 0 5.06l-2.19 2.3a3.307 3.307 0 01-4.82 0c-1.32-1.39-1.32-3.67 0-5.06l1.09-1.15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleChainOutlined.displayName = 'DoubleChainOutlined';
export default DoubleChainOutlined;