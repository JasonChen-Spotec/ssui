type fileType = 'png' | 'jpeg' | 'gif' | 'bmp';
export interface saveAsImageOptionsType {
    width?: number;
    height?: number;
    type?: fileType;
    fileName: string;
}
declare const canvasToImg: {
    saveAsImage: (canvas: HTMLCanvasElement, { width, height, type, fileName }: saveAsImageOptionsType) => void;
    saveAsPNG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): void;
    saveAsJPEG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): void;
    saveAsGIF(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): void;
    saveAsBMP(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): void;
    convertToImage: (canvas: HTMLCanvasElement, { width, height, type }: saveAsImageOptionsType) => HTMLImageElement;
    convertToPNG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): HTMLImageElement;
    convertToJPEG(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): HTMLImageElement;
    convertToGIF(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): HTMLImageElement;
    convertToBMP(canvas: HTMLCanvasElement, options: saveAsImageOptionsType): HTMLImageElement;
};
export default canvasToImg;
