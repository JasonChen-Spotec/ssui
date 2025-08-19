import type { Options as Html2canvasOptions } from 'html2canvas';
import type { jsPDFOptions as JsPDFOptions } from 'jspdf';
type GeneratePDFOptions = {
  /** 文件名称 */
  fileName?: string;
  /** 单页高度 */
  heightPerPage?: number;
  /** tml2canvas配置 */
  html2canvasOptions?: Partial<Html2canvasOptions>;
  /** jspdf配置 */
  jsPDFOptions?: Partial<JsPDFOptions>;
  /** 生成成功的回调方法 */
  onSuccess?: () => void;
  /** 生成错误的回调方法 */
  onError?: (error: unknown) => void;
  /** 生成之后的回调方法 */
  onSettled?: () => void;
  /** 生成之前的回调方法 */
  onBeforeCapture?: () => void;
};
declare const htmlToPdf: (
  element: HTMLElement | null,
  options: GeneratePDFOptions,
) => Promise<void>;
export default htmlToPdf;
