import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function EmailCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
      />
      <path
        fill="currentColor"
        d="M11.92 4.24H4.08a1 1 0 00-1 1v5.46a1 1 0 001 1h7.84a1 1 0 001-1V5.27a1 1 0 00-1-1.03zm-7.84.56h7.84a.48.48 0 01.47.47v.43L8 9.2 3.61 5.7v-.43a.48.48 0 01.47-.47zm7.84 6.4H4.08a.48.48 0 01-.47-.47V6.42l4.22 3.35a.27.27 0 00.34 0l4.22-3.35v4.31a.48.48 0 01-.47.47z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EmailCircleOutlined.displayName = 'EmailCircleOutlined';
export default EmailCircleOutlined;
