import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function FundProjectionScreenFilled(componentProps: IconProps) {
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
        d="M6.759 2H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C23 6.29 23 6.954 23 7.758v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H13v2h4v2H7v-2h4v-2H6.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 13.71 1 13.046 1 12.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 2 5.954 2 6.758 2zm8.183 8.896l4.043-4.315-1.46-1.368-3.88 4.142-2.58-1.34-.03-.016c-.11-.06-.376-.202-.673-.23a1.429 1.429 0 00-.722.124c-.272.125-.475.348-.56.44l-.022.025-4.043 4.315 1.46 1.367 3.88-4.14 2.58 1.34.03.015c.11.06.376.202.673.23.248.021.497-.021.723-.125.271-.124.474-.347.559-.44l.022-.024z"
        fill="currentCOlor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FundProjectionScreenFilled.displayName = "FundProjectionScreenFilled";
export default FundProjectionScreenFilled;
