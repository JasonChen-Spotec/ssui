import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function WarningRuleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.68 3.08v4.57c0 .823.667 1.49 1.49 1.49h4.62a.55.55 0 00.39-1l-5.55-5.5a.56.56 0 00-.95.44zM7.16 15.522A2.64 2.64 0 019.6 13.89a2.63 2.63 0 012.64 2.63 2.64 2.64 0 11-5.08-.998zm2.35 2.368l.71-.71a.75.75 0 00.22-.53v-1.41a.75.75 0 00-.75-.75.74.74 0 00-.75.75v1.1l-.49.49a.75.75 0 001.06 1.06zm9.35-7.65h-4.78a2.45 2.45 0 01-2.44-2.46V3a.51.51 0 00-.5-.5H8.47a4 4 0 00-4 4v11.16a4 4 0 004 4h6.89a4 4 0 004-4v-6.92a.5.5 0 00-.5-.5zM9.6 20.66a4.14 4.14 0 114.14-4.14 4.13 4.13 0 01-4.14 4.14z"
        fill="currentColor"
      />
      <path fill="currentColor" d="M5 11h10v8H5z" />
      <path fill="currentColor" d="M6 13h10v7H6z" />
      <path fill="currentColor" d="M7 14h10v7H7z" />
      <path
        d="M8.5 14L7 16.5h2.5l-1 2.5"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WarningRuleFilled.displayName = 'WarningRuleFilled';
export default WarningRuleFilled;
