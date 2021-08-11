import * as React from 'react';
import Icon from 'assui/lib/Icon';

function CirleDoc(componentProps) {
  const IconNode = (props) => (
    <svg
      id="cirle-doc_svg__\u56FE\u5C42_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 71.9 72.2"
      xmlSpace="preserve"
      {...props}
    >
      <style>{'.cirle-doc_svg__st4{fill:#285a83}.cirle-doc_svg__st5{fill:#ef6f53}'}</style>
      <defs>
        <path id="cirle-doc_svg__SVGID_1_" d="M-931.6-750.8h1920v1578h-1920z" />
      </defs>
      <clipPath id="cirle-doc_svg__SVGID_2_">
        <use xlinkHref="#cirle-doc_svg__SVGID_1_" overflow="visible" />
      </clipPath>
      <defs>
        <path id="cirle-doc_svg__SVGID_3_" d="M-933.5-739.7h1920v1578h-1920z" />
      </defs>
      <clipPath id="cirle-doc_svg__SVGID_4_">
        <use xlinkHref="#cirle-doc_svg__SVGID_3_" overflow="visible" />
      </clipPath>
      <g>
        <path
          className="cirle-doc_svg__st4"
          d="M26.7 46.8h-1.1c-1.9 0-3.5-1.6-3.5-3.5v-.1c0-1.9 1.6-3.5 3.5-3.5h1.1c1.9 0 3.5 1.6 3.5 3.5v.1c0 2-1.6 3.5-3.5 3.5zm-1.1-5.1c-.8 0-1.5.7-1.5 1.5v.1c0 .8.7 1.5 1.5 1.5h1.1c.8 0 1.5-.7 1.5-1.5v-.1c0-.8-.7-1.5-1.5-1.5h-1.1z"
        />
        <path
          className="cirle-doc_svg__st4"
          d="M50.2 51.3H21.7c-1.9 0-3.5-1.6-3.5-3.5V24.1c0-1.9 1.6-3.5 3.5-3.5h28.5c1.9 0 3.5 1.6 3.5 3.5v23.7c-.1 2-1.6 3.5-3.5 3.5zM21.7 22.7c-.8 0-1.5.7-1.5 1.5v23.7c0 .8.7 1.5 1.5 1.5h28.5c.8 0 1.5-.7 1.5-1.5V24.1c0-.8-.7-1.5-1.5-1.5H21.7z"
        />
        <path
          className="cirle-doc_svg__st5"
          d="M48.7 29.1H23.2c-.6 0-1-.4-1-1s.4-1 1-1h25.5c.6 0 1 .4 1 1s-.5 1-1 1zM48.7 33.9H23.2c-.6 0-1-.4-1-1s.4-1 1-1h25.5c.6 0 1 .4 1 1s-.5 1-1 1z"
        />
      </g>
      <g>
        <path
          className="cirle-doc_svg__st4"
          d="M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
        />
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

CirleDoc.displayName = 'CirleDoc';
export default CirleDoc;
