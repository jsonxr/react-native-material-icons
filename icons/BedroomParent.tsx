import { createSvgIcon } from './createSvgIcon';

export const BedroomParent = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <path d="M16.5,12h-9c-0.55,0-1,0.45-1,1v1h11v-1C17.5,12.45,17.05,12,16.5,12z"/>
                <rect height="2" width="4" x="7.25" y="8.5"/>
                <rect height="2" width="4" x="12.75" y="8.5"/>
                <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M19,17h-1.5v-1.5h-11V17H5v-3.83 c0-0.66,0.25-1.26,0.65-1.72V9c0-1.1,0.9-2,2-2H11c0.37,0,0.72,0.12,1,0.32C12.28,7.12,12.63,7,13,7h3.35c1.1,0,2,0.9,2,2v2.45 c0.4,0.46,0.65,1.06,0.65,1.72V17z"/>
            </g>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M18.35,11.45V9c0-1.1-0.9-2-2-2H13c-0.37,0-0.72,0.12-1,0.32C11.72,7.12,11.37,7,11,7H7.65c-1.1,0-2,0.9-2,2v2.45 C5.25,11.91,5,12.51,5,13.17V17h1.5v-1.5h11V17H19v-3.83C19,12.51,18.75,11.91,18.35,11.45z M16.75,10.5h-4v-2h4V10.5z M7.25,8.5h4 v2h-4V8.5z M17.5,14h-11v-1c0-0.55,0.45-1,1-1h9c0.55,0,1,0.45,1,1V14z M20,4v16H4V4H20 M20,2H4C2.9,2,2,2.9,2,4v16 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z"/>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <path d="M16.5,12h-9c-0.55,0-1,0.45-1,1v1h11v-1C17.5,12.45,17.05,12,16.5,12z"/>
                <rect height="2" width="4" x="7.25" y="8.5"/>
                <rect height="2" width="4" x="12.75" y="8.5"/>
                <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.25,17L18.25,17 c-0.41,0-0.75-0.34-0.75-0.75V15.5h-11v0.75C6.5,16.66,6.16,17,5.75,17h0C5.34,17,5,16.66,5,16.25v-3.08 c0-0.66,0.25-1.26,0.65-1.72V9c0-1.1,0.9-2,2-2H11c0.37,0,0.72,0.12,1,0.32C12.28,7.12,12.63,7,13,7h3.35c1.1,0,2,0.9,2,2v2.45 c0.4,0.46,0.65,1.06,0.65,1.72v3.08C19,16.66,18.66,17,18.25,17z"/>
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
                <rect height="2" width="11" x="6.5" y="12"/>
                <rect height="2" width="4" x="7.25" y="8.5"/>
                <rect height="2" width="4" x="12.75" y="8.5"/>
                <path d="M22,2H2v20h20V2z M19,17h-1.5v-1.5h-11V17H5v-5l0.65-0.55V7H11c0.37,0,0.72,0.12,1,0.32C12.28,7.12,12.63,7,13,7h5.35 v4.45L19,12V17z"/>
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
                <path d="M4,20h16V4H4V20z M5,13.17c0-0.66,0.25-1.26,0.65-1.72V9c0-1.1,0.9-2,2-2H11c0.37,0,0.72,0.12,1,0.32 C12.28,7.12,12.63,7,13,7h3.35c1.1,0,2,0.9,2,2v2.45c0.4,0.46,0.65,1.06,0.65,1.72V17h-1.5v-1.5h-11V17H5V13.17z" opacity=".3"/>
                <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"/>
                <path d="M6.5,15.5h11V17H19v-3.83c0-0.66-0.25-1.26-0.65-1.72V9c0-1.1-0.9-2-2-2H13c-0.37,0-0.72,0.12-1,0.32 C11.72,7.12,11.37,7,11,7H7.65c-1.1,0-2,0.9-2,2v2.45C5.25,11.91,5,12.51,5,13.17V17h1.5V15.5z M12.75,8.5h4v2h-4V8.5z M7.25,8.5 h4v2h-4V8.5z M6.5,13c0-0.55,0.45-1,1-1h9c0.55,0,1,0.45,1,1v1h-11V13z"/>
            </g>
        </g>
    </svg>`
});

