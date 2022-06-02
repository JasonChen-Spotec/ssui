import React from 'react';
import Table from './Table';
import { resizableColumnsTable } from 'aa-utils';
import 'aa-utils/lib/resizableColumnsTable/styles/index.less';

export default class ResizableTable extends React.PureComponent {
  componentDidMount() {
    const domElemTableList = document.querySelectorAll('.table');
    resizableColumnsTable(domElemTableList[0], {
      liveDrag: true,
    });
    resizableColumnsTable(domElemTableList[1], {
      liveDrag: false,
      headerOnly: false,
    });
    resizableColumnsTable(domElemTableList[2], {
      liveDrag: false,
      headerOnly: false,
    });
  }

  render() {
    return (
      <div>
        <h4>liveDrag: true</h4>
        <Table />
        <h4>liveDrag: false</h4>
        <Table />
        <h4>other</h4>
        <div style={{ width: 800, overflow: 'auto' }}>
          <Table />
        </div>
      </div>
    );
  }
}
