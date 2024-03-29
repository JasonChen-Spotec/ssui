import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CoinOverlapLockFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="fill" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.674 3.277c-1.759-.225-3.428-.127-4.713.244-.641.185-1.224.448-1.674.804-.455.36-.812.846-.89 1.458l-.072.562c.445.438.956.82 1.547 1.126 1.272.66 3.066 1.193 5.08 1.451 2.012.258 3.883.194 5.28-.123a6.405 6.405 0 001.78-.7l.073-.562c.078-.612-.145-1.173-.494-1.635-.346-.458-.843-.86-1.417-1.2-1.15-.683-2.74-1.199-4.5-1.425zM3.795 10.48l.3-2.334c.328.244.683.468 1.068.668 1.471.762 3.45 1.337 5.595 1.612 2.146.274 4.205.218 5.821-.15a7.854 7.854 0 001.203-.376l-.3 2.334a6.405 6.405 0 01-1.78.7c-1.397.317-3.268.38-5.28.123-2.014-.258-3.808-.792-5.08-1.451a6.405 6.405 0 01-1.547-1.126zM3.564 12.28l-.13 1.02c-.079.613.144 1.174.493 1.636.346.458.843.86 1.417 1.2 1.15.683 2.74 1.2 4.5 1.425 1.76.225 3.428.127 4.713-.244.642-.185 1.224-.448 1.674-.804.455-.36.812-.846.89-1.458l.131-1.02c-.38.153-.78.28-1.203.376-1.616.367-3.675.424-5.82.15-2.146-.276-4.124-.85-5.596-1.613-.385-.2-.74-.424-1.069-.668z"
        fill="currentColor"
      />
      <path
        d="M21.644 17.313a5.313 5.313 0 11-10.626 0 5.313 5.313 0 0110.626 0z"
        fill="inherit"
      />
      <path
        d="M18.046 15.968l-.33.084-.171-.665a1.538 1.538 0 00-1.88-1.116 1.539 1.539 0 00-1.11 1.882l.17.665-.331.085a.343.343 0 00-.246.415l.682 2.664a.343.343 0 00.415.246l3.652-.935a.344.344 0 00.25-.416l-.682-2.665a.344.344 0 00-.42-.244zm-.83.212l-1.992.51-.17-.665a1.032 1.032 0 01.74-1.254 1.032 1.032 0 011.251.744l.17.665z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CoinOverlapLockFilled.displayName = 'CoinOverlapLockFilled';
export default CoinOverlapLockFilled;
