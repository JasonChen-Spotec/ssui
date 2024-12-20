import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BrokenLineOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2a1 1 0 01.949.684L15 17.838l2.051-6.154A1 1 0 0118 11h5v2h-4.28l-2.771 8.316a1 1 0 01-1.898 0L9 6.162l-2.051 6.154A1 1 0 016 13H1v-2h4.28L8.05 2.684A1 1 0 019 2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BrokenLineOutlined.displayName = 'BrokenLineOutlined';
export default BrokenLineOutlined;
