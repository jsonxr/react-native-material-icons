import { createSvgIcon } from './createSvgIcon';

export const DoNotDisturbOff = createSvgIcon({
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M17,11v2h-1.17l4.51,4.51C21.39,15.93,22,14.04,22,12c0-5.52-4.48-10-10-10C9.96,2,8.07,2.61,6.49,3.66L13.83,11H17z M2.1,4.93l1.56,1.56c-1.37,2.07-2,4.68-1.48,7.45c0.75,3.95,3.92,7.13,7.88,7.88c2.77,0.52,5.38-0.1,7.45-1.48l1.56,1.56 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0l0,0 C1.71,3.91,1.71,4.54,2.1,4.93z M7,11h1.17l2,2H7V11z"/>
        </g>
    </svg>`,
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M17 11v2h-1.46l4.68 4.68C21.34 16.07 22 14.11 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11H17zM2.27 2.27L1 3.54l2.78 2.78C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11 2.27 2.27zM7 13v-2h1.46l2 2H7z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M7.94,5.12C9.14,4.41,10.52,4,12,4c4.41,0,8,3.59,8,8c0,1.48-0.41,2.86-1.12,4.06l1.46,1.46C21.39,15.93,22,14.04,22,12 c0-5.52-4.48-10-10-10C9.96,2,8.07,2.61,6.49,3.66L7.94,5.12z"/>
                <path d="M2.81,2.81L1.39,4.22l2.27,2.27C2.61,8.07,2,9.96,2,12c0,5.52,4.48,10,10,10c2.04,0,3.93-0.61,5.51-1.66l2.27,2.27 l1.41-1.41L2.81,2.81z M12,20c-4.41,0-8-3.59-8-8c0-1.48,0.41-2.86,1.12-4.06L8.17,11H7v2h3.17l5.88,5.88 C14.86,19.59,13.48,20,12,20z"/>
                <polygon points="13.83,11 15.83,13 17,13 17,11"/>
            </g>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M17,11v2h-1.17l4.51,4.51C21.39,15.93,22,14.04,22,12c0-5.52-4.48-10-10-10C9.96,2,8.07,2.61,6.49,3.66L13.83,11H17z M1.39,4.22l2.27,2.27C2.61,8.07,2,9.96,2,12c0,5.52,4.48,10,10,10c2.04,0,3.93-0.61,5.51-1.66l2.27,2.27l1.41-1.41L2.81,2.81 L1.39,4.22z M7,11h1.17l2,2H7V11z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M7,13v-2h1.17L5.12,7.94C4.41,9.14,4,10.52,4,12c0,4.41,3.59,8,8,8 c1.48,0,2.86-0.41,4.06-1.12L10.17,13H7z M12,4c-1.48,0-2.86,0.41-4.06,1.12L13.83,11H17v2h-1.17l3.06,3.06 C19.59,14.86,20,13.48,20,12C20,7.59,16.41,4,12,4z" enable-background="new"/>
            <path d="M12,4c4.41,0,8,3.59,8,8c0,1.48-0.41,2.86-1.12,4.06l1.46,1.46C21.39,15.93,22,14.04,22,12c0-5.52-4.48-10-10-10 C9.96,2,8.07,2.61,6.49,3.66l1.46,1.46C9.14,4.41,10.52,4,12,4z M17,13v-2h-3.17l2,2H17z M1.39,4.22l2.27,2.27 C2.61,8.07,2,9.96,2,12c0,5.52,4.48,10,10,10c2.04,0,3.93-0.61,5.51-1.66l2.27,2.27l1.41-1.41L2.81,2.81L1.39,4.22z M5.12,7.94 L8.17,11H7v2h3.17l5.88,5.88C14.86,19.59,13.48,20,12,20c-4.41,0-8-3.59-8-8C4,10.52,4.41,9.14,5.12,7.94z"/>
        </g>
    </svg>`
});
