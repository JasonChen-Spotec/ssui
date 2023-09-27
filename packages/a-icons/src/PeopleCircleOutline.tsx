import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleCircleOutline(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2a10 10 0 00-7.35 16.76 10.001 10.001 0 0014.7 0A9.999 9.999 0 0012 2zm0 18a8 8 0 01-5.55-2.25 6 6 0 0111.1 0A8 8 0 0112 20zm-2-10a2 2 0 114 0 2 2 0 01-4 0zm8.91 6A8 8 0 0015 12.62a4 4 0 10-6 0A8 8 0 005.09 16 7.92 7.92 0 014 12a8 8 0 1116 0 7.92 7.92 0 01-1.09 4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleCircleOutline.displayName = 'PeopleCircleOutline';
export default PeopleCircleOutline;
