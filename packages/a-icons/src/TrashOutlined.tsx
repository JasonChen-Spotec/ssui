import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function TrashOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.79 7a.79.79 0 00-.79.79v8.84A3.37 3.37 0 0114.63 20H8.95a3.37 3.37 0 01-3.37-3.37V7.79a.79.79 0 10-1.58 0v8.84a5 5 0 005 4.95h5.68a5 5 0 004.95-4.95V7.79a.79.79 0 00-.84-.79z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.79 5.58h-14a.79.79 0 110-1.58h2.65l1.18-1.28A2.41 2.41 0 0110.33 2h2.92a2.39 2.39 0 011.69.7l1.2 1.3h2.65a.79.79 0 110 1.58zm-5.54-2h-2.92a.8.8 0 00-.54.21l-.19.2h4.38l-.19-.2a.78.78 0 00-.54-.21z"
        fill="currentColor"
      />
      <path
        d="M8.04 8.79v3a.75.75 0 001.5 0v-3a.75.75 0 10-1.5 0zM11.04 8.79v8a.75.75 0 001.5 0v-8a.75.75 0 00-1.5 0zM14.04 8.79v3a.75.75 0 001.5 0v-3a.75.75 0 00-1.5 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TrashOutlined.displayName = 'TrashOutlined';
export default TrashOutlined;
