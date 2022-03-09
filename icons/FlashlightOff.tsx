import { createSvgIcon } from './createSvgIcon';

export const FlashlightOff = createSvgIcon({
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <path d="M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z M14,20h-4v-7.17l4,4V20z"/>
                <polygon points="16,4 16,5 7.83,5 9.83,7 16,7 16,7.39 14,10.4 14,11.17 16,13.17 16,11 18,8 18,2 6,2 6,3.17 6.83,4"/>
            </g>
        </g>
    </svg>`,
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <polygon points="18,5 18,2 6,2 6,3.17 7.83,5"/>
                <polygon points="16,11 18,8 18,7 9.83,7 16,13.17"/>
                <path d="M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z"/>
            </g>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <path d="M18,5V4c0-1.1-0.9-2-2-2H8C7.14,2,6.42,2.54,6.13,3.3L7.83,5H18z"/>
                <polygon points="16,11 18,8 18,7 9.83,7 16,13.17"/>
                <path d="M2.1,3.51L2.1,3.51c-0.39,0.39-0.39,1.02,0,1.41l5.9,5.9L8,20c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-1.17l3.07,3.07 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51C3.12,3.12,2.49,3.12,2.1,3.51z"/>
            </g>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <polygon points="18,5 18,2 6,2 6,3.17 7.83,5"/>
                <polygon points="16,11 18,8 18,7 9.83,7 16,13.17"/>
                <path d="M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z"/>
            </g>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <g>
                    <polygon opacity=".3" points="16,7 9.83,7 14,11.17 14,10.4 16,7.39"/>
                    <polygon opacity=".3" points="10,12.83 10,20 14,20 14,16.83"/>
                    <polygon opacity=".3" points="16,5 16,4 6.83,4 7.83,5"/>
                </g>
                <g>
                    <path d="M2.81,2.81L1.39,4.22L8,10.83V22h8v-3.17l3.78,3.78l1.41-1.41L2.81,2.81z M14,20h-4v-7.17l4,4V20z"/>
                    <polygon points="16,4 16,5 7.83,5 9.83,7 16,7 16,7.39 14,10.4 14,11.17 16,13.17 16,11 18,8 18,2 6,2 6,3.17 6.83,4"/>
                </g>
            </g>
        </g>
    </svg>`
});
