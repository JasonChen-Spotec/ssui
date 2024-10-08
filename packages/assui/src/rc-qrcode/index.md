---
mobile: false
title: RcQrcode
nav:
  title: assui
  path: /assui
group:
  title: 展示
  path: /components/show
---

# RcQrcode

## 1. Canvas生成图片

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/index.tsx" />

## 2. hooks获取img url

<code hideActions='["CSB", "EXTERNAL"]' src="./demo/UseQrcode.tsx" />


 

### 2.1. QRCodeOptions
```ts
export interface QRCodeOptions {
    /**
     * QR Code version. If not specified the more suitable value will be calculated.
     */
    version?: number | undefined;
    /**
     * Error correction level.
     * Possible values are low, medium, quartile, high or L, M, Q, H.
     * Default: M
     */
    errorCorrectionLevel?: QRCodeErrorCorrectionLevel | undefined;
    /**
     * Helper function used internally to convert a kanji to its Shift JIS value.
     * Provide this function if you need support for Kanji mode.
     */
    toSJISFunc?: ((codePoint: string) => number) | undefined;
}
```


### 2.2. QRCodeRenderersOptions


```ts
export interface QRCodeRenderersOptions extends QRCodeOptions {
    /**
     * Define how much wide the quiet zone should be.
     * Default: 4
     */
    margin?: number | undefined;
    /**
     * Scale factor. A value of 1 means 1px per modules (black dots).
     * Default: 4
     */
    scale?: number | undefined;
    /**
     * Forces a specific width for the output image.
     * If width is too small to contain the qr symbol, this option will be ignored.
     * Takes precedence over scale.
     */
    width?: number | undefined;
    color?: {
        /**
         * Color of dark module. Value must be in hex format (RGBA).
         * Note: dark color should always be darker than color.light.
         * Default: #000000ff
         */
        dark?: string | undefined;
        /**
         * Color of light module. Value must be in hex format (RGBA).
         * Default: #ffffffff
         */
        light?: string | undefined;
    } | undefined;
}
```
