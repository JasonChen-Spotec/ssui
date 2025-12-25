import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function RoleDirect(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 2a2 2 0 012 2v2h2V4a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V8h-2v9h2.008v-1.999a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V19H11v1a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5z"
        fill="#47A92A"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RoleDirect.displayName = 'RoleDirect';
export default RoleDirect;
