import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function DailyFinanceFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9 3.57h.1a5 5 0 015 5v9a5 5 0 01-5 5H7a5 5 0 01-5-5v-9a5 5 0 015-5h.1V1.75a.75.75 0 011.5 0v1.82h6.8V1.75a.75.75 0 011.5 0v1.82zM7.5 9.66h9a.75.75 0 000-1.5h-9a.75.75 0 000 1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DailyFinanceFilled.displayName = 'DailyFinanceFilled';
export default DailyFinanceFilled;
