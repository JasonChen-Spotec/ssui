import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function BarChartFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 12v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9a1 1 0 011-1h3a1 1 0 011 1zm6.5-6h-3a1 1 0 00-1 1v14a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1zM21 2h-3a1 1 0 00-1 1v18a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BarChartFilled.displayName = "BarChartFilled";
export default BarChartFilled;
