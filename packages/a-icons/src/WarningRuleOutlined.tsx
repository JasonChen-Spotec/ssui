import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function WarningRuleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.86 9.22l-7-7a.75.75 0 00-.53-.22h-3a4.75 4.75 0 00-4.75 4.78v3.62a.75.75 0 001.5 0V6.78a3.25 3.25 0 013.25-3.25h2.25v4.25a2.76 2.76 0 002.75 2.75h4.25v6.25a3.26 3.26 0 01-3.25 3.25h-3.06a.75.75 0 000 1.5h3.06a4.75 4.75 0 004.75-4.75v-7a.75.75 0 00-.22-.56zm-6.78-1.44V4.56l4.47 4.47h-3.22c-.69 0-1.25-.56-1.25-1.25zM8 11.55a5 5 0 100 10 5 5 0 000-10zm0 8.67a3.68 3.68 0 11-.08-7.36A3.68 3.68 0 018 20.22z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.509 13.986a.6.6 0 01.205.823L8.06 15.9H9a.6.6 0 01.557.823l-.8 2a.6.6 0 01-1.114-.446l.47-1.177H7a.6.6 0 01-.515-.909l1.2-2a.6.6 0 01.824-.206z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

WarningRuleOutlined.displayName = 'WarningRuleOutlined';
export default WarningRuleOutlined;
