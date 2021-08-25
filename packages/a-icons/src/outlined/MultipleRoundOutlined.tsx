import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function MultipleRoundOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M13.14 10.26a2.18 2.18 0 00-1 .23l-.93-.93A3 3 0 0011.74 8a3 3 0 00-.45-1.58l1.1-1.1a1.9 1.9 0 00.79.17 2 2 0 10-1.63-.85l-1 1a3 3 0 00-3.45-.25L5.5 3.8a2.54 2.54 0 00.36-1.28 2.53 2.53 0 10-2.53 2.53 2.47 2.47 0 001.44-.46l1.54 1.54a3 3 0 000 3.66l-1.4 1.42A2.64 2.64 0 106 13.34 2.59 2.59 0 005.63 12l1.5-1.5a3 3 0 001.58.5 3 3 0 001.82-.62l.84.84a2.1 2.1 0 00-.4 1.23 2.17 2.17 0 102.17-2.16zm0-7.7a.9.9 0 11-.9.9.9.9 0 01.94-.9zM3.33 4a1.44 1.44 0 111.45-1.48A1.44 1.44 0 013.33 4zm0 11a1.57 1.57 0 111.57-1.57 1.57 1.57 0 01-1.55 1.48zm5.36-5a1.95 1.95 0 111.97-2 1.94 1.94 0 01-1.95 1.89zm4.43 3.62a1.09 1.09 0 111.08-1.09 1.09 1.09 0 01-1.06.98z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MultipleRoundOutlined.displayName = 'MultipleRoundOutlined';
export default MultipleRoundOutlined;
