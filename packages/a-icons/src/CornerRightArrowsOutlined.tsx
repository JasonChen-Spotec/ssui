import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CornerRightArrowsOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2.586l5.707 5.707a1 1 0 010 1.414L15 15.414 13.586 14l4-4H13.6c-1.697 0-2.909 0-3.86.079-.938.076-1.533.223-2.01.466a5 5 0 00-2.185 2.185c-.243.477-.39 1.072-.467 2.01C5.001 15.692 5 16.904 5 18.6V21H3v-2.444c0-1.643 0-2.937.085-3.978.087-1.063.267-1.95.678-2.756a7 7 0 013.06-3.059c.805-.41 1.692-.591 2.755-.678C10.619 8 11.913 8 13.556 8h4.03l-4-4L15 2.586z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CornerRightArrowsOutlined.displayName = 'CornerRightArrowsOutlined';
export default CornerRightArrowsOutlined;
