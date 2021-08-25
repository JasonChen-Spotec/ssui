import * as React from 'react';
import Icon from 'assui/lib/icon';

function Btc(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        className="btc_svg__st0"
        d="M10.8 7.8c.3-.4.4-.8.4-1.3 0-1.1-.8-2-1.9-2.1H9V2.8c0-.1-.1-.2-.2-.2h-.5c-.1 0-.2.1-.2.2v1.6h-.9V2.8c0-.1-.1-.2-.2-.1h-.5c-.1 0-.2.1-.2.2v1.6H4.5c-.1 0-.2.1-.2.2v.5c0 .1.1.2.2.2.6 0 1 .4 1 1v3.4c0 .4-.3.8-.8.8-.1 0-.1.1-.2.1l-.1.6c0 .1.1.2.2.2h1.8v1.6c0 .1.1.2.2.2h.6c.1 0 .2-.1.1-.2v-1.6h.9v1.6c0 .1.1.2.2.1H9c.1 0 .2-.1.2-.2v-1.6h.8c1.1 0 1.9-1 1.9-2.1-.2-.5-.5-1.1-1.1-1.5zm-3.6-2h1.4c.5 0 .9.4.9.9s-.4.9-.9.9H7.2V5.8zM9 10.3H7.2V8.4H9c.5 0 .9.4.9.9s-.4 1-.9 1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

Btc.displayName = 'Btc';
export default Btc;