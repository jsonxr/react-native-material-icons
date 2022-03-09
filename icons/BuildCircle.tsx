import { createSvgIcon } from './createSvgIcon';

export const BuildCircle = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <g>
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M16.9,15.49l-1.4,1.4c-0.2,0.2-0.51,0.2-0.71,0l-3.41-3.41c-1.22,0.43-2.64,0.17-3.62-0.81 c-1.11-1.11-1.3-2.79-0.59-4.1l2.35,2.35l1.41-1.41L8.58,7.17c1.32-0.71,2.99-0.52,4.1,0.59c0.98,0.98,1.24,2.4,0.81,3.62 l3.41,3.41C17.09,14.98,17.09,15.3,16.9,15.49z" fill-rule="evenodd"/>
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
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M16.54,15.85l-0.69,0.69c-0.39,0.39-1.02,0.39-1.41,0l-3.05-3.05c-1.22,0.43-2.64,0.17-3.62-0.81 c-1.11-1.11-1.3-2.79-0.59-4.1l2.35,2.35l1.41-1.41L8.58,7.17c1.32-0.71,2.99-0.52,4.1,0.59c0.98,0.98,1.24,2.4,0.81,3.62 l3.05,3.05C16.93,14.82,16.93,15.46,16.54,15.85z" fill-rule="evenodd"/>
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
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M15.14,17.25l-3.76-3.76c-1.22,0.43-2.64,0.17-3.62-0.81c-1.11-1.11-1.3-2.79-0.59-4.1l2.35,2.35 l1.41-1.41L8.58,7.17c1.32-0.71,2.99-0.52,4.1,0.59c0.98,0.98,1.24,2.4,0.81,3.62l3.76,3.76L15.14,17.25z" fill-rule="evenodd"/>
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
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z" fill-rule="evenodd"/>
                <path d="M13.49,11.38c0.43-1.22,0.17-2.64-0.81-3.62c-1.11-1.11-2.79-1.3-4.1-0.59 l2.35,2.35l-1.41,1.41L7.17,8.58c-0.71,1.32-0.52,2.99,0.59,4.1c0.98,0.98,2.4,1.24,3.62,0.81l3.41,3.41c0.2,0.2,0.51,0.2,0.71,0 l1.4-1.4c0.2-0.2,0.2-0.51,0-0.71L13.49,11.38z" fill-rule="evenodd"/>
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
                <path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8c4.41,0,8-3.59,8-8C20,7.59,16.41,4,12,4z" opacity=".3"/>
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 c0-4.41,3.59-8,8-8c4.41,0,8,3.59,8,8C20,16.41,16.41,20,12,20z"/>
                <path d="M12.68,7.76c-1.11-1.11-2.79-1.3-4.1-0.59l2.35,2.35l-1.41,1.41L7.17,8.58c-0.71,1.32-0.52,2.99,0.59,4.1 c0.98,0.98,2.4,1.24,3.62,0.81l3.41,3.41c0.2,0.2,0.51,0.2,0.71,0l1.4-1.4c0.2-0.2,0.2-0.51,0-0.71l-3.41-3.41 C13.92,10.15,13.66,8.74,12.68,7.76z"/>
            </g>
        </g>
    </svg>`
});

