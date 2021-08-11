import * as React from 'react';
import Icon from 'assui/lib/Icon';

function GuilderFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14.6.7v8c0 .6-.1 1.2-.3 1.8-.3.5-.6 1.1-.9 1.5-.3.5-.8.9-1.2 1.3-.5.4-.9.8-1.3 1.1-.4.3-.8.6-1.3.8-.4.3-.7.4-.9.5-.2.1-.3.2-.4.2-.2.1-.3.1-.4.1-.1 0-.2 0-.3-.1-.1 0-.3-.1-.4-.2s-.5-.3-.9-.5c-.5-.2-.9-.5-1.3-.8-.4-.3-.8-.6-1.3-1.1-.5-.4-.9-.9-1.2-1.3-.3-.5-.6-1-.9-1.6-.2-.5-.4-1.1-.4-1.7v-8c0-.2.1-.3.2-.5.2-.1.3-.2.5-.2h12c.2 0 .3.1.5.2.1.1.2.3.2.5zm-2 8V2H7.9v11.8c.8-.4 1.6-.9 2.2-1.4 1.7-1.3 2.5-2.5 2.5-3.7z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GuilderFilled.displayName = 'GuilderFilled';
export default GuilderFilled;
