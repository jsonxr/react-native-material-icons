import { createSvgIcon } from './createSvgIcon';

export const SvgNetworkCell = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M4.41,22H21c0.55,0,1-0.45,1-1V4.41c0-0.89-1.08-1.34-1.71-0.71L3.71,20.29C3.08,20.92,3.52,22,4.41,22z M20,20h-3V9.83 l3-3V20z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/>
        </g>
    </svg>`
});

