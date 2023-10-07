import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function GiftWithClipFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.666 12v5a3.332 3.332 0 01-3.333 3.333H8.666A3.332 3.332 0 015.333 17v-5c0-.459.375-.834.833-.834h1.642c.458 0 .833.375.833.834v2.617a1.678 1.678 0 001.667 1.674c.317 0 .633-.091.908-.274l.792-.517.733.492a1.642 1.642 0 001.7.091c.55-.291.892-.85.892-1.475V12c0-.459.375-.834.833-.834h1.667c.458 0 .833.375.833.834zM19.5 7.833v.833c0 .917-.418 1.667-1.579 1.667H6.08c-1.208 0-1.579-.75-1.579-1.667v-.833c0-.917.371-1.667 1.579-1.667H17.92c1.16 0 1.579.75 1.579 1.667z"
        fill="currentColor"
      />
      <path
        d="M11.167 6.167H7.179c-.246-.206-.238-.523.022-.723l1.025-.79a.848.848 0 01.976 0l1.965 1.513zM16.785 6.167H12l2.358-1.513c.32-.205.85-.205 1.17 0l1.231.79c.312.2.321.517.026.723zM13.67 11.166c.457 0 .83.365.83.81v2.534c0 .647-.738 1.036-1.285.671l-.746-.485a.845.845 0 00-.913 0l-.78.502c-.546.356-1.276-.033-1.276-.672v-2.55c0-.445.373-.81.83-.81h3.34z"
        fill="currentColor"
      />
      <circle cx={18.5} cy={16.5} r={4.5} fill="inhrite" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.488 14.733c.8-.8 2.1-.8 2.9 0 .799.8.799 2.1 0 2.9l-.973.972c-.46.46-1.202.46-1.662 0a1.174 1.174 0 010-1.662l.617-.618a.3.3 0 11.425.425l-.618.617a.574.574 0 000 .813.574.574 0 00.814 0l.972-.972a1.452 1.452 0 000-2.05 1.452 1.452 0 00-2.05 0l-1.06 1.06a1.203 1.203 0 000 1.698.3.3 0 11-.426.423 1.803 1.803 0 01.001-2.546l1.06-1.06z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

GiftWithClipFilled.displayName = 'GiftWithClipFilled';
export default GiftWithClipFilled;
