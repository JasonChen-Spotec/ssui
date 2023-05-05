import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function FilterCupOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.961 2h14.18v.01a2.9 2.9 0 012.05 5l-4.77 4.77a2.91 2.91 0 00-.85 2v4.4a2.91 2.91 0 01-1.16 2.32l-1.24.93a2.89 2.89 0 01-4.64-2.32v-5.33a2.91 2.91 0 00-.85-2l-4.77-4.77A2.9 2.9 0 014.961 2zm15.48 2.37a1.4 1.4 0 00-1.3-.87H4.961a1.4 1.4 0 00-1.3.87 1.38 1.38 0 00.31 1.53l4.79 4.77a4.36 4.36 0 011.29 3.11v5.33a1.39 1.39 0 001.37 1.41 1.35 1.35 0 00.83-.29l1.24-.93a1.4 1.4 0 00.56-1.12v-4.4a4.36 4.36 0 011.31-3.11l4.77-4.77a1.38 1.38 0 00.31-1.53z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilterCupOutlined.displayName = 'FilterCupOutlined';
export default FilterCupOutlined;
