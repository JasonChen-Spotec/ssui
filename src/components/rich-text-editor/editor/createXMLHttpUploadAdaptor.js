class XMLHttpUploadAdapter {
  constructor(loader, options = {}) {
    // The file loader instance to use during the upload.
    this.loader = loader;
    this.options = options;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        this._initRequest();
        this._initListeners(resolve, reject, file);
        this._sendRequest(file);
      }));
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
    this.xhr = new XMLHttpRequest();

    const { xhr, options } = this;

    // Note that your request may look different. It is up to you and your editor
    // integration to choose the right communication channel. This example uses
    // a POST request with JSON as a data structure but your configuration
    // could be different.
    const { method = 'POST', url, async = true, responseType = 'json' } = options;
    xhr.open(method, url, async);
    xhr.responseType = responseType;
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const { xhr, loader, options } = this;
    const { handleUploadResponse, handleUploadErrorResponse, commonErrorMessage } = options;

    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => {
      if (commonErrorMessage) {
        return reject(commonErrorMessage);
      }
      return reject(genericErrorText);
    });

    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const { response } = xhr;

      // This example assumes the XHR server's "response" object will come with
      // an "error" which has its own "message" that can be passed to reject()
      // in the upload promise.
      //
      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.
      if (!response || response.error) {
        if (handleUploadErrorResponse) {
          const uploadErrorResponse = handleUploadErrorResponse(response);
          return reject(uploadErrorResponse);
        }

        return reject(response && response.error ? response.error.message : genericErrorText);
      }

      if (handleUploadResponse) {
        const uploadSuccessResponse = handleUploadResponse(response);
        return resolve(uploadSuccessResponse);
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // This URL will be used to display the image in the content. Learn more in the
      // UploadAdapter#upload documentation.
      return resolve({
        default: response.url
      });
    });

    // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded
    // properties which are used e.g. to display the upload progress bar in the editor
    // user interface.
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    const { headers, withCredentials } = this.options;
    // Set headers if specified.
    const requestHeaders = headers || {};

    // Use the withCredentials flag if specified.
    const requestWithCredentials = withCredentials || false;

    Object.keys(requestHeaders).forEach(headerName => {
      this.xhr.setRequestHeader(headerName, headers[headerName]);
    });

    this.xhr.withCredentials = requestWithCredentials;

    // Prepare the form data.
    const data = new FormData();

    data.append('upload', file);

    // Important note: This is the right place to implement security mechanisms
    // like authentication and CSRF protection. For instance, you can use
    // XMLHttpRequest.setRequestHeader() to set the request headers containing
    // the CSRF token generated earlier by your application.

    // Send the request.
    this.xhr.send(data);
  }
}

// Creator function of upload adapter plugin
const createXMLHttpUploadAdapterPlugin = options => editor => {
  console.log('=== plugin init');
  editor.plugins.get('FileRepository').createUploadAdapter = loader => {
    // Configure the URL to the upload script in your back-end here!
    return new XMLHttpUploadAdapter(loader, options);
  };
};

export default createXMLHttpUploadAdapterPlugin;
