import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function TagOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.16 2.02h-.08l-6 .43a2.9 2.9 0 00-2.63 2.63l-.44 6a1.89 1.89 0 00.52 1.5l8.44 8.44c.356.344.835.53 1.33.52a2.79 2.79 0 002-.87l6.37-6.36a2.37 2.37 0 00.35-3.29l-8.49-8.5A1.89 1.89 0 0011.2 2l-.04.02zm.04 1.61a.3.3 0 01.18 0l8.45 8.45a1 1 0 01-.36 1l-6.39 6.39c-.211.229-.5.368-.81.39h-.17l-8.42-8.49a.31.31 0 010-.22l.44-6a1.27 1.27 0 011.04-1.07l6-.43.04-.02zM7.58 9.08a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TagOutlined.displayName = 'TagOutlined';
export default TagOutlined;
