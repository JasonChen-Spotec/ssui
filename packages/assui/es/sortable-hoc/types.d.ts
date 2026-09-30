/*!
 * React 19-compatible declarations adapted from @lumel/react-sortable-hoc.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016, Claudéric Demers
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import type * as React from 'react';
export type Axis = 'x' | 'y' | 'xy';
export type Offset = number | string;
export interface SortStart {
    node: Element;
    index: number;
    collection: Offset;
    isKeySorting: boolean;
    nodes: HTMLElement[];
    helper: HTMLElement;
}
export interface SortOver {
    index: number;
    oldIndex: number;
    newIndex: number;
    collection: Offset;
    isKeySorting: boolean;
    nodes: HTMLElement[];
    helper: HTMLElement;
}
export interface SortEnd {
    oldIndex: number;
    newIndex: number;
    collection: Offset;
    isKeySorting: boolean;
    nodes: HTMLElement[];
}
export type SortEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>;
export type SortEventWithTag = SortEvent & {
    target: {
        tagName: string;
    };
};
export type SortStartHandler = (sort: SortStart, event: SortEvent) => void;
export type SortMoveHandler = (event: SortEvent) => void;
export type SortEndHandler = (sort: SortEnd, event: SortEvent) => void;
export type SortOverHandler = (sort: SortOver, event: SortEvent) => void;
export type ContainerGetter = (element: React.ReactElement) => HTMLElement | Promise<HTMLElement>;
export type HelperContainerGetter = () => HTMLElement;
export interface Dimensions {
    width: number;
    height: number;
}
export interface SortableContainerProps {
    axis?: Axis;
    lockAxis?: Axis;
    helperClass?: string;
    transitionDuration?: number;
    keyboardSortingTransitionDuration?: number;
    keyCodes?: {
        lift?: number[];
        drop?: number[];
        cancel?: number[];
        up?: number[];
        down?: number[];
    };
    pressDelay?: number;
    pressThreshold?: number;
    distance?: number;
    shouldCancelStart?: (event: SortEvent | SortEventWithTag) => boolean;
    updateBeforeSortStart?: SortStartHandler;
    onSortStart?: SortStartHandler;
    onSortMove?: SortMoveHandler;
    onSortEnd?: SortEndHandler;
    onSortOver?: SortOverHandler;
    useDragHandle?: boolean;
    useWindowAsScrollContainer?: boolean;
    hideSortableGhost?: boolean;
    lockToContainerEdges?: boolean;
    lockOffset?: Offset | [Offset, Offset];
    getContainer?: ContainerGetter;
    getHelperDimensions?: (sort: SortStart) => Dimensions;
    helperContainer?: HTMLElement | HelperContainerGetter;
    disableAutoscroll?: boolean;
}
export interface SortableElementProps {
    index: number;
    collection?: Offset;
    disabled?: boolean;
}
export interface Config {
    withRef: boolean;
}
export type SortableContainerFactory = <P>(component: React.ComponentType<P>, config?: Config) => React.ComponentClass<P & SortableContainerProps>;
export type SortableElementFactory = <P>(component: React.ComponentType<P>, config?: Config) => React.ComponentClass<P & SortableElementProps>;
export type SortableHandleFactory = <P>(component: React.ComponentType<P>, config?: Config) => React.ComponentClass<P>;
export type ArrayMove = <T>(collection: T[], previousIndex: number, newIndex: number) => T[];
