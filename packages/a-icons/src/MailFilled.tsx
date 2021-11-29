import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MailFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4h12a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8a4 4 0 014-4zm7.4 9.55l6.34-4.7a.64.64 0 00.14-.89.62.62 0 00-.88-.13l-6.41 4.67a.85.85 0 01-1.23 0L5 7.83a.62.62 0 00-.87.13.64.64 0 00.13.89l6.3 4.65c.392.372.91.582 1.45.59a2.06 2.06 0 001.39-.54z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MailFilled.displayName = 'MailFilled';
export default MailFilled;
