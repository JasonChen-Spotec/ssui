import * as React from 'react';
import Icon from 'assui/lib/icon';

function CopyOutlined(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M13.2 0c1.2 0 2.2 1 2.2 2.2V11c0 1.2-1 2.2-2.2 2.2h-.6v.6c0 1.2-1 2.2-2.2 2.2H2.8c-1.2 0-2.2-1-2.2-2.2V4.9c0-1.2 1-2.2 2.2-2.2h.6v-.5C3.3 1 4.3 0 5.5 0h7.7zm-2.7 3.8H2.8c-.6 0-1 .4-1.1 1v8.9c0 .6.4 1 1 1.1h7.8c.6 0 1-.4 1.1-1V4.9c0-.6-.5-1.1-1.1-1.1zm2.7-2.7H5.5c-.6 0-1 .4-1.1 1v.7h6.1c1.2 0 2.2 1 2.2 2.2v7.2h.6c.6 0 1-.4 1.1-1v-9c-.1-.6-.5-1.1-1.2-1.1z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CopyOutlined.displayName = 'CopyOutlined';
export default CopyOutlined;
