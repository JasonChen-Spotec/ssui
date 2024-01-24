import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function InformationOutLined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 6.46v13.543l8.14-2.359a.5.5 0 00.36-.48V4.662a.5.5 0 00-.64-.48L12.75 6.46zm7.443-3.719L11.25 5.333V20.67a1 1 0 001.278.96l8.779-2.544a2 2 0 001.443-1.921V4.662a2 2 0 00-2.557-1.92z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6 7.874a.75.75 0 01-.474.949l-3.333 1.11a.75.75 0 11-.474-1.422L18.651 7.4a.75.75 0 01.948.474zM19.6 11.207a.75.75 0 01-.474.949l-3.333 1.111a.75.75 0 11-.474-1.423l3.333-1.111a.75.75 0 01.948.474zM19.6 14.54a.75.75 0 01-.474.95l-3.333 1.11a.75.75 0 11-.474-1.423l3.333-1.11a.75.75 0 01.948.473zM4.538 7.763a.75.75 0 00.475.948l3.333 1.112A.75.75 0 108.82 8.4L5.487 7.288a.75.75 0 00-.949.475zM4.538 11.096a.75.75 0 00.475.949l3.333 1.111a.75.75 0 00.474-1.423l-3.333-1.111a.75.75 0 00-.949.474zM4.538 14.43a.75.75 0 00.475.948l3.333 1.111a.75.75 0 00.474-1.423l-3.333-1.11a.75.75 0 00-.949.473z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 6.46v13.543l-8.14-2.359a.5.5 0 01-.36-.48V4.662a.5.5 0 01.64-.48l7.86 2.278zM3.807 2.741l8.943 2.592V20.67a1 1 0 01-1.278.96l-8.779-2.544a2 2 0 01-1.443-1.921V4.662a2 2 0 012.557-1.92z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

InformationOutLined.displayName = 'InformationOutLined';
export default InformationOutLined;
