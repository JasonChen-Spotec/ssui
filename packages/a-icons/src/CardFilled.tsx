import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function CardFilled(componentProps: IconProps) {
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
        d="M2 4a3 3 0 013-3h14a3 3 0 013 3v3a3 3 0 01-3 3v10a3 3 0 01-3 3H8a3 3 0 01-3-3V10a3 3 0 01-3-3V4zm5 .5h10v2H7v-2zm1.731 6.14L9.865 12H9v2h2v1H9v2h2v2h2v-2h2v-2h-2v-1h2v-2h-.865l1.133-1.36-1.537-1.28L12 11.438 10.268 9.36 8.73 10.64z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardFilled.displayName = "CardFilled";
export default CardFilled;
