import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SignalDiffusionOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.367 11.5a1 1 0 102 0 1 1 0 00-2 0zM9.233 15.338a.658.658 0 01-.467-.2A4.995 4.995 0 017.3 11.604c0-1.266.466-2.466 1.366-3.4a.675.675 0 01.934-.033.675.675 0 01.033.933c-.633.7-1 1.567-1 2.5 0 .967.367 1.9 1.067 2.6a.644.644 0 010 .934c-.1.133-.267.2-.467.2z"
        fill="currentColor"
      />
      <path
        d="M6.9 18.071a.658.658 0 01-.467-.2A8.294 8.294 0 014 11.971c0-2.167.833-4.233 2.333-5.767a.675.675 0 01.934-.033.675.675 0 01.033.933 6.94 6.94 0 00-1.967 4.867c0 1.867.734 3.633 2.067 4.933a.644.644 0 010 .934c-.167.166-.333.233-.5.233zm10.833 0a.658.658 0 01-.466-.2.644.644 0 010-.933c1.333-1.334 2.066-3.067 2.066-4.934 0-1.833-.7-3.533-1.966-4.866a.644.644 0 01.033-.934.644.644 0 01.933.034c1.5 1.566 2.334 3.6 2.334 5.766a8.294 8.294 0 01-2.434 5.9c-.166.1-.333.167-.5.167z"
        fill="currentColor"
      />
      <path
        d="M15.367 15.35a.658.658 0 01-.467-.2.644.644 0 010-.933 3.6 3.6 0 001.067-2.6c0-.933-.367-1.833-1-2.5A.644.644 0 0115 8.184a.644.644 0 01.934.033c.866.934 1.366 2.134 1.366 3.4 0 1.334-.533 2.6-1.466 3.534-.1.133-.3.2-.467.2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SignalDiffusionOutlined.displayName = 'SignalDiffusionOutlined';
export default SignalDiffusionOutlined;
