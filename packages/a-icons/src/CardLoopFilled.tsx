import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CardLoopFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6.402a3.5 3.5 0 00-3.5-3.5H5.427C3.538 2.902 2.005 4.407 2 6.267v.18h20v-.045zM2 17.561V8.448h20v9.113c0 1.865-1.533 3.378-3.427 3.383H5.427c-.91 0-1.784-.357-2.427-.991a3.347 3.347 0 01-1-2.392zm13.795.39h1.142a3.037 3.037 0 002.218-.84c.592-.567.92-1.349.909-2.162a.72.72 0 00-.726-.715.72.72 0 00-.726.715c.004.43-.175.84-.493 1.134a1.573 1.573 0 01-1.182.41h-1.152a.697.697 0 00-.058-.896.734.734 0 00-1.026 0l-1.2 1.125a.719.719 0 000 1.039l1.22 1.125a.732.732 0 001.026-.038.697.697 0 00.048-.896zm4.046-5.127l-1.2 1.124a.732.732 0 01-.504.2.718.718 0 01-.636-.39.696.696 0 01.065-.734h-1.161a1.573 1.573 0 00-1.182.41 1.523 1.523 0 00-.493 1.134.72.72 0 01-.726.715.72.72 0 01-.726-.715 2.942 2.942 0 01.919-2.144 3.037 3.037 0 012.208-.83h1.142a.707.707 0 01-.148-.7.733.733 0 011.232-.253l1.21 1.125a.719.719 0 010 1.039v.019zM5.636 15.539a1 1 0 100 2h2.728a1 1 0 100-2H5.636z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CardLoopFilled.displayName = 'CardLoopFilled';
export default CardLoopFilled;
