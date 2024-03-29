import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ClipboardOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 14H9a1 1 0 000 2h6a1 1 0 000-2zm0-4h-4a1 1 0 000 2h4a1 1 0 000-2zm2-6h-1.18A3 3 0 0013 2h-2a3 3 0 00-2.82 2H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-7 1a1 1 0 011-1h2a1 1 0 011 1v1h-4V5zm8 14a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1v1a1 1 0 001 1h6a1 1 0 001-1V6h1a1 1 0 011 1v12z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ClipboardOutlined.displayName = 'ClipboardOutlined';
export default ClipboardOutlined;
