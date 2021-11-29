import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function FormFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.24 15.62l-3.41.73a1.832 1.832 0 01-.4 0 1.75 1.75 0 01-1.26-.52 1.81 1.81 0 01-.47-1.66l.73-3.4a3.51 3.51 0 011-1.75l5.7-5.7h-9a4.14 4.14 0 00-4.19 4.19v10.35A4.14 4.14 0 006.08 22h10.36a4.14 4.14 0 004.14-4.14V9.07L15 14.66a3.5 3.5 0 01-1.76.96z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.77 3.11a3.22 3.22 0 014.51-.34 3.22 3.22 0 01-.34 4.56L14.27 14a2.48 2.48 0 01-1.27.64l-3.38.76a.77.77 0 01-.94-1l.73-3.4a2.55 2.55 0 01.69-1.22l6.67-6.67zm.41 4.66l2.24-2.24a.75.75 0 00-1.06-1.06l-2.24 2.24a.75.75 0 001.06 1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FormFilled.displayName = 'FormFilled';
export default FormFilled;
