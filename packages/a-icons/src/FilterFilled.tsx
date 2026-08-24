import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function FilterFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.126 7A4.002 4.002 0 0122 8a4 4 0 01-7.874 1H2V7h12.126zM2 16a4 4 0 017.874-1H22v2H9.874A4.002 4.002 0 012 16z"
        fill="currentCOlor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FilterFilled.displayName = "FilterFilled";
export default FilterFilled;
