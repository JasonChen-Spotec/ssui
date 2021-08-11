import * as React from 'react';
import Icon from 'assui/lib/icon';

function ShopOutlined(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.1 0c.5 0 .9.4.9.9v3.6c0 .5-.4.9-.9.9h-1.5v9.1c0 .8-.7 1.5-1.5 1.5H3.9c-.8 0-1.5-.7-1.5-1.5V5.4H.9C.4 5.4 0 5 0 4.5V.9C0 .4.4 0 .9 0h14.2zM9.3 3.2H3.9c-.2 0-.4.2-.4.4v10.9c0 .2.2.4.4.5h5.4V3.2zm2.8 0h-1.9V15h1.9c.2 0 .4-.2.4-.4v-11c.1-.2-.1-.4-.4-.4zm-6.3 9.2v1.1h-1v-1.1h1zm0-1.5V12h-1v-1.1h1zm0-1.5v1.1h-1V9.4h1zM15 1.1H1v3.3h1.3v-.8c0-.8.7-1.5 1.5-1.5h8.3c.8 0 1.5.7 1.5 1.5v.8H15V1.1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ShopOutlined.displayName = 'ShopOutlined';
export default ShopOutlined;
