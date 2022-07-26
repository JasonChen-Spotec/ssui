import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function EarthFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 3a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm-1.68 7.88c-.429 0-.858.427-1.288.856-.432.431-.866.864-1.302.864a.84.84 0 00-.86.86l.86 1.73s0 2.59.87 3.45c.87.86 0 .86 0 .86a7.26 7.26 0 01-4.52-6.06 7.85 7.85 0 011.6-5.58.77.77 0 011.2-.05c.194.283.508.46.85.48.87 0 3.46 2.59 2.59 2.59zm7.21 4.058c.498.273.969.532 1.3.382 1.45-.65.95-4.52.95-4.52s-.73-3.38-2.68-4.11c-.267-.089-.47.282-.7.702-.261.478-.557 1.018-1.02 1.018-.87 0-1.73.01-1.73.87 0 .43.432.863.865 1.295.432.433.865.865.865 1.295 0 .86 0 2.58.86 2.58.4 0 .856.25 1.29.488z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EarthFilled.displayName = 'EarthFilled';
export default EarthFilled;
