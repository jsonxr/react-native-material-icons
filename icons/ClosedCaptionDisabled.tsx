import { createSvgIcon } from './createSvgIcon';

export const ClosedCaptionDisabled = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M6.83,4H19c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16l-3.38-3.38C17.84,14.59,18,14.32,18,14v-1h-1.5v0.5h-0.17 l-1.83-1.83V10.5h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v0.17L6.83,4z M19.78,22.61L17.17,20H5c-1.11,0-2-0.9-2-2V6 c0-0.05,0.02-0.1,0.02-0.15L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M11,13.83L10.17,13H9.5v0.5h-2v-3h0.17L6.4,9.22 C6.16,9.41,6,9.68,6,10v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V13.83z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M6.83,4H21v14.17L17.83,15H18v-2h-1.5v0.5h-0.17l-1.83-1.83V10.5h2V11H18V9h-5v1.17L6.83,4z M19.78,22.61L17.17,20H3V5.83 L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M11,13.83L10.17,13H9.5v0.5h-2v-3h0.17L6.17,9H6v6h5V13.83z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M6.83,4H19c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16l-3.38-3.38C17.84,14.59,18,14.32,18,14v-0.5 c0-0.28-0.22-0.5-0.5-0.5H17c-0.28,0-0.5,0.22-0.5,0.5h-0.17l-1.83-1.83V10.5h2c0,0.28,0.22,0.5,0.5,0.5h0.5 c0.28,0,0.5-0.22,0.5-0.5V10c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v0.17L6.83,4z M20.49,21.9c-0.39,0.39-1.02,0.39-1.41,0 l-1.9-1.9H5c-1.11,0-2-0.9-2-2V6c0-0.05,0.02-0.1,0.02-0.15L2.1,4.93c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0 l16.97,16.97C20.88,20.88,20.88,21.51,20.49,21.9z M11,13.83L10.17,13H10c-0.28,0-0.5,0.22-0.5,0.5h-2v-3h0.17L6.4,9.22 C6.16,9.41,6,9.68,6,10v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V13.83z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M13,10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1h-1.5v-0.5h-2v1L13,10z M16.5,13.5l1.21,1.21C17.89,14.52,18,14.27,18,14v-1 h-1.5V13.5z M8.83,6H19v10.17l1.98,1.98c0-0.05,0.02-0.1,0.02-0.16V6c0-1.1-0.9-2-2-2H6.83L8.83,6z M19.78,22.61L17.17,20H5 c-1.11,0-2-0.9-2-2V6c0-0.05,0.02-0.1,0.02-0.15L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M7.5,13.5h2V13h0.67l-2.5-2.5H7.5 V13.5z M15.17,18L11,13.83V14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.32,0.16-0.59,0.4-0.78L5,7.83V18H15.17z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M8.83,6H19v10.17l-1.4-1.4C17.84,14.59,18,14.32,18,14v-1h-1.5v0.5h-0.17 l-1.83-1.83V10.5h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v0.17L8.83,6z M7.5,13.5h2V13h0.67l-2.5-2.5H7.5V13.5z M11,14 c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.32,0.16-0.59,0.4-0.78L5,7.83V18h10.17L11,13.83V14z" enable-background="new" opacity=".3"/>
        <path d="M6.83,4H19c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16L19,16.17V6H8.83L6.83,4z M19.78,22.61L17.17,20H5 c-1.11,0-2-0.9-2-2V6c0-0.05,0.02-0.1,0.02-0.15L1.39,4.22l1.41-1.41L18,18l1.82,1.82l1.37,1.37L19.78,22.61z M7.5,13.5h2V13h0.67 l-2.5-2.5H7.5V13.5z M15.17,18L11,13.83V14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.32,0.16-0.59,0.4-0.78L5,7.83V18H15.17z M18,14v-1h-1.5v0.5h-0.17l1.28,1.28C17.84,14.59,18,14.32,18,14z M14.5,11.67V10.5h2V11H18v-1c0-0.55-0.45-1-1-1h-3 c-0.55,0-1,0.45-1,1v0.17L14.5,11.67z"/>
    </svg>`
});

