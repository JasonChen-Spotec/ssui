import * as React from 'react';
import Icon from 'assui/lib/icon';

function CloseCircleOutlined(componentProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9 0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9z" />
        <path d="M10.7 5.3c-.2-.3-.5-.3-.8 0L8 7.2 6.1 5.3c-.3-.3-.6-.3-.8 0-.3.2-.3.5 0 .8L7.2 8 5.3 9.9c-.3.3-.3.5 0 .8.3.3.5.3.8 0L8 8.8l1.9 1.9c.3.3.5.3.8 0 .3-.3.3-.5 0-.8L8.8 8l1.9-1.9c.3-.3.3-.6 0-.8z" />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
export default CloseCircleOutlined;
