import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ChainOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.42 4.65a.75.75 0 01-.75.75H7.24v.09a1.76 1.76 0 01-1.75 1.75H3.81a1.76 1.76 0 01-1.75-1.75V3.81a1.76 1.76 0 011.75-1.75h1.68a1.76 1.76 0 011.75 1.75v.09h7.43a.75.75 0 01.75.75zM5.49 5.74a.25.25 0 00.25-.25V3.81a.25.25 0 00-.25-.25H3.81a.26.26 0 00-.25.25v1.68c0 .138.112.25.25.25h1.68zM18.51 2.06h1.68a1.76 1.76 0 011.75 1.75v1.68a1.76 1.76 0 01-1.75 1.75h-.09v7.43a.75.75 0 01-1.5 0V7.24h-.09a1.76 1.76 0 01-1.75-1.75V3.81a1.76 1.76 0 011.75-1.75zm1.68 3.68a.25.25 0 00.25-.25V3.81a.26.26 0 00-.25-.25h-1.68a.25.25 0 00-.25.25v1.68c0 .138.112.25.25.25h1.68zM5.4 16.76h.09a1.76 1.76 0 011.75 1.75v1.68a1.76 1.76 0 01-1.75 1.75H3.81a1.76 1.76 0 01-1.75-1.75v-1.68a1.76 1.76 0 011.75-1.75h.09V9.33a.75.75 0 111.5 0v7.43zm.09 3.68a.25.25 0 00.25-.25v-1.68a.25.25 0 00-.25-.25H3.81a.25.25 0 00-.25.25v1.68a.26.26 0 00.25.25h1.68zM18.51 16.76h1.68a1.76 1.76 0 011.75 1.75v1.68a1.76 1.76 0 01-1.75 1.75h-1.68a1.76 1.76 0 01-1.75-1.75v-.09H9.33a.75.75 0 010-1.5h7.43v-.09a1.76 1.76 0 011.75-1.75zm1.68 3.68a.26.26 0 00.25-.25v-1.68a.25.25 0 00-.25-.25h-1.68a.25.25 0 00-.25.25v1.68c0 .138.112.25.25.25h1.68z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ChainOutlined.displayName = 'ChainOutlined';
export default ChainOutlined;
