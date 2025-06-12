declare module 'body-scroll-lock' {
  export function disableBodyScroll(element: HTMLElement): void;
  export function enableBodyScroll(element: HTMLELElement): void;
  export function clearAllBodyScrollLocks(): void;
}
