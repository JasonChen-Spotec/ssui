import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CirculationFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.754 1.477l4.891 4.892-4.891 4.892V8.444h-2.075c-4.965.127-7.381 1.384-8.303 4.152.923-5.535 3.69-8.303 8.302-8.302h2.075V1.476zm-1.447 21.028l-4.892-4.892 4.891-4.89.002 2.814h2.074c4.904 0 7.381-1.383 8.303-4.151-.923 5.535-3.691 8.303-8.302 8.302l-2.076.001v2.816z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirculationFilled.displayName = 'CirculationFilled';
export default CirculationFilled;
