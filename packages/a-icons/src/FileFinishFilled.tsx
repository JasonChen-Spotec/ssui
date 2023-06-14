import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FileFinishFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 10.15h-4.84a2.45 2.45 0 01-2.44-2.46V2.93a.5.5 0 00-.5-.5H8.55a4 4 0 00-4 4v11.14a4 4 0 004 4h6.9a4 4 0 004-4v-6.92a.51.51 0 00-.45-.5z"
        fill="currentColor"
      />
      <path
        d="M14.252 9.05h4.63a.56.56 0 00.39-1l-5.55-5.45a.56.56 0 00-1 .4v4.57a1.48 1.48 0 001.53 1.48z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.902 18.47l3.146-3.24-.021-.03a.786.786 0 00-1.133-1.05l-2.631 2.695-1.049-1.048a.786.786 0 00-1.048 1.143l1.636 1.551c.142.14.334.22.534.22a.796.796 0 00.566-.24z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileFinishFilled.displayName = 'FileFinishFilled';
export default FileFinishFilled;
