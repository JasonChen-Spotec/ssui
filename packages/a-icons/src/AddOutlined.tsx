import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function AddOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm13.704 17.704A2.41 2.41 0 0020.41 18V6A2.41 2.41 0 0018 3.59H6A2.41 2.41 0 003.59 6v12A2.41 2.41 0 006 20.41h12a2.41 2.41 0 001.704-.706z"
        fill="currentColor"
      />
      <path
        d="M16 11.25h-3.25V8a.75.75 0 00-1.5 0v3.25H8a.75.75 0 000 1.5h3.25V16a.75.75 0 001.5 0v-3.25H16a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AddOutlined.displayName = 'AddOutlined';
export default AddOutlined;
