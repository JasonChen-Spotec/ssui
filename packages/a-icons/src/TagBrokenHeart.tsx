import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function TagBrokenHeart(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.172 10.146a1.02 1.02 0 00-1.448 0l-.724.728a2.04 2.04 0 01-2.896 0c-.8-.805-.8-2.108 0-2.912l5.765-5.798a6.627 6.627 0 016.182 1.794 6.719 6.719 0 01.348 9.085l-2.159 2.198-5.068-5.095zM2.95 3.958a6.631 6.631 0 018.201-.965L7.656 6.506a4.134 4.134 0 000 5.823 4.08 4.08 0 005.644.142l.148-.142 4.344 4.368-4.344 4.368a2.04 2.04 0 01-2.896 0l-7.603-7.644a6.717 6.717 0 010-9.463z"
        fill="#47A92A"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

TagBrokenHeart.displayName = 'TagBrokenHeart';
export default TagBrokenHeart;
