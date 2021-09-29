import * as React from "react";
import Icon from "assui/lib/components/Icon";

function FileTextCircleFilled(componentProps) {
  const IconNode = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <circle fill="currentColor" cx={8} cy={8} r={8} />
      <path
        fill="inherit"
        d="M10.34 4.08H5.66a.68.68 0 00-.66.67v6.5a.68.68 0 00.68.67h2.73a.35.35 0 00.36-.34v-1a.72.72 0 01.72-.71h1.15a.36.36 0 00.36-.38V4.75a.68.68 0 00-.66-.67zm-.48 2.61H6.14a.26.26 0 110-.51h3.72a.26.26 0 110 .51zm0-1.08H6.14a.26.26 0 110-.51h3.72a.26.26 0 110 .51z"
      />
      <path
        fill="inherit"
        d="M9.18 10.82v.8a.3.3 0 00.51.22l1.13-1.13a.3.3 0 00-.22-.51h-.8a.62.62 0 00-.62.62z"
      />
    </svg>
  );

  return <Icon {...componentProps} component={IconNode} />;
}

FileTextCircleFilled.displayName = "FileTextCircleFilled";
export default FileTextCircleFilled;
