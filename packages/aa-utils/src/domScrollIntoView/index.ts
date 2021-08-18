import domScrollIntoView from 'dom-scroll-into-view';

export interface Options {
  alignWithLeft?: Boolean;
  alignWithTop?: Boolean;
  allowHorizontalScroll?: Boolean;
  onlyScrollIfNeeded?: Boolean;
  offsetTop?: number;
  offsetLeft?: number;
  offsetBottom?: number;
  offsetRight?: number;
}

export default (source: HTMLElement, container: HTMLElement, options: Options) =>
  domScrollIntoView(source, container, options);
