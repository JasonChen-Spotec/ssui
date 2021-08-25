import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function ExclamationCircleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9S4.2 1.1 8 1.1s6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"
      />
      <path
        fill="currentColor"
        d="M7.1 4.3c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9zM8 12.8c-.5 0-.9-.4-.9-.9V7c0-.5.4-.9.9-.9s.9.4.9.9v4.9c0 .5-.4.9-.9.9z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
export default ExclamationCircleOutlined;
