import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import type { DragStart, DropResult, DraggableLocation } from 'react-beautiful-dnd';
import initial from './data';
import { mutliDragAwareReorder, multiSelectTo as multiSelect } from './utils';
import Column from './column';
import type { Result as ReorderResult } from './utils';
import styles from './index.modules.less';

const getTasks = (entities, columnId) =>
  entities.columns[columnId].taskIds.map((taskId) => entities.tasks[taskId]);
export default class TaskApp extends Component {
  state = {
    entities: initial,
    selectedTaskIds: [],
    draggingTaskId: null,
  };

  componentDidMount() {
    window.addEventListener('click', this.onWindowClick);
    window.addEventListener('keydown', this.onWindowKeyDown);
    window.addEventListener('touchend', this.onWindowTouchEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('keydown', this.onWindowKeyDown);
    window.removeEventListener('touchend', this.onWindowTouchEnd);
  }

  onDragStart = (start: DragStart) => {
    const id: string = start.draggableId;
    const selected = this.state.selectedTaskIds.find((taskId): boolean => taskId === id);

    // if dragging an item that is not selected - unselect all items
    if (!selected) {
      this.unselectAll();
    }
    this.setState({
      draggingTaskId: start.draggableId,
    });
  };

  onDragEnd = (result: DropResult) => {
    const destination: DraggableLocation = result.destination;
    const source: DraggableLocation = result.source;

    // nothing to do
    if (!destination || result.reason === 'CANCEL') {
      this.setState({
        draggingTaskId: null,
      });
      return;
    }

    const processed: ReorderResult = mutliDragAwareReorder({
      entities: this.state.entities,
      selectedTaskIds: this.state.selectedTaskIds,
      source,
      destination,
    });

    this.setState({
      ...processed,
      draggingTaskId: null,
    });
  };

  onWindowKeyDown = (event) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Escape') {
      this.unselectAll();
    }
  };

  onWindowClick = (event) => {
    if (event.defaultPrevented) {
      return;
    }
    this.unselectAll();
  };

  onWindowTouchEnd = (event: TouchEvent) => {
    if (event.defaultPrevented) {
      return;
    }
    this.unselectAll();
  };

  toggleSelection = (taskId) => {
    console.log('toggleSelection', taskId);

    const selectedTaskIds = this.state.selectedTaskIds;
    const wasSelected: boolean = selectedTaskIds.includes(taskId);
    const newTaskIds = (() => {
      // Task was not previously selected
      // now will be the only selected item
      if (!wasSelected) {
        return [taskId];
      }

      // Task was part of a selected group
      // will now become the only selected item
      if (selectedTaskIds.length > 1) {
        return [taskId];
      }

      // task was previously selected but not in a group
      // we will now clear the selection
      return [];
    })();

    this.setState({
      selectedTaskIds: newTaskIds,
    });
  };

  toggleSelectionInGroup = (taskId) => {
    const selectedTaskIds = this.state.selectedTaskIds;
    const index: number = selectedTaskIds.indexOf(taskId);

    // if not selected - add it to the selected items
    if (index === -1) {
      this.setState({
        selectedTaskIds: [...selectedTaskIds, taskId],
      });
      return;
    }

    // it was previously selected and now needs to be removed from the group
    const shallow = [...selectedTaskIds];
    shallow.splice(index, 1);

    this.setState({
      selectedTaskIds: shallow,
    });
  };

  // This behaviour matches the MacOSX finder selection
  multiSelectTo = (newTaskId) => {
    const updated = multiSelect(this.state.entities, this.state.selectedTaskIds, newTaskId);

    if (updated == null) {
      return;
    }

    this.setState({
      selectedTaskIds: updated,
    });
  };

  unselect = () => {
    this.unselectAll();
  };

  unselectAll = () => {
    this.setState({
      selectedTaskIds: [],
    });
  };

  render() {
    const entities = this.state.entities;
    const selected = this.state.selectedTaskIds;

    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <div className={styles.container}>
          {entities.columnOrder.map((columnId) => (
            <Column
              column={entities.columns[columnId]}
              tasks={getTasks(entities, columnId)}
              selectedTaskIds={selected}
              key={columnId}
              draggingTaskId={this.state.draggingTaskId}
              toggleSelection={this.toggleSelection}
              toggleSelectionInGroup={this.toggleSelectionInGroup}
              multiSelectTo={this.multiSelectTo}
            />
          ))}
        </div>
      </DragDropContext>
    );
  }
}
