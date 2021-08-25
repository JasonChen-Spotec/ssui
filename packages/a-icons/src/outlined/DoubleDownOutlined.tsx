import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function DoubleDownOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.4 8.7l-7.1-7C-.1 1.4 0 .9.3.6s.8-.4 1.2 0L8 6.9 14.6.5c.3-.4.8-.4 1.2 0 .4.3.4.8 0 1.1l-7.1 7c-.3.3-.5.3-.7.3-.2 0-.4-.1-.6-.2z"
      />
      <path
        fill="currentColor"
        d="M7.4 15.5l-7.1-7c-.4-.3-.3-.8 0-1.1s.8-.4 1.2 0L8 13.8l6.6-6.4c.3-.4.8-.4 1.2 0 .4.3.4.8 0 1.1l-7.1 7c-.2.2-.4.3-.6.3-.3 0-.5-.1-.7-.3z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DoubleDownOutlined.displayName = 'DoubleDownOutlined';
export default DoubleDownOutlined;
