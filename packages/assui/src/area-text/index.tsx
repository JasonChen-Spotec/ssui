import React from 'react';
import classNames from 'classnames';

export type AreaTextProps = {
  className?: string;
  value?: string;
};

const AreaText: React.FC<AreaTextProps> = ({ value, className }) => (
  <div className={classNames('area-text', className)}>{value}</div>
);

export default AreaText;
