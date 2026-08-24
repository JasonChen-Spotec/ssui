import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function ImpassabilityFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM7 11v2h10v-2H7z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ImpassabilityFilled.displayName = "ImpassabilityFilled";
export default ImpassabilityFilled;
