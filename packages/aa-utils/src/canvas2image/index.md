---
title: canvas2image
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# canvas2image
将canvas转换为image

## 代码演示

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.jsx" />


## API
```ts
type fileType = "png" | "jpeg" | "gif" | "bmp";

interface optionsType {
  width?: number,
  height?: number,
  type?: fileType,
  fileName: string
}

canvas2Image.saveAsImage(canvasObj, options);
canvas2Image.saveAsPNG(canvasObj, options);
canvas2Image.saveAsJPEG(canvasObj,options);
canvas2Image.saveAsGIF(canvasObj, options);
canvas2Image.saveAsBMP(canvasObj, options);

canvas2Image.convertToImage(canvasObj, options);
canvas2Image.convertToPNG(canvasObj, options);
canvas2Image.convertToJPEG(canvasObj, options);
canvas2Image.convertToGIF(canvasObj, options);
canvas2Image.convertToBMP(canvasObj, options);
```
