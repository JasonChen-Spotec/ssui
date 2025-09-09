declare const getMultipartUploadHandler: (resultUrl: string) => (file: Blob, progress: (v: number) => any) => Promise<unknown>;
export default getMultipartUploadHandler;
