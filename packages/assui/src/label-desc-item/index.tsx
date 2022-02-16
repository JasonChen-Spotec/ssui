import React from 'react';
import classNames from 'classnames';

export type DescItemProps = {
  /** 自定义class */
  className?: string;
  /** label 标签的文本	 */
  label?: React.ReactNode;
  /** descItem的value	 */
  value?: React.ReactNode;
  /** 带有后缀的 item */
  suffix?: React.ReactNode;
};

const DescItem: React.FC<DescItemProps> = (props) => {
  const { className, label, value, suffix } = props;
  return (
    <div className={classNames('desc-item', className)}>
      <div className="desc-item-left-content">
        {label && <div className="desc-item-label">{label}</div>}
        <div className="desc-item-value">{value}</div>
      </div>
      {suffix && <div className="desc-item-value">{suffix}</div>}
    </div>
  );
};

export default DescItem;
