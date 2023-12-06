import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GrowthGraphOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 16a1.5 1.5 0 001.5-1.5.77.77 0 000-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 103 0v-.08L20 9.5A1.5 1.5 0 1018.5 8a.767.767 0 000 .15l-3.61 3.61h-.16L13 10a1.5 1.5 0 10-3 0l-3 3a1.5 1.5 0 100 3zm13.5 4h-17V3a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GrowthGraphOutlined.displayName = 'GrowthGraphOutlined';
export default GrowthGraphOutlined;
