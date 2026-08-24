import heic2any from 'heic2any';
function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }
  if (!value || !value.then) {
    value = Promise.resolve(value);
  }
  return then ? value.then(then) : value;
}
var heic2Jpeg = _async(function (src) {
  var _exit = false;
  return _invoke(function () {
    if (/.HEIC$/.test(src || '')) {
      return _catch(function () {
        return _await(fetch(src || ''), function (res) {
          var type = res.headers.get('content-type') || 'image/*';
          return function () {
            if (type === 'image/heic') {
              return _await(res.blob(), function (blob) {
                return _await(heic2any({
                  blob: blob,
                  toType: 'image/jpeg',
                  quality: 1
                }), function (transfered) {
                  var _URL$createObjectURL = URL.createObjectURL(transfered);
                  _exit = true;
                  return _URL$createObjectURL;
                });
              });
            }
          }();
        });
      }, function () {
        _exit = true;
        return src;
      });
    }
  }, function (_result3) {
    return _exit ? _result3 : src;
  });
});
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
function _invoke(body, then) {
  var result = body();
  if (result && result.then) {
    return result.then(then);
  }
  return then(result);
}
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
export default heic2Jpeg;