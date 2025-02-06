export interface UploadProgressEvent extends Partial<ProgressEvent> {
  percent?: number;
}

type Options = {
  fileName?: string;
  onProgress?: (e: UploadProgressEvent) => void;
};

const defaultOptions = {};

const downloadFile = (url: string, options: Options = defaultOptions) => {
  const { fileName, onProgress } = options;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response);
      let resultFileName = fileName;
      const [path] = url.split('?');
      if (!resultFileName) {
        resultFileName = path.split('/').pop();
      } else {
        const originalExt = path.split('/').pop()?.split('.').pop();
        // 如果提供的 fileName 没有扩展名，则添加原始扩展名
        if (
          originalExt &&
          !fileName?.toLowerCase().endsWith(`.${originalExt.toLowerCase()}`)
        ) {
          resultFileName = `${fileName}.${originalExt}`;
        }
      }
      a.download = decodeURIComponent(resultFileName as string);
      a.click();
      window.URL.revokeObjectURL(a.href);

      resolve(xhr.response);
    };

    xhr.onprogress = (e) => {
      const resultEvent = e as UploadProgressEvent;
      if (e.total > 0) {
        resultEvent.percent = (e.loaded / e.total) * 100;
      }
      onProgress?.(resultEvent);
    };

    xhr.onerror = (e) => {
      reject(e);
    };

    xhr.send();
  });
};

export default downloadFile;
