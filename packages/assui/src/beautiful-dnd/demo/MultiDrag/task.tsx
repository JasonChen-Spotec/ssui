import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import type { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import styles from './index.modules.less';

type Id = string;

type TaskType = {
  id: Id;
  content: string;
};

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
const primaryButton = 0;

type Props = {
  task: TaskType;
  index: number;
  isSelected: boolean;
  isGhosting: boolean;
  selectionCount: number;
  toggleSelection: (taskId: Id) => void;
  toggleSelectionInGroup: (taskId: Id) => void;
  multiSelectTo: (taskId: Id) => void;
};

type GetBackgroundColorArgs = {
  isSelected?: boolean;
  isDragging?: boolean;
  isGhosting?: boolean;
};

const getBackgroundColor = ({ isSelected, isGhosting }: GetBackgroundColorArgs): string => {
  if (isGhosting) {
    return '#FAFBFC';
  }

  if (isSelected) {
    return '#DEEBFF';
  }

  return '#FAFBFC';
};

const getColor = ({ isSelected, isGhosting }): string => {
  if (isGhosting) {
    return 'darkgrey';
  }
  if (isSelected) {
    return '#2684FF';
  }
  return '#091E42';
};

const keyCodes = {
  enter: 13,
  escape: 27,
  arrowDown: 40,
  arrowUp: 38,
  tab: 9,
};

export default class Task extends Component<Props> {
  onKeyDown = (
    event: KeyboardEvent,
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot,
  ) => {
    if (event.defaultPrevented) {
      return;
    }

    if (snapshot.isDragging) {
      return;
    }

    if (event.keyCode !== keyCodes.enter) {
      return;
    }

    // we are using the event for selection
    event.preventDefault();

    this.performAction(event);
  };

  // Using onClick as it will be correctly
  // preventing if there was a drag
  onClick = (event) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    // marking the event as used
    event.preventDefault();

    this.performAction(event);
  };

  onTouchEnd = (event) => {
    if (event.defaultPrevented) {
      return;
    }

    // marking the event as used
    // we would also need to add some extra logic to prevent the click
    // if this element was an anchor
    event.preventDefault();
    this.props.toggleSelectionInGroup(this.props.task.id);
  };

  // Determines if the platform specific toggle selection in group key was used
  wasToggleInSelectionGroupKeyUsed = (event: MouseEvent | KeyboardEvent) => {
    const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
    return isUsingWindows ? event.ctrlKey : event.metaKey;
  };

  // Determines if the multiSelect key was used
  wasMultiSelectKeyUsed = (event: MouseEvent | KeyboardEvent) => event.shiftKey;

  performAction = (event: MouseEvent | KeyboardEvent) => {
    const { task, toggleSelection, toggleSelectionInGroup, multiSelectTo } = this.props;

    if (this.wasToggleInSelectionGroupKeyUsed(event)) {
      toggleSelectionInGroup(task.id);
      return;
    }

    if (this.wasMultiSelectKeyUsed(event)) {
      multiSelectTo(task.id);
      return;
    }

    toggleSelection(task.id);
  };

  render() {
    const task: TaskType = this.props.task;
    const index: number = this.props.index;
    const isSelected: boolean = this.props.isSelected;
    const selectionCount: number = this.props.selectionCount;
    const isGhosting: boolean = this.props.isGhosting;
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
          const shouldShowSelection: boolean = snapshot.isDragging && selectionCount > 1;

          const containerStyles = {
            ...provided.draggableProps.style,
            backgroundColor: getBackgroundColor({ isSelected, isGhosting }),
            color: getColor({ isSelected, isGhosting }),
            boxShadow: snapshot.isDragging ? '2px 2px 1px #8993A4' : '',
            opacity: isGhosting ? '0.8' : '',
          };

          return (
            <div
              className={styles['task-container']}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={this.onClick}
              onTouchEnd={this.onTouchEnd}
              onKeyDown={(event: any) => this.onKeyDown(event, provided, snapshot)}
              style={containerStyles}
            >
              <div className={styles['task-content']}>{task.content}</div>
              {shouldShowSelection ? (
                <div className={styles['selection-count']}>{selectionCount}</div>
              ) : null}
            </div>
          );
        }}
      </Draggable>
    );
  }
}
