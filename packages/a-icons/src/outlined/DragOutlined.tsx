import * as React from 'react';
import Icon from 'assui/lib/icon';

function DragOutlined(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.4 15.8L5 13.4c-.4-.3-.4-.8-.1-1.2.3-.4.8-.4 1.2-.1l.1.1.9.9v-2.6c0-.5.4-.8.8-.9.5 0 .8.4.9.8V13l1-.9c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-2.4 2.4c-.2.2-.4.3-.6.3-.2 0-.4-.1-.6-.2zm4.8-4.8c-.3-.3-.3-.9 0-1.2l.9-.9h-2.6c-.5 0-.8-.5-.8-.9s.4-.7.8-.8h2.6l-.9-1c-.4-.3-.4-.8-.1-1.2.3-.4.8-.4 1.2-.1l.1.1 2.4 2.4c.3.3.3.9 0 1.2L13.4 11c-.4.3-.9.3-1.2 0zm-9.5 0L.2 8.6c-.3-.3-.3-.9 0-1.2L2.7 5c.3-.4.8-.5 1.2-.2s.4.8.1 1.2c0 .1-.1.1-.2.2l-.9 1h2.6c.5 0 .8.5.8.9s-.4.7-.8.8H2.9l.9.9c.4.2.5.8.3 1.2-.3.4-.8.5-1.2.2-.1-.1-.2-.1-.2-.2zm4.5-5.5V2.9l-1 .9c-.3.4-.9.4-1.2 0-.3-.3-.3-.8 0-1.1L7.4.3c.2-.2.4-.3.6-.3.2 0 .4.1.6.2L11 2.7c.4.3.4.8.1 1.2-.3.3-.9.4-1.2.1l-.1-.1-.9-1v2.6c0 .5-.4.8-.9.8-.5-.1-.8-.4-.8-.8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DragOutlined.displayName = 'DragOutlined';
export default DragOutlined;
