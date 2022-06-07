/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable no-param-reassign */
type fileType = 'png' | 'jpeg' | 'gif' | 'bmp';

export interface saveAsImageOptionsType {
  width?: number;
  height?: number;
  type?: fileType;
  fileName: string;
}

/* eslint-disable no-bitwise */
function CanvasToImg() {
  // check if support sth.
  const downloadMime = 'image/octet-stream';

  function scaleCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
    const w = canvas.width;
    const h = canvas.height;
    if (width === undefined) {
      width = w;
    }
    if (height === undefined) {
      height = h;
    }

    const retCanvas: HTMLCanvasElement = document.createElement('canvas');
    const retCtx = retCanvas.getContext('2d') as CanvasRenderingContext2D;
    retCanvas.width = width;
    retCanvas.height = height;
    retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
    return retCanvas;
  }

  function getDataURL(canvas: HTMLCanvasElement, type: string, width: number, height: number) {
    canvas = scaleCanvas(canvas, width, height);
    return canvas.toDataURL(type);
  }

  // save file to local with file name and file type
  function saveFile(strData: string, fileType: any, fileName = 'name') {
    // document.location.href = strData;
    const saveLink = document.createElement('a');
    // download file name
    saveLink.download = `${fileName}.${fileType}`;
    // download file data
    saveLink.href = strData;
    // start download
    saveLink.click();
  }

  function genImage(strData: string) {
    const img = document.createElement('img');
    img.src = strData;
    return img;
  }

  function fixType(type: fileType): string {
    type = type.toLowerCase().replace(/jpg/i, 'jpeg') as fileType;
    const r = (type.match(/png|jpeg|bmp|gif/) as fileType[])[0];
    return `image/${r}`;
  }

  function encodeData(data: number[] | string) {
    if (!window.btoa) {
      // eslint-disable-next-line no-throw-literal
      throw 'btoa undefined';
    }
    let str = '';
    if (typeof data === 'string') {
      str = data;
    } else {
      for (let i = 0; i < data.length; i++) {
        str += String.fromCharCode(data[i]);
      }
    }

    return btoa(str);
  }

  function getImageData(canvas: HTMLCanvasElement) {
    const w = canvas.width;
    const h = canvas.height;
    return canvas.getContext('2d')?.getImageData(0, 0, w, h);
  }

  function makeURI(strData: string, type: string) {
    return `data:${type};base64,${strData}`;
  }

  /**
   * create bitmap image
   * 按照规则生成图片响应头和响应体
   */
  const genBitmapImage = (oData: any) => {
    //
    // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
    // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
    //

    const biWidth = oData.width;
    const biHeight = oData.height;
    const biSizeImage = biWidth * biHeight * 3;
    const bfSize = biSizeImage + 54; // total header size = 54 bytes

    //
    //  typedef struct tagBITMAPFILEHEADER {
    //  	WORD bfType;
    //  	DWORD bfSize;
    //  	WORD bfReserved1;
    //  	WORD bfReserved2;
    //  	DWORD bfOffBits;
    //  } BITMAPFILEHEADER;
    //
    const BITMAPFILEHEADER = [
      // WORD bfType -- The file type signature; must be "BM"
      0x42,
      0x4d,
      // DWORD bfSize -- The size, in bytes, of the bitmap file
      bfSize & 0xff,
      (bfSize >> 8) & 0xff,
      (bfSize >> 16) & 0xff,
      (bfSize >> 24) & 0xff,
      // WORD bfReserved1 -- Reserved; must be zero
      0,
      0,
      // WORD bfReserved2 -- Reserved; must be zero
      0,
      0,
      // DWORD bfOffBits -- The offset, in bytes, from the beginning of
      // the BITMAPFILEHEADER structure to the bitmap bits.
      54,
      0,
      0,
      0,
    ];

    //
    //  typedef struct tagBITMAPINFOHEADER {
    //  	DWORD biSize;
    //  	LONG  biWidth;
    //  	LONG  biHeight;
    //  	WORD  biPlanes;
    //  	WORD  biBitCount;
    //  	DWORD biCompression;
    //  	DWORD biSizeImage;
    //  	LONG  biXPelsPerMeter;
    //  	LONG  biYPelsPerMeter;
    //  	DWORD biClrUsed;
    //  	DWORD biClrImportant;
    //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
    //
    const BITMAPINFOHEADER = [
      // DWORD biSize -- The number of bytes required by the structure
      40,
      0,
      0,
      0,
      // LONG biWidth -- The width of the bitmap, in pixels
      biWidth & 0xff,
      (biWidth >> 8) & 0xff,
      (biWidth >> 16) & 0xff,
      (biWidth >> 24) & 0xff,
      // LONG biHeight -- The height of the bitmap, in pixels
      biHeight & 0xff,
      (biHeight >> 8) & 0xff,
      (biHeight >> 16) & 0xff,
      (biHeight >> 24) & 0xff,
      // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
      1,
      0,
      // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
      // has a maximum of 2^24 colors (16777216, Truecolor)
      24,
      0,
      // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
      0,
      0,
      0,
      0,
      // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
      biSizeImage & 0xff,
      (biSizeImage >> 8) & 0xff,
      (biSizeImage >> 16) & 0xff,
      (biSizeImage >> 24) & 0xff,
      // LONG biXPelsPerMeter, unused
      0,
      0,
      0,
      0,
      // LONG biYPelsPerMeter, unused
      0,
      0,
      0,
      0,
      // DWORD biClrUsed, the number of color indexes of palette, unused
      0,
      0,
      0,
      0,
      // DWORD biClrImportant, unused
      0,
      0,
      0,
      0,
    ];

    const iPadding = (4 - ((biWidth * 3) % 4)) % 4;

    const aImgData = oData.data;

    let strPixelData = '';
    const biWidth4 = biWidth << 2;
    let y = biHeight;
    const { fromCharCode } = String;

    do {
      const iOffsetY = biWidth4 * (y - 1);
      let strPixelRow = '';
      for (let x = 0; x < biWidth; x++) {
        const iOffsetX = x << 2;
        strPixelRow +=
          fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
          fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
          fromCharCode(aImgData[iOffsetY + iOffsetX]);
      }

      for (let c = 0; c < iPadding; c++) {
        strPixelRow += String.fromCharCode(0);
      }

      strPixelData += strPixelRow;
    } while (--y);

    return encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);
  };

  /**
   * saveAsImage
   * @param canvas canvasElement
   * @param width {String} image type
   * @param height {Number} [optional] png width
   * @param type {string} [optional] png height
   * @param fileName {String} image name
   */

  const saveAsImage = (
    canvas: HTMLCanvasElement,
    { width = 100, height = 100, type = 'jpeg', fileName }: saveAsImageOptionsType,
  ) => {
    // save file type
    const fileType = type;
    const finallyType = fixType(type);
    if (/bmp/.test(finallyType)) {
      const data = getImageData(scaleCanvas(canvas, width, height));
      const strData = genBitmapImage(data);
      // use new parameter: fileType
      saveFile(makeURI(strData, downloadMime), fileType, fileName);
    } else {
      const strData = getDataURL(canvas, finallyType, width, height);
      // use new parameter: fileType
      saveFile(strData.replace(finallyType, downloadMime), fileType, fileName);
    }
  };

  const convertToImage = (
    canvas: HTMLCanvasElement,
    { width = 100, height = 100, type = 'jpeg' }: saveAsImageOptionsType,
  ) => {
    const finallyType = fixType(type);

    if (/bmp/.test(finallyType)) {
      const data = getImageData(scaleCanvas(canvas, width, height));
      const strData = genBitmapImage(data);
      return genImage(makeURI(strData, 'image/bmp'));
    }
    const strData = getDataURL(canvas, finallyType, width, height);
    return genImage(strData);
  };

  return {
    saveAsImage,
    saveAsPNG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return saveAsImage(canvas, { ...options, type: 'png' });
    },
    saveAsJPEG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return saveAsImage(canvas, { ...options, type: 'jpeg' });
    },
    saveAsGIF(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return saveAsImage(canvas, { ...options, type: 'gif' });
    },
    saveAsBMP(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return saveAsImage(canvas, { ...options, type: 'bmp' });
    },

    convertToImage,
    convertToPNG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return convertToImage(canvas, { ...options, type: 'png' });
    },
    convertToJPEG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return convertToImage(canvas, { ...options, type: 'jpeg' });
    },
    convertToGIF(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return convertToImage(canvas, { ...options, type: 'gif' });
    },
    convertToBMP(canvas: HTMLCanvasElement, options: saveAsImageOptionsType) {
      return convertToImage(canvas, { ...options, type: 'bmp' });
    },
  };
}

// Export function, used in npm
const canvasToImg = CanvasToImg();

export default canvasToImg;
