---
mobile: false
title: htmlToPdf
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# htmlToPdf

将 html 转换为 pdf

## 代码演示

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" ></code>

## API

```ts
import html2canvas from "html2canvas";
import type { Options as Html2canvasOptions } from "html2canvas";
import JsPDF from "jspdf";
import type { jsPDFOptions as JsPDFOptions } from "jspdf";

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

const htmlToPdf = async (
  element: HTMLElement | null,
  options: GeneratePDFOptions
) => {
  const {
    heightPerPage = 840,
    fileName = "document.pdf",
    html2canvasOptions = {},
    jsPDFOptions = {},
    onSuccess,
    onError,
    onSettled,
    onBeforeCapture,
  } = options;

  if (!element) return;

  const CANVAS_CHROME_FF_LIMIT = 32_767;
  const CANVAS_SAFARI_LIMIT = 4096;

  element.style.gap = "0px";

  const MAX_CANVAS_HEIGHT =
    navigator.userAgent.includes("Chrome") ||
    navigator.userAgent.includes("Firefox")
      ? (CANVAS_CHROME_FF_LIMIT % heightPerPage) * heightPerPage
      : (CANVAS_SAFARI_LIMIT % heightPerPage) * heightPerPage;

  onBeforeCapture?.();

  try {
    const pdf = new JsPDF({
      orientation: "l",
      unit: "px",
      format: [element.offsetWidth, heightPerPage],
      compress: true,
      ...jsPDFOptions,
    });

    const totalHeight = element.scrollHeight;
    const totalWidth = element.scrollWidth;
    let capturedHeight = 0;
    const canvasPromises: Promise<HTMLCanvasElement>[] = [];

    while (capturedHeight < totalHeight) {
      const remainingHeight = totalHeight - capturedHeight;
      const captureHeight = Math.min(remainingHeight, MAX_CANVAS_HEIGHT);

      const canvasPromise = html2canvas(element, {
        logging: false,
        windowWidth: totalWidth,
        windowHeight: totalHeight,
        x: 0,
        y: capturedHeight,
        width: totalWidth,
        height: captureHeight,
        ...html2canvasOptions,
      });

      canvasPromises.push(canvasPromise);
      capturedHeight += captureHeight;
    }

    const canvases = await Promise.all(canvasPromises);

    canvases.forEach((canvas) => {
      const contentWidth = canvas.width;
      let contentHeight = canvas.height;
      const pageHeight = (contentWidth / element.offsetWidth) * heightPerPage;
      let position = 0;
      const imgWidth = element.offsetWidth;
      const imgHeight = (element.offsetWidth / contentWidth) * contentHeight;
      const imgData = canvas.toDataURL("image/jpeg");

      if (contentHeight < pageHeight) {
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          0,
          imgWidth,
          imgHeight,
          undefined,
          "FAST"
        );
      } else {
        while (contentHeight > 0) {
          pdf.addImage(
            imgData,
            "JPEG",
            0,
            position,
            imgWidth,
            imgHeight,
            undefined,
            "FAST"
          );
          contentHeight -= pageHeight;
          position -= heightPerPage;
          if (contentHeight > 0) {
            pdf.addPage();
          }
        }
      }
    });

    pdf.save(fileName);
    onSuccess?.();
  } catch (error) {
    onError?.(error);
  } finally {
    onSettled?.();
  }
};

export default htmlToPdf;
```
