import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function MoneyReceiveOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.999 3.004h-1c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9v-1h2v1c0 6.072-4.928 11-11 11s-11-4.928-11-11 4.928-11 11-11h1v2z"
        fill="currentColor"
      />
      <path
        d="M13.124 7.504h2.25v2.25h-3.938a.563.563 0 000 1.125h1.126a2.813 2.813 0 01.562 5.567v1.183h-2.25v-1.125h-2.25v-2.25h3.938a.562.562 0 100-1.125h-1.125a2.812 2.812 0 01-.563-5.568V6.379h2.25v1.125zM23.413 2.004l-4 4H22v2h-5a1 1 0 01-1-1v-5h2V4.59l4-4 1.414 1.414z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

MoneyReceiveOutlined.displayName = 'MoneyReceiveOutlined';
export default MoneyReceiveOutlined;
