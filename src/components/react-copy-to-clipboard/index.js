import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'antd';

const CopyToClipboardWrap = ({ children, text, tooltipTitle, onCopySuccess, tooltipProps, ...restProps }) => {
  const [ tooltipVisible, setTooltipVisible ] = useState(false);
  const handleCopySuccess = () => {
    setTooltipVisible(true);
    onCopySuccess && onCopySuccess();

    setTimeout(() => {
      setTooltipVisible(false);
    }, 1000);
  };

  return (
    <CopyToClipboard {...restProps} text={text} onCopy={handleCopySuccess}>
      <Tooltip
        placement="topLeft"
        visible={tooltipVisible}
        title={tooltipTitle}
        {...tooltipProps}
      >
        {children}
      </Tooltip>
    </CopyToClipboard>
  );
};

CopyToClipboardWrap.defaultProps = {
  tooltipProps: {}
};

export default CopyToClipboardWrap;
