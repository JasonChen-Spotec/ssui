import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function BiscuitFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.213 7.767a2.27 2.27 0 01-.573 2.553 2.27 2.27 0 00-.01 3.36A2.27 2.27 0 0120 17.63 2.27 2.27 0 0017.63 20a2.27 2.27 0 01-3.9 1.63 2.27 2.27 0 00-3.36 0 2.27 2.27 0 01-4-1.63A2.27 2.27 0 004 17.63a2.27 2.27 0 01-1.63-3.9 2.27 2.27 0 000-3.36 2.27 2.27 0 011.63-4A2.27 2.27 0 006.37 4a2.27 2.27 0 013.95-1.63 2.27 2.27 0 003.36 0A2.27 2.27 0 0117.63 4 2.27 2.27 0 0020 6.37a2.27 2.27 0 012.213 1.397zM10.16 9.75A.75.75 0 009.41 9a.76.76 0 00-.75.75.75.75 0 001.5 0zM14.68 15a.75.75 0 11.75-.75.76.76 0 01-.75.75zm-5.03.41l5.76-5.77v.01a.75.75 0 00-1.06-1.06l-5.76 5.76a.74.74 0 000 1.06.71.71 0 00.53.22.74.74 0 00.53-.22z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BiscuitFilled.displayName = 'BiscuitFilled';
export default BiscuitFilled;
