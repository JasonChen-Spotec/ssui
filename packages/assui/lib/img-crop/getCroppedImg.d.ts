interface pixelCropType {
  width: number;
  height: number;
}
declare function getCroppedImg(
  imageSrc: string,
  pixelCrop: pixelCropType,
  name: string,
  type: string,
): Promise<unknown>;
export default getCroppedImg;
