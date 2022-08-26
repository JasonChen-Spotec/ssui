import React from 'react';

interface TableColProps {
  children: React.ReactNode;
  width?: number;
  className?: string;
}

const TableCol: React.FC<TableColProps> = ({ children, width, className }) => (
  <div style={{ width: `${width}px` }} className={className}>
    {children}
  </div>
);

export default TableCol;
