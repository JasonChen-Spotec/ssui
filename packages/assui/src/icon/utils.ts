import { useEffect } from 'react';
import { insertCss } from 'insert-css';

export const svgBaseProps = {
  'aria-hidden': 'true',
  focusable: 'false',
};

export const iconStyles = `
.spotecicon {
  display: inline-block;
  width: 16px;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.spotecicon > * {
  line-height: 1;
}

.spotecicon svg {
  display: inline-block;
}

.spotecicon::before {
  display: none;
}

.spotecicon .spotecicon-icon {
  display: block;
}

.spotecicon[tabindex] {
  cursor: pointer;
}

.spotecicon-spin::before,
.spotecicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

let cssInjectedFlag = false;

export const useInsertStyles = (styleStr = iconStyles) => {
  useEffect(() => {
    if (!cssInjectedFlag) {
      insertCss(styleStr, {
        prepend: true,
      });
      cssInjectedFlag = true;
    }
  }, []);
};
