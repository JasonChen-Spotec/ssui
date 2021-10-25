import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function RefreshOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.7 16c-.2 0-.5-.2-.5-.4 0-.3.1-.5.4-.6l.4-.1c-2.4-1.4-4-4-4-6.9 0-4.4 3.6-8 8-8 .3 0 .5.2.5.5S8.3 1 8 1C4.1 1 1 4.1 1 8c0 3.1 2.1 5.8 5 6.7.2.1.4.3.4.5s-.2.4-.4.5l-2.3.3c.1 0 0 0 0 0zM8 16c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c3.9 0 7-3.1 7-7 0-3.1-2.1-5.8-5-6.7-.2-.1-.4-.3-.4-.5s.2-.4.4-.5l2.2-.3c.3 0 .5.1.6.4 0 .3-.2.5-.4.6l-.4.1c2.4 1.4 4 4.1 4 6.9 0 4.4-3.6 8-8 8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshOutlined.displayName = 'RefreshOutlined';
export default RefreshOutlined;
