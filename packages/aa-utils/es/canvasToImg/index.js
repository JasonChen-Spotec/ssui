function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CanvasToImg() {
  // check if support sth.
  var downloadMime = 'image/octet-stream';
  function scaleCanvas(canvas, width, height) {
    var w = canvas.width;
    var h = canvas.height;
    var retWidth = width === undefined ? w : width;
    var retHeight = height === undefined ? h : height;
    var retCanvas = document.createElement('canvas');
    var retCtx = retCanvas.getContext('2d');
    retCanvas.width = retWidth;
    retCanvas.height = retHeight;
    retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, retWidth, retHeight);
    return retCanvas;
  }
  function getDataURL(canvas, type, width, height) {
    var scaledCanvas = scaleCanvas(canvas, width, height);
    return scaledCanvas.toDataURL(type);
  }
  // save file to local with file name and file type
  function saveFile(strData, fileType, fileName) {
    if (fileName === void 0) {
      fileName = 'name';
    }
    // document.location.href = strData;
    var saveLink = document.createElement('a');
    // download file name
    saveLink.download = fileName + "." + fileType;
    // download file data
    saveLink.href = strData;
    // start download
    saveLink.click();
  }
  function genImage(strData) {
    var img = document.createElement('img');
    img.src = strData;
    return img;
  }
  function fixType(type) {
    var fixedType = type.toLowerCase().replace(/jpg/i, 'jpeg');
    var r = fixedType.match(/png|jpeg|bmp|gif/)[0];
    return "image/" + r;
  }
  function encodeData(data) {
    if (!window.btoa) {
      throw 'btoa undefined';
    }
    var str = '';
    if (typeof data === 'string') {
      str = data;
    } else {
      for (var i = 0; i < data.length; i++) {
        str += String.fromCharCode(data[i]);
      }
    }
    return btoa(str);
  }
  function getImageData(canvas) {
    var _canvas$getContext;
    var w = canvas.width;
    var h = canvas.height;
    return (_canvas$getContext = canvas.getContext('2d')) == null ? void 0 : _canvas$getContext.getImageData(0, 0, w, h);
  }
  function makeURI(strData, type) {
    return "data:" + type + ";base64," + strData;
  }
  /**
   * create bitmap image
   * 按照规则生成图片响应头和响应体
   */
  var genBitmapImage = function genBitmapImage(oData) {
    //
    // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
    // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
    //
    var biWidth = oData.width;
    var biHeight = oData.height;
    var biSizeImage = biWidth * biHeight * 3;
    var bfSize = biSizeImage + 54; // total header size = 54 bytes
    //
    //  typedef struct tagBITMAPFILEHEADER {
    //  	WORD bfType;
    //  	DWORD bfSize;
    //  	WORD bfReserved1;
    //  	WORD bfReserved2;
    //  	DWORD bfOffBits;
    //  } BITMAPFILEHEADER;
    //
    var BITMAPFILEHEADER = [
    // WORD bfType -- The file type signature; must be "BM"
    0x42, 0x4d,
    // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
    // WORD bfReserved1 -- Reserved; must be zero
    0, 0,
    // WORD bfReserved2 -- Reserved; must be zero
    0, 0,
    // DWORD bfOffBits -- The offset, in bytes, from the beginning of
    // the BITMAPFILEHEADER structure to the bitmap bits.
    54, 0, 0, 0];
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
    var BITMAPINFOHEADER = [
    // DWORD biSize -- The number of bytes required by the structure
    40, 0, 0, 0,
    // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
    // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1, 0,
    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // has a maximum of 2^24 colors (16777216, Truecolor)
    24, 0,
    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0, 0, 0, 0,
    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
    // LONG biXPelsPerMeter, unused
    0, 0, 0, 0,
    // LONG biYPelsPerMeter, unused
    0, 0, 0, 0,
    // DWORD biClrUsed, the number of color indexes of palette, unused
    0, 0, 0, 0,
    // DWORD biClrImportant, unused
    0, 0, 0, 0];
    var iPadding = (4 - biWidth * 3 % 4) % 4;
    var aImgData = oData.data;
    var strPixelData = '';
    var biWidth4 = biWidth << 2;
    var y = biHeight;
    var fromCharCode = String.fromCharCode;
    do {
      var iOffsetY = biWidth4 * (y - 1);
      var strPixelRow = '';
      for (var x = 0; x < biWidth; x++) {
        var iOffsetX = x << 2;
        strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX]);
      }
      for (var c = 0; c < iPadding; c++) {
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
  var saveAsImage = function saveAsImage(canvas, _ref) {
    var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 100 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 100 : _ref$height,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'jpeg' : _ref$type,
      fileName = _ref.fileName;
    // save file type
    var fileType = type;
    var finallyType = fixType(type);
    if (/bmp/.test(finallyType)) {
      var data = getImageData(scaleCanvas(canvas, width, height));
      var strData = genBitmapImage(data);
      // use new parameter: fileType
      saveFile(makeURI(strData, downloadMime), fileType, fileName);
    } else {
      var _strData = getDataURL(canvas, finallyType, width, height);
      // use new parameter: fileType
      saveFile(_strData.replace(finallyType, downloadMime), fileType, fileName);
    }
  };
  var convertToImage = function convertToImage(canvas, _ref2) {
    var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 100 : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? 100 : _ref2$height,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'jpeg' : _ref2$type;
    var finallyType = fixType(type);
    if (/bmp/.test(finallyType)) {
      var data = getImageData(scaleCanvas(canvas, width, height));
      var _strData2 = genBitmapImage(data);
      return genImage(makeURI(_strData2, 'image/bmp'));
    }
    var strData = getDataURL(canvas, finallyType, width, height);
    return genImage(strData);
  };
  return {
    saveAsImage: saveAsImage,
    saveAsPNG: function saveAsPNG(canvas, options) {
      return saveAsImage(canvas, _extends({}, options, {
        type: 'png'
      }));
    },
    saveAsJPEG: function saveAsJPEG(canvas, options) {
      return saveAsImage(canvas, _extends({}, options, {
        type: 'jpeg'
      }));
    },
    saveAsGIF: function saveAsGIF(canvas, options) {
      return saveAsImage(canvas, _extends({}, options, {
        type: 'gif'
      }));
    },
    saveAsBMP: function saveAsBMP(canvas, options) {
      return saveAsImage(canvas, _extends({}, options, {
        type: 'bmp'
      }));
    },
    convertToImage: convertToImage,
    convertToPNG: function convertToPNG(canvas, options) {
      return convertToImage(canvas, _extends({}, options, {
        type: 'png'
      }));
    },
    convertToJPEG: function convertToJPEG(canvas, options) {
      return convertToImage(canvas, _extends({}, options, {
        type: 'jpeg'
      }));
    },
    convertToGIF: function convertToGIF(canvas, options) {
      return convertToImage(canvas, _extends({}, options, {
        type: 'gif'
      }));
    },
    convertToBMP: function convertToBMP(canvas, options) {
      return convertToImage(canvas, _extends({}, options, {
        type: 'bmp'
      }));
    }
  };
}
// Export function, used in npm
var canvasToImg = CanvasToImg();
export default canvasToImg;