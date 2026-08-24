import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function UploadSendOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.102 19.041c.567 0 1.028.448 1.028 1s-.46 1-1.028 1H6.82c-.567 0-1.028-.448-1.028-1s.46-1 1.028-1h10.282zm-5.86-15.75a1.05 1.05 0 011.45 0l5.994 5.83a.981.981 0 01.03 1.41c-.193.19-.456.295-.73.295-.274 0-.537-.106-.73-.295l-4.267-4.12v10.63c0 .552-.46 1-1.028 1-.568 0-1.028-.448-1.028-1V6.411l-4.236 4.12a1.05 1.05 0 01-1.396-.053.98.98 0 01-.054-1.357l5.994-5.83z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

UploadSendOutlined.displayName = "UploadSendOutlined";
export default UploadSendOutlined;
