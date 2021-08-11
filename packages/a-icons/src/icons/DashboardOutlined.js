import * as React from 'react';
import Icon from 'assui/lib/Icon';

function DashboardOutlined(componentProps) {
  const IconNode = (props) => (
    <svg
      data-name="\u56FE\u5C42 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.08 14.77a.6.6 0 01-.5-.27.61.61 0 01.17-.83A6.77 6.77 0 0014.8 8a6.88 6.88 0 00-.21-1.7A6.81 6.81 0 008 1.2a6.56 6.56 0 00-2 .31 6.8 6.8 0 00-1.75 12.16.6.6 0 11-.67 1A8 8 0 1115.75 6 7.89 7.89 0 0116 8a8 8 0 01-3.58 6.67.61.61 0 01-.34.1z"
      />
      <circle fill="currentColor" cx={8.04} cy={8.01} r={0.97} />
      <path
        fill="currentColor"
        d="M10.77 12.58a.6.6 0 01-.34-1.1 4.41 4.41 0 002-3.68 4.54 4.54 0 00-.14-1.1 4.41 4.41 0 10-6.7 4.78.6.6 0 11-.67 1 5.62 5.62 0 011.43-10A5.87 5.87 0 018 2.19a5.61 5.61 0 015.43 4.21 5.49 5.49 0 01.18 1.4 5.6 5.6 0 01-2.51 4.68.6.6 0 01-.33.1z"
      />
      <path fill="currentColor" d="M7.53 7.18l2.65-1.45c.21-.13.42 0 .27.29L8.93 8.39z" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DashboardOutlined.displayName = 'DashboardOutlined';
export default DashboardOutlined;
