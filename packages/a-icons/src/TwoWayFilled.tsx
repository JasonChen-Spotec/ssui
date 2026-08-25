import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function TwoWayFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={1} y={1} width={22} height={22} rx={3.667} fill="currentColor" />
      <path
        d="M15.976 5.372v2.651h-5.302v2.651h5.302v2.652l4.64-3.977-4.64-3.977zM8.023 18.629v-2.652h5.302v-2.651H8.023v-2.652l-4.64 3.978 4.64 3.977z"
        fill="#fff"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TwoWayFilled.displayName = "TwoWayFilled";
export default TwoWayFilled;
