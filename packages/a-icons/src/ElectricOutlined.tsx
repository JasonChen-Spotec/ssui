import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ElectricOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M11.2 1c.3 0 .4.2.3.5L9.7 4.7c-.3.5-.3 1 0 1.5.4.5.9.8 1.5.8h2.2l-5.8 6.5 1.2-3.4c.2-.5.1-1-.3-1.4-.2-.5-.8-.7-1.3-.7H2.6c-.2 0-.3-.2-.2-.3l3.3-6.1c.2-.4.6-.6 1-.6h4.5zm1.3-1H6.3c-.6 0-1.1.3-1.4.8l-3.8 7c-.3.5.1 1.2.8 1.2h5.3c.4 0 .8.4.6.8l-1.9 5.4c-.2.4.2.8.6.8.2 0 .4-.1.5-.2L14.8 7c.3-.4 0-1-.5-1h-3.1c-.5 0-.8-.5-.6-.9L13 .9c.3-.4-.1-.9-.5-.9z"
      />
      <path
        fill="currentColor"
        d="M5.4 6.6c-.1 0-.2 0-.3-.1-.3-.1-.4-.5-.2-.8l1.9-3.5c.2-.3.5-.4.8-.2.3.1.4.5.2.8L5.9 6.3c-.1.2-.3.3-.5.3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ElectricOutlined.displayName = 'ElectricOutlined';
export default ElectricOutlined;
