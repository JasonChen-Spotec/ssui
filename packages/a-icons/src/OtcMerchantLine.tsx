import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function OtcMerchantLine(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.605 17.395c-1.582 0-2.478-.61-2.478-2.946 0-2.335.897-2.946 2.478-2.946 1.605 0 2.478.611 2.478 2.946s-.873 2.946-2.478 2.946zm0-1.048c1.007 0 1.227-.487 1.227-1.898 0-1.394-.22-1.922-1.227-1.922-1 0-1.22.528-1.22 1.922 0 1.411.22 1.898 1.22 1.898zM13.909 11.586a.549.549 0 110 1.098h-.883v4.034a.594.594 0 11-1.188 0v-4.035h-.884a.549.549 0 010-1.098h2.955zM17.544 17.395c-1.597 0-2.644-.545-2.644-2.946 0-2.211 1.03-2.946 2.636-2.946.352 0 .664.032.934.092.208.046.34.24.34.453 0 .353-.354.602-.704.558a3.934 3.934 0 00-.491-.03c-.984 0-1.417.462-1.417 1.865 0 1.485.433 1.865 1.4 1.865.194 0 .38-.012.563-.039.353-.051.712.197.712.554 0 .203-.12.39-.316.444-.287.08-.638.13-1.013.13z"
        fill="currentColor"
      />
      <path
        d="M3.87 3.15a1 1 0 01.855-.483h14.55a1 1 0 01.856.483l2.654 4.4a.03.03 0 01-.01.04v0a7.488 7.488 0 01-7.16-.006v0a.03.03 0 00-.029 0v0a7.49 7.49 0 01-7.172 0v0a.03.03 0 00-.028 0v0a7.488 7.488 0 01-7.16.007v0a.03.03 0 01-.011-.04L3.869 3.15z"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
      <path
        d="M3.163 9.049v9.783a2 2 0 002 2h13.674a2 2 0 002-2V9.049"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

OtcMerchantLine.displayName = 'OtcMerchantLine';
export default OtcMerchantLine;
