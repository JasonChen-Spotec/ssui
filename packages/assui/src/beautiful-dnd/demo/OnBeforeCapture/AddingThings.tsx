import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { DropResult } from 'react-beautiful-dnd';
import reorder, { moveBetween } from '../reorder';
import styles from './index.modules.less';

export type Task = {
  id: string;
  content: string;
};

let uniqueId = 0;
function getTasks(count: number): Task[] {
  return Array.from({ length: count }, (): Task => {
    const id: string = `${uniqueId++}`;

    return {
      id,
      content: `task: ${id}`,
    };
  });
}

function renderTasks(tasks: Task[], options: { isDragEnabled: boolean } = { isDragEnabled: true }) {
  return tasks.map((task: Task, index: number) => {
    return (
      <Draggable
        draggableId={task.id}
        index={index}
        key={task.id}
        isDragDisabled={!options.isDragEnabled}
      >
        {(provided, snapshot) => (
          <div
            className={styles.item}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
              backgroundColor: snapshot.isDragging ? '#79F2C0' : '#EBECF0',
            }}
            ref={provided.innerRef}
          >
            Task id: {task.id}
          </div>
        )}
      </Draggable>
    );
  });
}

export default function AddingThings() {
  const [isShowingBin, setIsShowingBin] = useState(false);
  const [tasks, setTasks] = useState(() => getTasks(4));
  const [trash, setTrash] = useState(() => getTasks(2));

  function onBeforeCapture() {
    setIsShowingBin(true);
  }

  function onDragEnd(result: DropResult) {
    setIsShowingBin(false);
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === 'tasks') {
        setTasks(reorder(tasks, source.index, destination.index));
      }
      // In our current UI it won't be possible to reorder trash
      return;
    }

    const { list1, list2 } = moveBetween({
      list1: {
        id: 'tasks',
        values: tasks,
      },
      list2: {
        id: 'trash',
        values: trash,
      },
      source,
      destination,
    });

    setTasks(list1.values);
    setTrash(list2.values);
  }

  return (
    <DragDropContext onBeforeCapture={onBeforeCapture} onDragEnd={onDragEnd}>
      <div className={styles.app}>
        <div className={styles.list}>
          <h3 className={styles['list-title']}>
            Tasks{' '}
            <span role="img" aria-label="book">
              📘
            </span>
          </h3>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {renderTasks(tasks)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        {isShowingBin ? (
          <div className={styles.list}>
            <div className={styles['list-title']}>
              Trash{' '}
              <span role="img" aria-label="trash">
                🗑
              </span>
            </div>
            <Droppable droppableId="bin">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {renderTasks(trash, { isDragEnabled: false })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ) : null}
      </div>
    </DragDropContext>
  );
}
