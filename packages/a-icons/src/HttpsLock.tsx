import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function HttpsLock(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.5} y={0.5} width={23} height={23} rx={11.5} fill="#FAE8E8" />
      <rect x={0.5} y={0.5} width={23} height={23} rx={11.5} stroke="#fff" />
      <path
        d="M15.6 9v2.1h1.5V18H6.9v-6.9h1.5V9a3.6 3.6 0 017.2 0zm-6 0v2.1h4.8V9a2.4 2.4 0 10-4.8 0zm2.4 4.35a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
        fill="#E06B67"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HttpsLock.displayName = "HttpsLock";
export default HttpsLock;
