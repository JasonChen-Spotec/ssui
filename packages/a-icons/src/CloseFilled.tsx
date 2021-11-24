import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function CloseFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.719 18.39L13.325 12l6.394-6.343a.946.946 0 00-.04-1.278.93.93 0 00-1.269-.058l-6.412 6.296-6.3-6.343a.93.93 0 00-1.319 0 .944.944 0 000 1.336l6.291 6.334-6.393 6.334a.944.944 0 000 1.336.931.931 0 00.663.273.931.931 0 00.655-.264l6.403-6.352 6.412 6.456a.932.932 0 001.59-.67.945.945 0 00-.281-.666z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CloseFilled.displayName = 'CloseFilled';
export default CloseFilled;
