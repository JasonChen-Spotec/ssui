import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function CreditCardFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 7a3 3 0 013-3h16a3 3 0 013 3v2H1V7z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11h22v6a3 3 0 01-3 3H4a3 3 0 01-3-3v-6zm11 2H5v2h7v-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CreditCardFilled.displayName = "CreditCardFilled";
export default CreditCardFilled;
