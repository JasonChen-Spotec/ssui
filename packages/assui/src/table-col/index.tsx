import React from 'react';
import classNames from 'classnames';

export interface TableColProps {
  children: React.ReactNode;
  width?: number;
  className?: string;
}

const TableCol: React.FC<TableColProps> = ({ children, width, className }) => (
  <div style={{ width: `${width}px` }} className={classNames('a-table-col', className)}>
    {children}
  </div>
);

export default TableCol;
