import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function HomeTopOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20z"
        stroke="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HomeTopOutlined.displayName = 'HomeTopOutlined';
export default HomeTopOutlined;
