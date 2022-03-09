import { createSvgIcon } from './createSvgIcon';

export const M8KPlus = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M6.5 12.5H8V14H6.5zm0-2.5H8v1.5H6.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4zm6.5 1h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20v1z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <g>
                    <path d="M7,15h2c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z M7.5,10h1v1.5h-1V10z M7.5,12.5h1V14h-1V12.5z"/>
                    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/>
                    <polygon points="12.5,12.75 14.25,15 16,15 13.75,12 16,9 14.25,9 12.5,11.25 12.5,9 11,9 11,15 12.5,15"/>
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
            <g>
                <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10,14c0,0.55-0.45,1-1,1H7 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1V14z M14.59,15c-0.22,0-0.42-0.1-0.55-0.27l-1.54-1.98v1.55 c0,0.39-0.31,0.7-0.7,0.7H11.7c-0.39,0-0.7-0.31-0.7-0.7V9.7C11,9.31,11.31,9,11.7,9h0.09c0.39,0,0.7,0.31,0.7,0.7v1.55l1.54-1.98 C14.17,9.1,14.38,9,14.59,9c0.58,0,0.91,0.66,0.56,1.12L13.75,12l1.41,1.88C15.5,14.34,15.17,15,14.59,15z M19,12.5h-1.5V14h-1 v-1.5H15v-1h1.5V10h1v1.5H19V12.5z"/>
                <rect height="1.5" width="1" x="7.5" y="12.5"/>
                <rect height="1.5" width="1" x="7.5" y="10"/>
            </g>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M7.5,12.5h1V14h-1V12.5z M7.5,10h1v1.5h-1V10z M21,3H3v18h18V3z M10,14c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4 c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1V14z M16,15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25,9H16l-2.25,3L16,15z M19,12.5h-1.5V14 h-1v-1.5H15v-1h1.5V10h1v1.5H19V12.5z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <rect height="1.5" opacity=".3" width="1" x="7.5" y="12.5"/>
                <rect height="1.5" opacity=".3" width="1" x="7.5" y="10"/>
                <path d="M5,19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5V19z M11,9h1.5v2.25L14.25,9H16l-2.25,3L16,15 h-1.75l-1.75-2.25V15H11V9z M6,10c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1V10z" opacity=".3"/>
                <path d="M7,15h2c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z M7.5,10h1v1.5h-1V10z M7.5,12.5h1V14h-1V12.5z"/>
                <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,11.5h-1.5V10h-1v1.5H15v1h1.5 V14h1v-1.5H19V19H5V5h14V11.5z"/>
                <polygon points="12.5,12.75 14.25,15 16,15 13.75,12 16,9 14.25,9 12.5,11.25 12.5,9 11,9 11,15 12.5,15"/>
            </g>
        </g>
    </svg>`
});

