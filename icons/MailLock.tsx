import { createSvgIcon } from './createSvgIcon';

export const MailLock = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <g>
                    <path d="M22,9.97V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h12v-5.03c0-2.76,2.24-5,5-5H22z M20,8l-8,5 L4,8V6l8,5l8-5V8z"/>
                </g>
                <g>
                    <path d="M23,15v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3 C24,15.45,23.55,15,23,15z M22,15h-2v-1c0-0.55,0.45-1,1-1s1,0.45,1,1V15z"/>
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
            <g>
                <path d="M4,8l8,5l8-5v2h2V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h12v-2H4V8z M20,6l-8,5L4,6H20z"/>
                <path d="M23,15v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3 C24,15.45,23.55,15,23,15z M20,15v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1H20z"/>
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
                <g>
                    <path d="M22,9.97V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h12v-5.03c0-2.76,2.24-5,5-5H22z M19.6,8.25 l-6.54,4.09c-0.65,0.41-1.47,0.41-2.12,0L4.4,8.25C4.15,8.09,4,7.82,4,7.53v0c0-0.67,0.73-1.07,1.3-0.72L12,11l6.7-4.19 C19.27,6.46,20,6.86,20,7.53v0C20,7.82,19.85,8.09,19.6,8.25z"/>
                </g>
                <g>
                    <path d="M23,15v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3 C24,15.45,23.55,15,23,15z M22,15h-2v-1c0-0.55,0.45-1,1-1s1,0.45,1,1V15z"/>
                </g>
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
                <g>
                    <path d="M22,9.97V4H2.01L2,20h14v-5.03c0-2.76,2.24-5,5-5H22z M20,8l-8,5L4,8V6l8,5l8-5V8z"/>
                </g>
                <g>
                    <path d="M23,15v-0.89c0-1-0.68-1.92-1.66-2.08C20.08,11.82,19,12.79,19,14v1h-1v5h6v-5H23z M22,15h-2v-1c0-0.55,0.45-1,1-1 s1,0.45,1,1V15z"/>
                </g>
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
                <polygon opacity=".3" points="20,6 4,6 12,11"/>
                <path d="M12,13L4,8v10h12v-3.03c0-2.42,1.72-4.44,4-4.9V8L12,13z" opacity=".3"/>
                <path d="M4,18V8l8,5l8-5v2.08c0.32-0.07,0.66-0.1,1-0.1h1V6c0-1.1-0.9-2-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h12v-2 H4z M20,6l-8,5L4,6H20z"/>
                <path d="M23,15v-1c0-1.1-0.9-2-2-2s-2,0.9-2,2v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h1h3c0.55,0,1-0.45,1-1v-3 C24,15.45,23.55,15,23,15z M20,15v-1c0-0.55,0.45-1,1-1s1,0.45,1,1v1H20z"/>
            </g>
        </g>
    </svg>`
});

