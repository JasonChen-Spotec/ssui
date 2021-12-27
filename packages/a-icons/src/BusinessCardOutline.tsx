import * as React from 'react';
import Icon, { IconProps } from 'a-base-icon/lib/Icon';

function BusinessCardOutline(componentProps: IconProps) {
  const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={0.7}
        y={3.7}
        width={22.6}
        height={16.6}
        rx={1.3}
        stroke="currentColor"
        strokeWidth={1.4}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.46 6.8h.544A2.167 2.167 0 019.21 8.958v.659a2.435 2.435 0 11-4.87 0v-.659c0-1.177.943-2.137 2.12-2.158zm.277 3.82c.554 0 1.003-.45 1.003-1.003v-.659a.735.735 0 00-.736-.725H6.46c-.4 0-.725.324-.725.725v.659c0 .554.448 1.002 1.002 1.002zM8.427 12.548c.935.018 1.73.687 1.91 1.604l.085.44a2.09 2.09 0 01-.42 1.727 1.91 1.91 0 01-1.499.716H4.961a1.91 1.91 0 01-1.49-.716 2.062 2.062 0 01-.429-1.728l.096-.44a1.976 1.976 0 011.91-1.603h3.379zm.076 3.055a.544.544 0 00.392-.19.668.668 0 00.124-.536l-.086-.439a.554.554 0 00-.516-.458h-3.37a.544.544 0 00-.506.458l-.086.44a.601.601 0 00.124.534.496.496 0 00.382.191h3.542z"
        fill="currentColor"
      />
      <path
        d="M13.5 9h7M13.5 12h7M13.5 15h7"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

BusinessCardOutline.displayName = 'BusinessCardOutline';
export default BusinessCardOutline;
