import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function ChainFilled(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={6.9} y={16.3} width={0.8} height={0.8} rx={0.23} fill="currentColor" />
      <rect x={16.3} y={16.3} width={0.8} height={0.8} rx={0.23} fill="currentColor" />
      <rect x={6.9} y={6.9} width={0.8} height={0.8} rx={0.23} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.56 2.44H8.44a6 6 0 00-6 6v7.12a6 6 0 006 6h7.12a6 6 0 006-6V8.44a6 6 0 00-6-6zM5.35 7.13c0-.983.797-1.78 1.78-1.78h.35a1.79 1.79 0 011.66 1.18h3.57a.78.78 0 010 1.55H9.14a1.78 1.78 0 01-1.66 1.17h-.35a1.78 1.78 0 01-1.78-1.77v-.35zm2.13 11.52a1.78 1.78 0 001.77-1.78v-.35a1.78 1.78 0 00-1.17-1.66v-3.57a.77.77 0 00-.78-.77.76.76 0 00-.77.77v3.57a1.79 1.79 0 00-1.18 1.66v.35c0 .983.797 1.78 1.78 1.78h.35zm11.17-1.78a1.78 1.78 0 01-1.78 1.78h-.35a1.79 1.79 0 01-1.66-1.18h-3.57a.76.76 0 01-.77-.77.77.77 0 01.77-.78h3.57a1.78 1.78 0 011.66-1.17h.35c.98 0 1.774.79 1.78 1.77v.35zm-1.18-7.73a1.79 1.79 0 001.18-1.66v-.35a1.78 1.78 0 00-1.78-1.78h-.35c-.98.006-1.77.8-1.77 1.78v.35a1.78 1.78 0 001.17 1.66v3.57a.78.78 0 001.55 0V9.14z"
        fill="currentColor"
      />
      <rect x={16.3} y={6.9} width={0.8} height={0.8} rx={0.23} fill="currentColor" />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

ChainFilled.displayName = 'ChainFilled';
export default ChainFilled;
