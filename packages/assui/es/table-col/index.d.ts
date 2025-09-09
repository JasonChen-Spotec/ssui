import React from 'react';
export interface TableColProps {
    children: React.ReactNode;
    width?: number;
    className?: string;
}
declare const TableCol: React.FC<TableColProps>;
export default TableCol;
