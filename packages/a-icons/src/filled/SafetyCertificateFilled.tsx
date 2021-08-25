import * as React from 'react';
import Icon, { IconProps } from 'assui/lib/icon';

function SafetyCertificateFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0c2.6 1.2 4.6 1.9 6.2 2 .3 0 .6.3.6.6v6C14.2 12.2 12 14.7 8 16c-4-1.3-6.3-3.8-6.8-7.4v-6c0-.3.3-.6.6-.6 1.6-.1 3.7-.8 6.2-2zm3.6 5.2c-.2-.2-.6-.2-.8 0L7.1 8.9 5.2 7c-.2-.3-.6-.3-.8 0-.2.2-.2.6 0 .8l2.3 2.3c.1.1.3.2.4.2.1 0 .3-.1.4-.2L11.6 6c.3-.2.3-.6 0-.8z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SafetyCertificateFilled.displayName = 'SafetyCertificateFilled';
export default SafetyCertificateFilled;
