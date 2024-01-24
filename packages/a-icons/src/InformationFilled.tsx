import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function InformationFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.638a.992.992 0 00.528-.009l8.779-2.544a2 2 0 001.443-1.921V4.662a2 2 0 00-2.557-1.92L12 5.115 3.807 2.74A2 2 0 001.25 4.662v12.502a2 2 0 001.443 1.921l8.779 2.544a.992.992 0 00.528.009zM5.013 8.71a.75.75 0 11.474-1.423L8.82 8.4a.75.75 0 11-.474 1.423L5.013 8.71zm14.113.112a.75.75 0 10-.474-1.423l-3.334 1.11a.75.75 0 10.475 1.424l3.333-1.111zm0 3.333a.75.75 0 10-.474-1.423l-3.334 1.111a.75.75 0 10.475 1.423l3.333-1.111zm.474 2.384a.75.75 0 01-.474.95l-3.333 1.11a.75.75 0 11-.474-1.423l3.333-1.11a.75.75 0 01.948.473zM4.539 11.096a.75.75 0 00.475.949l3.333 1.11a.75.75 0 10.474-1.422l-3.333-1.111a.75.75 0 00-.949.474zm.475 4.282a.75.75 0 11.474-1.423l3.333 1.111a.75.75 0 01-.474 1.423l-3.333-1.11zM12 7.25a.75.75 0 01.75.75v11a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

InformationFilled.displayName = 'InformationFilled';
export default InformationFilled;
