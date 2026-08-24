import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function FourDotFilled(componentProps: IconProps) {
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
        d="M2.5 6.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM17.25 2.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM17.25 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM6.75 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FourDotFilled.displayName = "FourDotFilled";
export default FourDotFilled;
