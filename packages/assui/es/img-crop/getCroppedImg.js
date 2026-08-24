function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }
  if (!value || !value.then) {
    value = Promise.resolve(value);
  }
  return then ? value.then(then) : value;
}
var getCroppedImg = _async(function (imageSrc, pixelCrop, name, type) {
  var _pixelCrop$width = pixelCrop.width,
    width = _pixelCrop$width === void 0 ? 670 : _pixelCrop$width,
    _pixelCrop$height = pixelCrop.height,
    height = _pixelCrop$height === void 0 ? 280 : _pixelCrop$height;
  return _await(createImage(imageSrc), function (image) {
    var bodyEl = document.querySelector('body');
    bodyEl.appendChild(image);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx == null || ctx.drawImage(image, 0, 0, width, height);
    bodyEl.removeChild(image);
    // As a blob
    return new Promise(function (resolve) {
      canvas.toBlob(function (file) {
        if (!file) {
          return;
        }
        resolve({
          url: URL.createObjectURL(file),
          fileObj: new File([file], name, {
            type: type
          })
        });
      }, type);
    });
  });
});
function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
var createImage = function createImage(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.addEventListener('load', function () {
      return resolve(image);
    });
    image.addEventListener('error', function (error) {
      return reject(error);
    });
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });
};
export default getCroppedImg;