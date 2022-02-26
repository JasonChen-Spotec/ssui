import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function ContactsBookFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 2v20H3V2h4zm2 0h10.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9V2zm13 4h2v4h-2V6zm0 6h2v4h-2v-4zm-7 0a2 2 0 100-4 2 2 0 000 4zm-3 4h6a3 3 0 00-6 0z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ContactsBookFilled.displayName = 'ContactsBookFilled';
export default ContactsBookFilled;
