import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function TrashCanFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 5h-2.67l-1.21-1.32A2.37 2.37 0 0013.21 3h-2.92a2.39 2.39 0 00-1.68.71L7.42 5H4.75a.75.75 0 000 1.5h14a.75.75 0 000-1.5zm-9.06-.26a.86.86 0 01.6-.25h2.92a.84.84 0 01.58.23l.25.27H9.46l.23-.25zM4.23 9.52V17a4.46 4.46 0 004.46 4.46h6.12A4.46 4.46 0 0019.27 17V9.52a2 2 0 00-2-2h-11a2 2 0 00-2.04 2zm5.27 3.53a.75.75 0 01-1.5 0v-2.37a.75.75 0 011.5 0v2.37zm2.25 4.7a.75.75 0 00.75-.75v-6.32a.75.75 0 00-1.5 0V17c0 .414.336.75.75.75zm3.75-4.7a.75.75 0 01-1.5 0v-2.37a.75.75 0 011.5 0v2.37z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TrashCanFilled.displayName = 'TrashCanFilled';
export default TrashCanFilled;
