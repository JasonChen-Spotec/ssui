import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function PeopleConfirmFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.781 11.17h-.997a3.988 3.988 0 01-3.988-3.988V4.55a3.34 3.34 0 013.35-3.35h2.273a3.34 3.34 0 013.35 3.35v2.632a3.988 3.988 0 01-3.988 3.988z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.959 12.83H5.886a3.28 3.28 0 00-3.16 2.702l-.24 1.136a3.38 3.38 0 003.17 4.138h5.76a6.619 6.619 0 01-.708-2.99 6.63 6.63 0 012.25-4.986z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.354 22.8a4.985 4.985 0 100-9.97 4.985 4.985 0 000 9.97zm-.31-2.093l3.75-4.8-.788-.616-3.39 4.34-1.851-1.974-.73.684 2.25 2.4.4.426.36-.46z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleConfirmFilled.displayName = 'PeopleConfirmFilled';
export default PeopleConfirmFilled;
