import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DoubleChainOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-6a6 6 0 00-6 6v1H4v-1a8 8 0 018-8h1v2h-1zm5.914 1.5l-3.982 3.982A2.002 2.002 0 0112 14a2 2 0 11.518-3.932L16.5 6.086 17.914 7.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleChainOutlined.displayName = 'DoubleChainOutlined';
export default DoubleChainOutlined;
