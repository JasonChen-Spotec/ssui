import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function HomeFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.454 3.803l5.002 3.695A3.733 3.733 0 0121 10.5v6.688a3.903 3.903 0 01-3.988 3.79H6.998A3.903 3.903 0 013 17.189v-6.688a3.733 3.733 0 011.544-3.003l5.002-3.695a4.15 4.15 0 014.908 0zM7.737 16.972h8.526a.71.71 0 100-1.421H7.737a.71.71 0 100 1.42z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

HomeFilled.displayName = 'HomeFilled';
export default HomeFilled;
