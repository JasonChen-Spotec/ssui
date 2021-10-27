import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import { quotes } from '../data';
import reorder from '../reorder';
import styles from './index.modules.less';

export type Quote = {
  id: string;
  content: string;
  author: Author;
};

type TableRowProps = {
  quote: Quote;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
};

class TableRow extends Component<TableRowProps> {
  render() {
    const { snapshot, quote, provided } = this.props;
    return (
      <tr
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          ...provided.draggableProps.style,
          backgroundColor: snapshot.isDragging ? '#79F2C0' : '',
          display: snapshot.isDragging ? '#79F2C0' : '',
        }}
      >
        <td className={styles.td}>{quote.author.name}</td>
        <td className={styles.td}>{quote.content}</td>
      </tr>
    );
  }
}

type AppProps = {
  initial: Quote[];
};

type AppState = {
  quotes: Quote[];
  layout: 'fixed' | 'auto';
};
export default class TableApp extends Component<AppProps, AppState> {
  // eslint-disable-next-line react/sort-comp
  tableRef?: HTMLElement;

  state: AppState = {
    quotes: quotes,
    layout: 'auto',
  };

  onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination || result.destination.index === result.source.index) {
      return;
    }

    // no movement
    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(this.state.quotes, result.source.index, result.destination.index);

    this.setState({
      quotes,
    });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Fragment>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Author</th>
                <th>Content</th>
              </tr>
            </thead>
            <Droppable droppableId="table">
              {(droppableProvided: DroppableProvided) => (
                <tbody
                  ref={(ref: HTMLElement) => {
                    this.tableRef = ref;
                    droppableProvided.innerRef(ref);
                  }}
                  {...droppableProvided.droppableProps}
                >
                  {this.state.quotes.map((quote: Quote, index: number) => (
                    <Draggable draggableId={quote.id} index={index} key={quote.id}>
                      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <TableRow provided={provided} snapshot={snapshot} quote={quote} />
                      )}
                    </Draggable>
                  ))}
                  {droppableProvided.placeholder}
                </tbody>
              )}
            </Droppable>
          </table>
        </Fragment>
      </DragDropContext>
    );
  }
}
