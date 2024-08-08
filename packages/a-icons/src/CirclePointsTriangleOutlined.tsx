import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/icon';

function CirclePointsTriangleOutlined(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1.5a4 4 0 100-8 4 4 0 000 8zM12 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 8a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.633 6.794c.977-1.022 2.343-1.445 3.292-1.54l.15 1.492c-.718.072-1.702.399-2.358 1.085-.604.632-1.032 1.674-.499 3.453l-1.436.431c-.667-2.22-.178-3.845.85-4.92zM20.324 13.507c.22 1.506-.32 2.79-.908 3.534l-1.176-.93c.372-.471.75-1.35.6-2.388-.148-1.01-.817-2.302-2.779-3.582l.82-1.256c2.23 1.455 3.22 3.088 3.443 4.622zM9.63 21.114c-1.217-.076-2.21-.62-2.974-1.367l1.048-1.073c.556.543 1.224.893 2.02.943.802.05 1.827-.201 3.098-1.034l.822 1.255c-1.461.957-2.803 1.35-4.014 1.276z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 20.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1.5a3 3 0 100-6 3 3 0 000 6zM5 20.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 22a3 3 0 100-6 3 3 0 000 6zM17.33 11.302c-.27 1.96-1.5 3.695-2.861 4.784L13.5 15c1.14-.911 2.14-2.412 2.345-3.902.196-1.425-.287-3.038-2.286-4.491l.882-1.214c2.401 1.747 3.168 3.884 2.89 5.91z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.537 10.644c1.753-1.262 3.982-1.736 5.718-1.664l-.062 1.499c-1.463-.06-3.346.35-4.78 1.382-1.392 1.002-2.39 2.602-2.166 5.071l-1.494.136c-.275-3.031.989-5.133 2.784-6.424z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.477 18.459C8.944 16.937 8 15.5 8 13h1.5c0 2 .78 3.15 2.034 4.394 1.217 1.209 2.96 1.93 5.358 1.302l.38 1.45c-2.945.772-5.225-.13-6.795-1.687z"
        fill="currentColor"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirclePointsTriangleOutlined.displayName = 'CirclePointsTriangleOutlined';
export default CirclePointsTriangleOutlined;
