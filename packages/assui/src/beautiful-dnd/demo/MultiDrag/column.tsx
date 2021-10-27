// @flow
import React, { Component } from 'react';
import memoizeOne from 'memoize-one';
import { Droppable } from 'react-beautiful-dnd';
import type { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import Task from './task';
import styles from './index.modules.less';

type Id = string;

type TaskType = {
  id: Id;
  content: string;
};

export type ColumnType = {
  id: string;
  title: string;
  taskIds: Id[];
};

type Props = {
  column: ColumnType;
  tasks: TaskType[];
  selectedTaskIds: Id[];
  draggingTaskId?: Id;
  toggleSelection: (taskId: Id) => void;
  toggleSelectionInGroup: (taskId: Id) => void;
  multiSelectTo: (taskId: Id) => void;
};

type TaskIdMap = {
  [taskId: Id]: true;
};

const getSelectedMap = memoizeOne((selectedTaskIds: Id[]) =>
  selectedTaskIds.reduce((previous: TaskIdMap, current: Id): TaskIdMap => {
    previous[current] = true;
    return previous;
  }, {}),
);

export default class Column extends Component<Props> {
  render() {
    const column: ColumnType = this.props.column;
    const tasks: TaskType[] = this.props.tasks;
    const selectedTaskIds: Id[] = this.props.selectedTaskIds;
    const draggingTaskId: Id = this.props.draggingTaskId;
    return (
      <div className={styles['column-container']}>
        <h3>{column.title}</h3>
        <Droppable droppableId={column.id}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              className={styles['task-list']}
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? '#6B778C' : '',
              }}
              {...provided.droppableProps}
            >
              {tasks.map((task: TaskType, index: number) => {
                const isSelected: boolean = Boolean(getSelectedMap(selectedTaskIds)[task.id]);
                const isGhosting: boolean =
                  isSelected && Boolean(draggingTaskId) && draggingTaskId !== task.id;
                return (
                  <Task
                    task={task}
                    index={index}
                    key={task.id}
                    isSelected={isSelected}
                    isGhosting={isGhosting}
                    selectionCount={selectedTaskIds.length}
                    toggleSelection={this.props.toggleSelection}
                    toggleSelectionInGroup={this.props.toggleSelectionInGroup}
                    multiSelectTo={this.props.multiSelectTo}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
