export type Options = {
  /** 是否实时拖动 */
  liveDrag?: boolean;
  /** 默认没列最小宽度 */
  defaultMinWidth?: number;
  /** 拖动竖线是否只有thead */
  headerOnly?: boolean;
  /** 不能拖动的th */
  disabledColumns?: number[];
  /** 正在拖动callback */
  onResizing?: () => void;
  /** 拖动结束callback */
  onResized?: () => void;
};
export default class ColResizable {
  options: Options;
  domElmTable: HTMLTableElement;
  domElmThList: HTMLTableCellElement[];
  domElmTableTheadThList: HTMLTableCellElement[];
  /** 存放拖动标签的容器 */
  domElmHandleContainer: HTMLDivElement | null;
  tableWidth: string;
  cellSpacing: number;
  borderLeftWidth: number;
  lastThIndex: number;
  thLength: number;
  domElmHandleList: HTMLTableCellElement[];
  disabledColumns: number[];
  drag: HTMLTableCellElement | null;
  constructor(domElmTable: HTMLTableElement, options?: {});
  init(): void;
  createGrips(): void;
  syncGrips(): void;
  onGripMouseDown(e: any): boolean;
  onMouseMove(e: any): boolean;
  syncCols(i: any, isOver: any): void;
  onMouseUp(e: any): boolean;
}
