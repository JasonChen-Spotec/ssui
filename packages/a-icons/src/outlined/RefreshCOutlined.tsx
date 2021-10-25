import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function RefreshCOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.7 16c-.2 0-.5-.2-.5-.4 0-.3.1-.5.4-.6l.4-.1c-2.4-1.4-4-4-4-6.9 0-4.4 3.6-8 8-8 .3 0 .5.2.5.5S8.3 1 8 1C4.1 1 1 4.1 1 8c0 3.1 2.1 5.8 5 6.7.2.1.4.3.4.5s-.2.4-.4.5l-2.3.3c.1 0 0 0 0 0zM8 16c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c3.9 0 7-3.1 7-7 0-3.1-2.1-5.8-5-6.7-.2-.1-.4-.3-.4-.5s.2-.4.4-.5l2.2-.3c.3 0 .5.1.6.4 0 .3-.2.5-.4.6l-.4.1c2.4 1.4 4 4.1 4 6.9 0 4.4-3.6 8-8 8z"
      />
      <path
        fill="currentColor"
        d="M8 7.3c-2.1 0-4.3-.6-4.3-1.9s2.2-2 4.3-2 4.3.6 4.3 1.9-2.2 2-4.3 2zm0-2.7c-1.9 0-3 .5-3.1.8.1.1 1.2.7 3.1.7 1.9 0 2.9-.5 3.1-.7-.2-.3-1.2-.8-3.1-.8zm3.1.8z"
      />
      <path
        fill="currentColor"
        d="M8 9.8c-2.1 0-4.3-.6-4.3-1.9 0-.3.3-.6.6-.6s.6.3.6.6c.1.2 1.2.7 3.1.7 1.9 0 3-.5 3.1-.8 0-.3.3-.6.6-.6s.6.3.6.6c0 1.4-2.2 2-4.3 2zM8 12.5c-2.1 0-4.3-.6-4.3-1.9 0-.3.3-.6.6-.6s.6.3.6.6c.1.1 1.2.7 3.1.7s3-.5 3.1-.8c0-.3.3-.6.6-.6s.6.3.6.6c0 1.4-2.2 2-4.3 2z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

RefreshCOutlined.displayName = 'RefreshCOutlined';
export default RefreshCOutlined;
