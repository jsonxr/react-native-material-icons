import { createSvgIcon } from './createSvgIcon';

export const ClosedCaptionOff = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19.5 5.5v13h-15v-13h15zM19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g enable-background="new">
                <path d="M21,4H3v16h18V4z M11,11H9.5v-0.5h-2v3h2V13H11v2H6V9h5V11z M18,11h-1.5v-0.5h-2v3h2V13H18v2h-5V9h5V11z"/>
            </g>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g enable-background="new">
                <path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M11,10.5 c0,0.28-0.22,0.5-0.5,0.5H10c-0.28,0-0.5-0.22-0.5-0.5h-2v3h2c0-0.28,0.22-0.5,0.5-0.5h0.5c0.28,0,0.5,0.22,0.5,0.5V14 c0,0.55-0.45,1-1,1H7c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V10.5z M18,10.5c0,0.28-0.22,0.5-0.5,0.5H17 c-0.28,0-0.5-0.22-0.5-0.5h-2v3h2c0-0.28,0.22-0.5,0.5-0.5h0.5c0.28,0,0.5,0.22,0.5,0.5V14c0,0.55-0.45,1-1,1h-3 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V10.5z"/>
            </g>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g enable-background="new">
                <g>
                    <path d="M19,6H5v12h14V6z M11,11H9.5v-0.5h-2v3h2V13H11v1c0,0.55-0.45,1-1,1H7 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V11z M18,11h-1.5v-0.5h-2v3h2V13H18v1c0,0.55-0.45,1-1,1h-3 c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V11z" enable-background="new" opacity=".3"/>
                    <path d="M5,20h14c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H5C3.89,4,3,4.9,3,6v12C3,19.1,3.89,20,5,20z M5,6h14v12H5V6z"/>
                    <path d="M10,9H7c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1H9.5v0.5h-2v-3h2V11H11v-1C11,9.45,10.55,9,10,9z"/>
                    <path d="M17,9h-3c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1h-1.5v0.5h-2v-3h2V11H18v-1 C18,9.45,17.55,9,17,9z"/>
                </g>
            </g>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g enable-background="new">
                <g>
                    <path d="M19,4H5C3.89,4,3,4.9,3,6v12c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,18H5V6h14V18z"/>
                    <path d="M7,15h3c0.55,0,1-0.45,1-1v-1H9.5v0.5h-2v-3h2V11H11v-1c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v4C6,14.55,6.45,15,7,15z"/>
                    <path d="M14,15h3c0.55,0,1-0.45,1-1v-1h-1.5v0.5h-2v-3h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v4 C13,14.55,13.45,15,14,15z"/>
                </g>
            </g>
        </g>
    </svg>`
});

