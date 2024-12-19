import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function LineChartUpOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a3 3 0 013-3h8a3 3 0 013 3v11a3 3 0 01-3 3h-1v2a3 3 0 01-3 3H6a3 3 0 01-3-3V8a3 3 0 013-3h2V4zm11 12h-1V8a3 3 0 00-3-3h-5V4a1 1 0 011-1h8a1 1 0 011 1v11a1 1 0 01-1 1zm-4-9H6a1 1 0 00-1 1v6.225l3.434-2.08a1 1 0 011.214.137l2.542 2.463L16 12.437V8a1 1 0 00-1-1zm1 7.775l-3.434 2.08a1 1 0 01-1.214-.137L8.81 14.255 5 16.563V20a1 1 0 001 1h9a1 1 0 001-1v-5.225z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

LineChartUpOutlined.displayName = 'LineChartUpOutlined';
export default LineChartUpOutlined;
