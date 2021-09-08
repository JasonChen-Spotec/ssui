const createImage = (url: string) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

interface pixelCropType {
  width: number;
  height: number;
}

async function getCroppedImg(
  imageSrc: string,
  pixelCrop: pixelCropType,
  name: string,
  type: string,
) {
  const { width = 670, height = 280 } = pixelCrop;
  const image = (await createImage(imageSrc)) as HTMLImageElement;

  const bodyEl = document.querySelector('body') as HTMLBodyElement;

  bodyEl.appendChild(image);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  ctx?.drawImage(image, 0, 0, width, height);

  bodyEl.removeChild(image);

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file: Blob) => {
      resolve({ url: URL.createObjectURL(file), fileObj: new File([file], name, { type }) });
    }, type);
  });
}

export default getCroppedImg;
