import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function Money(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        d="M13.6 0H2.4C1.5 0 .8.7.8 1.5v8.8c0 .7.4 1.4 1 1.8l5.6 3.7c.4.3 1 .3 1.4 0l5.6-3.7c.6-.4 1-1.1 1-1.8V1.5C15.2.7 14.5 0 13.6 0zM2.4 1h11.2c.4 0 .7.3.7.6v1.2H1.7V1.5c0-.3.3-.5.7-.5zm11.3 10.3l-5.2 3.5c-.3.2-.7.2-1 0l-5.2-3.5c-.3-.2-.6-.6-.6-1V3.7h12.5v6.6c.1.4-.1.7-.5 1z"
        fill="#285a83"
      />
      <path
        d="M8.7 8.1H7.2c-.4 0-.7-.3-.7-.6v-.1c0-.3.3-.6.7-.6h2.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8.5v-.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.6h-.3c-.9 0-1.6.7-1.6 1.6v.1c0 .8.7 1.5 1.6 1.5h1.4c.4 0 .8.3.8.6s-.4.6-.7.6H6.1c-.3 0-.5.2-.5.5s.2.5.5.5h1.5v.7c0 .3.2.5.5.5s.5-.2.5-.5v-.7h.2c.9 0 1.6-.7 1.6-1.6-.1-.8-.8-1.5-1.7-1.5z"
        fill="#ef6f53"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

Money.displayName = 'Money';
export default Money;
