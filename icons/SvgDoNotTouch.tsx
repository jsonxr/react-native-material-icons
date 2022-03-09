import { createSvgIcon } from './createSvgIcon';

export const SvgDoNotTouch = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <path d="M13,10.17l-2.5-2.5V2.25C10.5,1.56,11.06,1,11.75,1S13,1.56,13,2.25V10.17z M20,12.75V11V5.25C20,4.56,19.44,4,18.75,4 S17.5,4.56,17.5,5.25V11h-1V3.25C16.5,2.56,15.94,2,15.25,2S14,2.56,14,3.25v7.92l6,6V12.75z M9.5,4.25C9.5,3.56,8.94,3,8.25,3 c-0.67,0-1.2,0.53-1.24,1.18L9.5,6.67V4.25z M13,10.17l-2.5-2.5V2.25C10.5,1.56,11.06,1,11.75,1S13,1.56,13,2.25V10.17z M20,12.75 V11V5.25C20,4.56,19.44,4,18.75,4S17.5,4.56,17.5,5.25V11h-1V3.25C16.5,2.56,15.94,2,15.25,2S14,2.56,14,3.25v7.92l6,6V12.75z M9.5,4.25C9.5,3.56,8.94,3,8.25,3c-0.67,0-1.2,0.53-1.24,1.18L9.5,6.67V4.25z M21.19,21.19L2.81,2.81L1.39,4.22l5.63,5.63L7,9.83 v4.3c-1.11-0.64-2.58-1.47-2.6-1.48c-0.17-0.09-0.34-0.14-0.54-0.14c-0.26,0-0.5,0.09-0.7,0.26C3.12,12.78,2,13.88,2,13.88 l6.8,7.18c0.57,0.6,1.35,0.94,2.18,0.94H17c0.62,0,1.18-0.19,1.65-0.52l-0.02-0.02l1.15,1.15L21.19,21.19z"/>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <path d="M2.81,2.81L1.39,4.22L7,9.83l0,4.3l-2.6-1.48c-0.17-0.09-0.34-0.14-0.54-0.14c-0.26,0-0.5,0.09-0.7,0.26L2,13.88l6.8,7.18 c0.57,0.6,1.35,0.94,2.18,0.94H17c0.62,0,1.18-0.19,1.66-0.52l1.12,1.12l1.41-1.41L2.81,2.81z M17,20h-6 c-0.39,0-0.64-0.23-0.75-0.36L6.87,16H9l0-4.17l8.14,8.14C17.09,19.98,17.05,20,17,20z M13.83,11H14V3.25C14,2.56,14.56,2,15.25,2 s1.25,0.56,1.25,1.25V11h1V5.25C17.5,4.56,18.06,4,18.75,4S20,4.56,20,5.25v11.92l-2-2V13h-2.17L13.83,11z M13,10.17V2.25 C13,1.56,12.44,1,11.75,1S10.5,1.56,10.5,2.25v5.42L13,10.17z M9.5,6.67V4.25C9.5,3.56,8.94,3,8.25,3c-0.67,0-1.2,0.53-1.24,1.18v0 L9.5,6.67z"/>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <path d="M13,10.17l-2.5-2.5V2.25C10.5,1.56,11.06,1,11.75,1C12.44,1,13,1.56,13,2.25V10.17z M20,5.32c0-0.65-0.47-1.25-1.12-1.32 c-0.75-0.08-1.38,0.51-1.38,1.24v5.25c0,0.28-0.22,0.5-0.5,0.5h0c-0.28,0-0.5-0.22-0.5-0.5l0-7.18c0-0.65-0.47-1.25-1.12-1.32 C14.63,1.93,14,2.52,14,3.25v7.92l6,6L20,5.32z M9.5,4.25C9.5,3.56,8.94,3,8.25,3c-0.67,0-1.2,0.53-1.24,1.18L9.5,6.67V4.25z M17,22c0.62,0,1.18-0.19,1.65-0.52l-0.02-0.02l0.44,0.44c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51 c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l4.92,4.92L7,9.83v4.3l-2.6-1.48c-0.17-0.09-0.34-0.14-0.54-0.14 c-0.26,0-0.5,0.09-0.7,0.26L2,13.88l0,0l6.8,7.18c0.57,0.6,1.35,0.94,2.18,0.94L17,22L17,22z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <path d="M13,10.17l-2.5-2.5V1H13V10.17z M20,4h-2.5v7h-1V2H14v9.17l6,6V4z M9.5,3H7.01v1.18L9.5,6.67V3z M21.19,21.19L2.81,2.81 L1.39,4.22L7,9.83v4.3l-3.32-1.9L2,13.88L9.68,22h9.54l0.56,0.61L21.19,21.19z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <path d="M18,15.17V13h-2.17L18,15.17z M9,11.83l8.14,8.14C17.09,19.98,17.05,20,17,20h-6 c-0.39,0-0.64-0.23-0.75-0.36L6.87,16H9L9,11.83z" opacity=".3"/>
            <path d="M2.81,2.81L1.39,4.22L7,9.83l0,4.3l-2.6-1.48c-0.17-0.09-0.34-0.14-0.54-0.14c-0.26,0-0.5,0.09-0.7,0.26L2,13.88l6.8,7.18 c0.57,0.6,1.35,0.94,2.18,0.94H17c0.62,0,1.18-0.19,1.66-0.52l1.12,1.12l1.41-1.41L2.81,2.81z M17,20h-6 c-0.39,0-0.64-0.23-0.75-0.36L6.87,16H9l0-4.17l8.14,8.14C17.09,19.98,17.05,20,17,20z M13.83,11H14V3.25C14,2.56,14.56,2,15.25,2 s1.25,0.56,1.25,1.25V11h1V5.25C17.5,4.56,18.06,4,18.75,4S20,4.56,20,5.25v11.92l-2-2V13h-2.17L13.83,11z M13,10.17V2.25 C13,1.56,12.44,1,11.75,1S10.5,1.56,10.5,2.25v5.42L13,10.17z M9.5,6.67V4.25C9.5,3.56,8.94,3,8.25,3c-0.67,0-1.2,0.53-1.24,1.18v0 L9.5,6.67z"/>
        </g>
    </svg>`
});

