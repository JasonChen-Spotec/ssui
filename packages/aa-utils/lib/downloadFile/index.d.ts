export interface UploadProgressEvent extends Partial<ProgressEvent> {
    percent?: number;
}
type Options = {
    fileName?: string;
    onProgress?: (e: UploadProgressEvent) => void;
};
declare const downloadFile: (url: string, options?: Options) => Promise<unknown>;
export default downloadFile;
