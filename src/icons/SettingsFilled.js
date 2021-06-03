import * as React from "react";
import Icon from "assui/lib/components/Icon";

function SettingsFilled(componentProps) {
  const IconNode = (props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <g data-name="Layer 2">
        <g fill="currentColor" data-name="Layer 1-2">
          <ellipse cx={7.99} cy={8} rx={1.25} ry={1.22} />
          <path d="M15.65 9.67L14.38 9a1.08 1.08 0 01-.44-1.48 1.11 1.11 0 01.44-.42l1.27-.72a.67.67 0 00.25-.92l-1.66-2.87a.7.7 0 00-1-.24L12 3.06a1.13 1.13 0 01-1.1 0 1.07 1.07 0 01-.56-.94V.68A.68.68 0 009.67 0H6.33a.68.68 0 00-.69.68v1.44a1.1 1.1 0 01-1.09 1.1A1.11 1.11 0 014 3.06l-1.31-.71a.69.69 0 00-.94.24L.09 5.41a.65.65 0 00.24.92l1.27.72a1.08 1.08 0 01.44 1.48 1.26 1.26 0 01-.43.47l-1.27.67a.67.67 0 00-.26.92l1.66 2.82a.7.7 0 001 .24L4 12.94a1.12 1.12 0 011.52.37 1 1 0 01.15.57v1.44a.69.69 0 00.7.68h3.29a.68.68 0 00.69-.68v-1.44a1.1 1.1 0 011.09-1.1 1.11 1.11 0 01.59.16l1.26.71a.69.69 0 00.94-.24l1.67-2.82a.67.67 0 00-.26-.92zM8 10.58A2.58 2.58 0 1110.63 8 2.63 2.63 0 018 10.58z" />
        </g>
      </g>
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

SettingsFilled.displayName = "SettingsFilled";
export default SettingsFilled;
