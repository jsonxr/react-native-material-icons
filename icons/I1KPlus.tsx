import { createSvgIcon } from './createSvgIcon';

export const I1KPlus = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 15H7.5v-4.5H6V9h3v6zm4.75 0L12 12.75V15h-1.5V9H12v2.25L13.75 9h1.75l-2.25 3 2.25 3h-1.75zm5.75-2.5H18V14h-1v-1.5h-1.5v-1H17V10h1v1.5h1.5v1z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <g>
                    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/>
                    <polygon points="7.5,15 9,15 9,9 6,9 6,10.5 7.5,10.5"/>
                    <polygon points="12,12.75 13.75,15 15.5,15 13.25,12 15.5,9 13.75,9 12,11.25 12,9 10.5,9 10.5,15 12,15"/>
                </g>
            </g>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.25,15L8.25,15 c-0.41,0-0.75-0.34-0.75-0.75V10.5H6.75C6.34,10.5,6,10.16,6,9.75v0C6,9.34,6.34,9,6.75,9H8c0.55,0,1,0.45,1,1v4.25 C9,14.66,8.66,15,8.25,15z M13.54,14.73L12,12.75v1.55c0,0.39-0.31,0.7-0.7,0.7H11.2c-0.39,0-0.7-0.31-0.7-0.7V9.7 c0-0.39,0.31-0.7,0.7-0.7h0.09C11.69,9,12,9.31,12,9.7v1.55l1.54-1.98C13.67,9.1,13.88,9,14.09,9h0c0.58,0,0.91,0.66,0.56,1.12 L13.25,12l1.41,1.88C15,14.34,14.67,15,14.09,15h0C13.88,15,13.67,14.9,13.54,14.73z M18.5,12.5h-1v1c0,0.28-0.22,0.5-0.5,0.5l0,0 c-0.28,0-0.5-0.22-0.5-0.5v-1h-1c-0.28,0-0.5-0.22-0.5-0.5v0c0-0.28,0.22-0.5,0.5-0.5h1v-1c0-0.28,0.22-0.5,0.5-0.5l0,0 c0.28,0,0.5,0.22,0.5,0.5v1h1c0.28,0,0.5,0.22,0.5,0.5v0C19,12.28,18.78,12.5,18.5,12.5z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M21,3H3v18h18V3z M9,15H7.5v-4.5H6V9h3V15z M13.75,15L12,12.75V15h-1.5V9H12v2.25L13.75,9h1.75l-2.25,3l2.25,3H13.75z M19,12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M5,19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5V19z M10.5,9H12v2.25L13.75,9h1.75l-2.25,3l2.25,3 h-1.75L12,12.75V15h-1.5V9z M6,9h3v6H7.5v-4.5H6V9z" opacity=".3"/>
                <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/>
                <polygon points="7.5,15 9,15 9,9 6,9 6,10.5 7.5,10.5"/>
                <polygon points="12,12.75 13.75,15 15.5,15 13.25,12 15.5,9 13.75,9 12,11.25 12,9 10.5,9 10.5,15 12,15"/>
            </g>
        </g>
    </svg>`
});
