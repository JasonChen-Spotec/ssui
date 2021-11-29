import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function AlertTriangleFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.855 15.504l-5.64-10.44a4 4 0 00-7 0l-5.73 10.43a4 4 0 003.51 5.91h11.34a4 4 0 003.52-5.9zm-10-5.76a.75.75 0 011.5 0v3.09a.75.75 0 01-1.5 0v-3.09zm.76 6.75a.75.75 0 00.75-.75l-.01-.01a.74.74 0 00-.74-.74.76.76 0 00-.75.75c0 .414.336.75.75.75z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

AlertTriangleFilled.displayName = 'AlertTriangleFilled';
export default AlertTriangleFilled;
