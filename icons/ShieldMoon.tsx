import { createSvgIcon } from './createSvgIcon';

export const ShieldMoon = createSvgIcon({
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M11.3,2.26l-6,2.25C4.52,4.81,4,5.55,4,6.39v4.7c0,4.83,3.13,9.37,7.43,10.75c0.37,0.12,0.77,0.12,1.14,0 c4.3-1.38,7.43-5.91,7.43-10.75v-4.7c0-0.83-0.52-1.58-1.3-1.87l-6-2.25C12.25,2.09,11.75,2.09,11.3,2.26z M15.97,14.41 c-1.84,2.17-5.21,2.1-6.96-0.07c-2.19-2.72-0.65-6.72,2.69-7.33c0.34-0.06,0.63,0.27,0.51,0.6c-0.46,1.23-0.39,2.64,0.32,3.86 c0.71,1.22,1.89,1.99,3.18,2.2C16.05,13.72,16.2,14.14,15.97,14.41z"/>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/>
                <path d="M9.01,14.33c1.75,2.17,5.12,2.24,6.96,0.07c0.23-0.27,0.08-0.68-0.26-0.74c-1.29-0.21-2.48-0.98-3.18-2.2 c-0.71-1.22-0.78-2.63-0.32-3.86c0.12-0.33-0.16-0.66-0.51-0.6C8.36,7.62,6.81,11.61,9.01,14.33z"/>
            </g>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M15.97,14.41c-1.84,2.17-5.21,2.1-6.96-0.07 c-2.19-2.72-0.65-6.72,2.69-7.33c0.34-0.06,0.63,0.27,0.51,0.6c-0.46,1.23-0.39,2.64,0.32,3.86c0.71,1.22,1.89,1.99,3.18,2.2 C16.05,13.72,16.2,14.14,15.97,14.41z"/>
        </g>
    </svg>`,
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M15.97,14.41c-1.84,2.17-5.21,2.1-6.96-0.07 c-2.19-2.72-0.65-6.72,2.69-7.33c0.34-0.06,0.63,0.27,0.51,0.6c-0.46,1.23-0.39,2.64,0.32,3.86c0.71,1.22,1.89,1.99,3.18,2.2 C16.05,13.72,16.2,14.14,15.97,14.41z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M6,6.39v4.7c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83v-4.7l-6-2.25L6,6.39z M12.21,7.61 c-0.46,1.23-0.39,2.64,0.32,3.86c0.71,1.22,1.89,1.99,3.18,2.2c0.34,0.06,0.49,0.47,0.26,0.74c-1.84,2.17-5.21,2.1-6.96-0.07 c-2.19-2.72-0.65-6.72,2.69-7.33C12.04,6.95,12.33,7.28,12.21,7.61z" opacity=".3"/>
                <path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/>
                <path d="M9.01,14.33c1.75,2.17,5.12,2.24,6.96,0.07c0.23-0.27,0.08-0.68-0.26-0.74c-1.29-0.21-2.48-0.98-3.18-2.2 c-0.71-1.22-0.78-2.63-0.32-3.86c0.12-0.33-0.16-0.66-0.51-0.6C8.36,7.62,6.81,11.61,9.01,14.33z"/>
            </g>
        </g>
    </svg>`
});
