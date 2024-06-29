import React from 'react';
import { TableCol } from 'assui';
import './index.less';

const Demo = () => {
  return (
    <>
      <TableCol width={110} className="table-col-cls">
        宽度110
      </TableCol>

      <div
        className="align-center"
        style={{ textAlign: 'center', backgroundColor: 'pink' }}
      >
        <TableCol width={150} className="table-col-cls">
          继承父级的对齐方式
        </TableCol>
      </div>
    </>
  );
};

export default Demo;
