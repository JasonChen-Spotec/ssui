import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function PeopleTieOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.286 5.286A2.286 2.286 0 1012 7.571v2l-.221-.005a4.286 4.286 0 01-4.06-4.06l-.006-.22A4.287 4.287 0 0112.001 1l.22.006a4.286 4.286 0 014.065 4.28l-.006.22A4.285 4.285 0 0112 9.57v-2a2.286 2.286 0 002.286-2.285zM18.714 15.143c0-1.413-1.087-2.56-2.428-2.56H7.714c-1.34 0-2.428 1.147-2.428 2.56v6.824h-2v-6.823c0-2.578 1.983-4.668 4.428-4.668h8.572c2.445 0 4.428 2.09 4.428 4.667v6.824h-2v-6.823z"
        fill="currentColor"
      />
      <path
        d="M12 14.084a.84.84 0 01.735.462l2.572 4.85c.214.404.121.919-.216 1.204l-2.571 2.174a.793.793 0 01-1.04 0L8.91 20.6c-.338-.285-.43-.8-.217-1.204l2.572-4.85.063-.102a.826.826 0 01.672-.36zm-1.463 5.541L12 20.862l1.462-1.237L12 16.867l-1.463 2.758z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

PeopleTieOutlined.displayName = 'PeopleTieOutlined';
export default PeopleTieOutlined;
