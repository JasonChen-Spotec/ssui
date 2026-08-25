import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function CirclePlusFilled(componentProps: IconProps) {
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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm1 12h4v-2h-4V7h-2v4H7v2h4v4h2v-4z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirclePlusFilled.displayName = "CirclePlusFilled";
export default CirclePlusFilled;
