import { createSvgIcon } from './createSvgIcon';

export const SvgFastForward = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g/>
            <path d="M15,9.86L18.03,12L15,14.14V9.86 M6,9.86L9.03,12L6,14.14V9.86 M13,6v12l8.5-6L13,6L13,6z M4,6v12l8.5-6L4,6L4,6z"/>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M4,18l8.5-6L4,6V18z M13,6v12l8.5-6L13,6z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g/>
            <g>
                <polygon opacity=".3" points="15,9.86 15,14.14 18.03,12"/>
                <polygon opacity=".3" points="6,9.86 6,14.14 9.03,12"/>
                <path d="M4,18l8.5-6L4,6V18z M6,9.86L9.03,12L6,14.14V9.86z"/>
                <path d="M21.5,12L13,6v12L21.5,12z M15,9.86L18.03,12L15,14.14V9.86z"/>
            </g>
        </g>
    </svg>`
});

