---
title: canvasToImg
nav:
  title: utils
  path: /utils
group:
  title: utils
  path: /utils
  order: 1
---

# canvasToImg
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

canvas2Img.saveAsImage(canvasObj, options);
canvas2Img.saveAsPNG(canvasObj, options);
canvas2Img.saveAsJPEG(canvasObj,options);
canvas2Img.saveAsGIF(canvasObj, options);
canvas2Img.saveAsBMP(canvasObj, options);

canvas2Img.convertToImage(canvasObj, options);
canvas2Img.convertToPNG(canvasObj, options);
canvas2Img.convertToJPEG(canvasObj, options);
canvas2Img.convertToGIF(canvasObj, options);
canvas2Img.convertToBMP(canvasObj, options);
```
