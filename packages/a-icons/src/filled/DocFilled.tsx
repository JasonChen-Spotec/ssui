import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function DocFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M10.8 0c.5 0 1 .2 1.4.6l2.2 2.2c.4.3.6.8.6 1.4V14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h7.8zM8.3 11H4.8c-.5 0-.8.3-.8.7 0 .4.3.8.7.8h3.5c.4 0 .8-.3.8-.7 0-.5-.3-.8-.7-.8zm3-3.5H4.8c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h6.5c.4 0 .7-.3.7-.8 0-.4-.3-.7-.7-.7zm0-3.5H4.8c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.5c.4 0 .8-.3.8-.7-.1-.5-.4-.8-.8-.8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DocFilled.displayName = 'DocFilled';
export default DocFilled;
