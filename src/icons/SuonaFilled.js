import * as React from "react";
import Icon from "assui/lib/Icon";

function SuonaFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <g data-name="Layer 2">
        <g fill="currentColor" data-name="Layer 1-2">
          <path d="M10.83 2.26a.52.52 0 00-.51-.06L4.19 4.58H1a1 1 0 00-1 1v2.58a1 1 0 001 1h.35l.72 3.69a1.37 1.37 0 002.67-.52L4.16 9.2l6.13 2.38a.51.51 0 00.2 0 .55.55 0 00.55-.55V2.71a.54.54 0 00-.21-.45zM14.51 3.28a.69.69 0 00-1.07.86.57.57 0 00.11.11 3.73 3.73 0 010 5.28.69.69 0 001 1 5.11 5.11 0 00-.04-7.25z" />
          <path d="M13.11 5.37a.68.68 0 00-1 1 .79.79 0 010 1.12.67.67 0 000 1 .63.63 0 00.48.2.7.7 0 00.49-.2 2.15 2.15 0 00.03-3.12z" />
        </g>
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SuonaFilled.displayName = "SuonaFilled";
export default SuonaFilled;
