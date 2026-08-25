import * as React from "react";
import Icon, { IconProps } from "a-base-icon/lib/icon";

function DashboardFilled(componentProps: IconProps) {
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
        d="M14.851 1.04l.047.005a9 9 0 018.057 8.057l.005.047c.021.18.065.567-.092.937-.129.304-.37.57-.66.73-.22.12-.432.157-.59.172-.131.012-.277.012-.394.012h-6.447c-.12 0-.261 0-.387-.01a1.508 1.508 0 01-.571-.153 1.5 1.5 0 01-.655-.656 1.507 1.507 0 01-.154-.571C13 9.485 13 9.342 13 9.223V2.8v-.024c0-.117 0-.263.012-.394.015-.158.052-.37.172-.59a1.53 1.53 0 01.73-.66c.37-.157.757-.113.937-.092zm-5.702 4c.18-.02.567-.065.937.092.304.129.57.37.73.66.12.22.157.432.172.59.012.131.012.277.012.394V11.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437c.214.11.494.11 1.054.11h4.6l.024-.001c.117 0 .263 0 .394.012.158.015.37.052.59.173.29.158.531.425.66.73.157.37.113.756.092.936a9 9 0 11-9.859-9.806l.048-.005z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

DashboardFilled.displayName = "DashboardFilled";
export default DashboardFilled;
