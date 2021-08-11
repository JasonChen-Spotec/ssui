import * as React from 'react';
import Icon from 'assui/lib/Icon';

function CardFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M12.5 4.5h-1c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V4.9c0-.2-.2-.4-.5-.4zm1.5-3H2c-1.1 0-2 .8-2 1.9v9.1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3.4c0-1.1-.9-1.9-2-1.9zM8.5 12.6h-6c-.3 0-.6-.2-.6-.4 0-.3.2-.6.4-.6h6.1c.3 0 .5.2.6.4 0 .3-.1.5-.4.6 0-.1 0-.1-.1 0zm0-2h-6c-.3 0-.5-.1-.6-.4 0-.3.1-.5.4-.6h6.1c.4-.1.6.1.7.4 0 .3-.1.5-.4.6h-.2zm5.5-3c0 .6-.5 1-1 1h-2c-.5 0-1-.4-1-1V4.5c0-.5.4-1 1-1h2c.5 0 1 .4 1 1v3.1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardFilled.displayName = 'CardFilled';
export default CardFilled;
