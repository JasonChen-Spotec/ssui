import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function FileSearchOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M4.2 14.3c.3 0 .6.3.6.6s-.3.6-.6.6H1.9c-1 0-1.8-.8-1.8-1.8V1.8C.2.8 1 0 1.9 0h9.5c1 0 1.8.8 1.8 1.8V3c0 .3-.3.6-.6.6s-.5-.3-.5-.6V1.8c0-.3-.3-.6-.6-.6H1.9c-.3 0-.6.3-.6.6v11.9c0 .3.3.6.6.6h2.3zM3.1 3h6.6c.3 0 .6.3.6.6s-.3.6-.6.6H3.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6zm0 3h1.2c.3 0 .6.3.6.6s-.2.6-.6.6H3.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6zm3.3 4.7c0-2.3 1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1c0 .9-.3 1.7-.8 2.4l1.8 1.8c.2.2.2.7 0 .9s-.7.2-.9 0L13 14c-.7.5-1.5.8-2.4.8-2.3 0-4.2-1.8-4.2-4.1zm4.1 2.8c1.6 0 2.9-1.3 2.9-2.9s-1.3-2.9-2.8-2.9S7.7 9 7.7 10.6c0 1.7 1.3 2.9 2.8 2.9z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileSearchOutlined.displayName = 'FileSearchOutlined';
export default FileSearchOutlined;
