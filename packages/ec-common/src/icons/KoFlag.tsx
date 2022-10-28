import * as React from 'react';
import { SVGProps } from 'react';
const SvgKoFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect
      x={0.25}
      y={0.25}
      width={24.754}
      height={17.5}
      rx={1.75}
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth={0.5}
    />
    <mask
      id="KOFlag_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={26}
      height={18}
    >
      <rect
        x={0.25}
        y={0.25}
        width={24.754}
        height={17.5}
        rx={1.75}
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.5}
      />
    </mask>
    <g mask="url(#KOFlag_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.627 13.2A4.204 4.204 0 0 0 16.836 9c0-2.32-1.884-4.2-4.21-4.2A4.204 4.204 0 0 0 8.419 9c0 2.32 1.884 4.2 4.209 4.2Z"
        fill="#E01B41"
      />
      <mask
        id="KOFlag_svg__b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={8}
        y={4}
        width={9}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.627 13.2A4.204 4.204 0 0 0 16.836 9c0-2.32-1.884-4.2-4.21-4.2A4.204 4.204 0 0 0 8.419 9c0 2.32 1.884 4.2 4.209 4.2Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#KOFlag_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.417 9.6c1.203 1.125 3.007 1.8 4.21 0 1.202-1.8 3.607-1.8 4.208 0s0 3.6 0 3.6H8.417s-1.202-4.725 0-3.6Z"
          fill="#0E4B9C"
        />
      </g>
      <path
        opacity={0.75}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.552 3.23a.334.334 0 0 1 .456-.122l.463.267c.16.092.215.295.122.455l-1.47 2.54a.334.334 0 0 1-.455.123l-.464-.268a.333.333 0 0 1-.122-.455l1.47-2.54Zm13.232.145a.333.333 0 0 0-.122.455l1.47 2.54c.092.16.296.215.456.123l.464-.267a.333.333 0 0 0 .122-.455l-1.47-2.54a.334.334 0 0 0-.456-.123l-.464.267Zm-1.562.9a.333.333 0 0 0-.122.455l1.47 2.54c.092.16.296.215.456.123l.463-.267a.333.333 0 0 0 .122-.455l-1.47-2.54a.334.334 0 0 0-.455-.123l-.464.267ZM4.082 12.23a.333.333 0 0 1 .122-.455l.464-.267a.334.334 0 0 1 .455.122l1.47 2.54a.333.333 0 0 1-.122.455l-.463.268a.334.334 0 0 1-.456-.123l-1.47-2.54Zm1.684-1.355a.333.333 0 0 0-.122.455l1.47 2.54c.092.16.296.214.456.123l.464-.268a.333.333 0 0 0 .122-.455l-1.47-2.54a.334.334 0 0 0-.456-.122l-.464.267Zm12.804-.145a.334.334 0 0 1 .456-.122l.463.267c.16.092.215.296.122.455l-1.47 2.54a.334.334 0 0 1-.455.123l-.464-.268a.333.333 0 0 1-.122-.454l1.47-2.541Zm2.018.778a.334.334 0 0 0-.456.122l-1.47 2.54a.333.333 0 0 0 .122.456l.464.267c.16.092.363.037.456-.122l1.47-2.541a.333.333 0 0 0-.122-.455l-.464-.267ZM7.57 4.008a.334.334 0 0 0-.456.122l-1.47 2.54a.333.333 0 0 0 .122.455l.464.268c.16.091.363.037.456-.123l1.47-2.54a.333.333 0 0 0-.122-.455l-.464-.267Z"
        fill="#262626"
      />
    </g>
  </svg>
);
export default SvgKoFlag;
