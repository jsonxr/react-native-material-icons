import { createSvgIcon } from './createSvgIcon';

export const SvgSynagogue = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M6,8v13h4v-5c0-1.1,0.9-2,2-2s2,0.9,2,2v5h4V8l-6-5L6,8z M13.5,10c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5S13.5,9.17,13.5,10z"/>
                <path d="M3,5C1.9,5,1,5.9,1,7v1h4V7C5,5.9,4.1,5,3,5z"/>
                <rect height="12" width="4" x="1" y="9"/>
                <path d="M21,5c-1.1,0-2,0.9-2,2v1h4V7C23,5.9,22.1,5,21,5z"/>
                <rect height="12" width="4" x="19" y="9"/>
            </g>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M20,4c-1.66,0-3,1.34-3,3v0.29L12,3L7,7.29V7c0-1.66-1.34-3-3-3S1,5.34,1,7v14h10v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h10V7 C23,5.34,21.66,4,20,4z M20,6c0.55,0,1,0.45,1,1v1h-2V7C19,6.45,19.45,6,20,6z M4,6c0.55,0,1,0.45,1,1v1H3V7C3,6.45,3.45,6,4,6z M3,19v-9h2v9H3z M17,19h-2v-3c0-1.65-1.35-3-3-3c-1.65,0-3,1.35-3,3v3H7V9.92l5-4.29l5,4.29V19z M19,19v-9h2v9H19z"/>
                <circle cx="12" cy="10" r="1.5"/>
            </g>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M6,8.94V21h4l0-4.89c0-1,0.68-1.92,1.66-2.08C12.92,13.82,14,14.79,14,16v5h4V8.94c0-0.59-0.26-1.16-0.72-1.54l-4-3.33 c-0.74-0.62-1.82-0.62-2.56,0l-4,3.33C6.26,7.78,6,8.34,6,8.94z M13.5,10c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5S13.5,9.17,13.5,10z"/>
                <path d="M3,5C1.9,5,1,5.9,1,7v1h4V7C5,5.9,4.1,5,3,5z"/>
                <path d="M3,21h2V9H1v10C1,20.1,1.9,21,3,21z"/>
                <path d="M21,5c-1.1,0-2,0.9-2,2v1h4V7C23,5.9,22.1,5,21,5z"/>
                <path d="M19,21h2c1.1,0,2-0.9,2-2V9h-4V21z"/>
            </g>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M6,8v13h4v-7h4v7h4V8l-6-5L6,8z M13.5,10c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5S13.5,9.17,13.5,10z"/>
                <path d="M3,5C1.9,5,1,5.9,1,7v1h4V7C5,5.9,4.1,5,3,5z"/>
                <rect height="12" width="4" x="1" y="9"/>
                <path d="M21,5c-1.1,0-2,0.9-2,2v1h4V7C23,5.9,22.1,5,21,5z"/>
                <rect height="12" width="4" x="19" y="9"/>
            </g>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M4,6C3.45,6,3,6.45,3,7v1h2V7C5,6.45,4.55,6,4,6z" opacity=".3"/>
                <rect height="9" opacity=".3" width="2" x="3" y="10"/>
                <path d="M7,9.92V19h2v-3c0-1.65,1.35-3,3-3c1.65,0,3,1.35,3,3v3h2V9.92l-5-4.29L7,9.92z M13.5,10 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5S13.5,9.17,13.5,10z" opacity=".3"/>
                <path d="M20,6c-0.55,0-1,0.45-1,1v1h2V7C21,6.45,20.55,6,20,6z" opacity=".3"/>
                <rect height="9" opacity=".3" width="2" x="19" y="10"/>
                <path d="M20,4c-1.66,0-3,1.34-3,3v0.29L12,3L7,7.29V7c0-1.66-1.34-3-3-3S1,5.34,1,7v14h10v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v5h10V7 C23,5.34,21.66,4,20,4z M5,19H3v-9h2V19z M5,8H3V7c0-0.55,0.45-1,1-1s1,0.45,1,1V8z M17,19h-2v-3c0-1.65-1.35-3-3-3 c-1.65,0-3,1.35-3,3v3H7V9.92l5-4.29l5,4.29V19z M21,19h-2v-9h2V19z M21,8h-2V7c0-0.55,0.45-1,1-1s1,0.45,1,1V8z"/>
                <circle cx="12" cy="10" r="1.5"/>
            </g>
        </g>
    </svg>`
});
