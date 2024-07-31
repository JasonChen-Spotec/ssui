import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DailyFinanceOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.5 8.16h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.89 3.57H17a5 5 0 015 5v9a5 5 0 01-5 5H7a5 5 0 01-5-5v-9a5 5 0 015-5h.09V1.75a.75.75 0 011.5 0v1.82h6.8V1.75a.75.75 0 011.5 0v1.82zm.11 17.5a3.5 3.5 0 003.5-3.5v-9a3.5 3.5 0 00-3.5-3.5H7a3.5 3.5 0 00-3.5 3.5v9a3.5 3.5 0 003.5 3.5h10z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DailyFinanceOutlined.displayName = 'DailyFinanceOutlined';
export default DailyFinanceOutlined;
