import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function SpeakerFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.532 16a.485.485 0 01-.32-.126c-.233-.21-.283-.607-.105-.885 1.113-1.76 1.113-4.218 0-5.978-.178-.278-.128-.674.106-.884.234-.211.567-.152.744.126 1.39 2.206 1.39 5.288 0 7.494a.5.5 0 01-.425.253z"
        fill="currentColor"
      />
      <path
        d="M18.822 19a.909.909 0 01-.493-.145c-.362-.241-.438-.695-.164-1.014 2.923-3.437 2.923-8.245 0-11.682-.274-.319-.198-.773.164-1.014.361-.241.876-.174 1.15.145 3.361 3.949 3.361 9.471 0 13.42-.154.194-.405.29-.657.29zM13.449 4.346c-1.004-.577-2.286-.428-3.595.419L7.236 6.469a1.13 1.13 0 01-.592.177H5.362C3.192 6.646 2 7.885 2 10.138v3.725c0 2.254 1.192 3.492 3.362 3.492h1.282c.206 0 .413.066.592.177l2.618 1.704c.789.513 1.56.764 2.277.764a2.61 2.61 0 001.318-.345c.995-.577 1.551-1.778 1.551-3.38V7.726c0-1.601-.556-2.803-1.551-3.38z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SpeakerFilled.displayName = 'SpeakerFilled';
export default SpeakerFilled;
