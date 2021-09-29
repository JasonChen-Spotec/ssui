import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function EarthFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0a8 8 0 108 8 8 8 0 00-8-8zm-.8 14.34A6.39 6.39 0 011.6 8a6.15 6.15 0 01.17-1.43L5.6 10.4v.8a1.6 1.6 0 001.6 1.6v1.54zm5.52-2a1.6 1.6 0 00-1.52-1.14h-.8V8.8a.8.8 0 00-.8-.8H4.8V6.4h1.6a.8.8 0 00.8-.8V4h1.6a1.6 1.6 0 001.6-1.6v-.33a6.4 6.4 0 012.32 10.25z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

EarthFilled.displayName = 'EarthFilled';
export default EarthFilled;
