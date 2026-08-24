import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function TransferMoneyFilled(componentProps: IconProps) {
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
        d="M17 1a4 4 0 014 4v7.875A5.5 5.5 0 0016.705 23H7a4 4 0 01-4-4V5a4 4 0 014-4h10zm-5 5.121L9.879 4 8.465 5.414l2.12 2.121H8v2h3v1H8v2h3v2h2v-2h3v-2h-3v-1h3v-2h-2.586l2.121-2.12L14.121 4 12 6.121z"
        fill="currentColor"
      />
      <path
        d="M22.707 17.293a1 1 0 010 1.414L19 22.414 17.586 21l2-2H15v-2h4.586l-2-2L19 13.586l3.707 3.707z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TransferMoneyFilled.displayName = "TransferMoneyFilled";
export default TransferMoneyFilled;
