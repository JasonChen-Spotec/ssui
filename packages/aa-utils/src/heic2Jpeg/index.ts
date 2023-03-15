import heic2any from 'heic2any';

async function heic2Jpeg(src?: string) {
  if (/.HEIC$/.test(src || '')) {
    try {
      const res = await fetch(src || '');
      const type = res.headers.get('content-type') || 'image/*';

      if (type === 'image/heic') {
        const blob = await res.blob();
        const transfered = await heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 1,
        });

        return URL.createObjectURL(transfered as Blob);
      }
    } catch (error) {
      return src;
    }
  }

  return src;
}

export default heic2Jpeg;
