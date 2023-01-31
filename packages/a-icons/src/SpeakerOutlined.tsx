import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SpeakerOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2.833 10.167v3.666c0 1.834.917 2.75 2.75 2.75h1.311c.34 0 .679.101.972.275l2.677 1.678c2.31 1.448 4.207.394 4.207-2.329V7.792c0-2.731-1.898-3.776-4.207-2.328L7.866 7.142a1.922 1.922 0 01-.972.275h-1.31c-1.834 0-2.75.916-2.75 2.75z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M17.5 8.333a6.105 6.105 0 010 7.334M19.177 6.042a9.927 9.927 0 010 11.916"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SpeakerOutlined.displayName = 'SpeakerOutlined';
export default SpeakerOutlined;
