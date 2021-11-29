import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function MailOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4H6a4 4 0 00-4 4v9a4 4 0 004 4h12a4 4 0 004-4V8a4 4 0 00-4-4zM6 5.59h12a2.4 2.4 0 012.3 1.73l-7.54 5.59a1.06 1.06 0 01-1.53-.05L3.72 7.33A2.4 2.4 0 016 5.59zM3.59 17A2.41 2.41 0 006 19.41h12A2.41 2.41 0 0020.4 17V8.97l-6.8 5a2.35 2.35 0 01-1.6.63 2.49 2.49 0 01-1.66-.67l-6.75-5V17z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MailOutlined.displayName = 'MailOutlined';
export default MailOutlined;
