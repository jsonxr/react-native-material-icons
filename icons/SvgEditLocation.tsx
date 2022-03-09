import { createSvgIcon } from './createSvgIcon';

export const SvgEditLocation = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M18.17 4.91L17.1 3.84l-5.55 5.55v1.08h1.08l5.54-5.56zM16 2.74l1.29-1.29a1.49 1.49 0 0 1 2.12 0l1.15 1.15c.59.59.59 1.54 0 2.12l-.68.68-.02.02-.58.58-6 6H10V8.74l6-6zm-2.28-.55l-.55.55-1.27 1.27c-3.3.05-5.9 2.6-5.9 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-.1l1.8-1.8c.13.6.2 1.24.2 1.9 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.2.58 0 1.16.06 1.72.18z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24" y="0"/>
        </g>
        <g>
            <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M9.73,13.5H8.5v-1.44l3.93-3.92l1.43,1.43l-3.77,3.78C9.99,13.45,9.87,13.5,9.73,13.5z M15.28,8.16l-0.7,0.7 l-1.44-1.44l0.7-0.7c0.15-0.15,0.39-0.15,0.54,0l0.9,0.9C15.43,7.77,15.43,8.01,15.28,8.16z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M18.11 1.77L19.78.1l2.12 2.12-1.67 1.67-2.12-2.12zm-1 1l2.12 2.12L13.12 11H11V8.89l6.11-6.12zm-1.98-.13L9.5 8.27v4.24h4.24l5.62-5.62c.41.99.64 2.1.64 3.32 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8 0-4.98 3.8-8.2 8-8.2 1.09 0 2.16.22 3.13.63z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M14.11,14h-0.83H10H8v-2V8.74V7.91l0.59-0.59L11.91,4C8.61,4.05,6,6.6,6,10.2c0,2.34,1.95,5.44,6,9.14 c4.05-3.7,6-6.79,6-9.14c0-0.03,0-0.06,0-0.08l-3.3,3.3L14.11,14z" opacity=".3"/>
        <path d="M18.17,4.91L17.1,3.84l-5.55,5.55v1.08h1.08L18.17,4.91z M16,2.74l1.29-1.29c0.58-0.59,1.52-0.59,2.11-0.01 c0,0,0.01,0.01,0.01,0.01l1.15,1.15c0.59,0.59,0.59,1.54,0,2.12L19.88,5.4l-0.02,0.02L19.28,6l-6,6H10V8.74L16,2.74z M13.72,2.19 l-0.55,0.55L11.9,4.01C8.6,4.06,6,6.61,6,10.21c0,2.34,1.95,5.44,6,9.14c4.05-3.7,6-6.79,6-9.14v-0.1l1.8-1.8 c0.13,0.6,0.2,1.24,0.2,1.9c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8c0-4.98,3.8-8.2,8-8.2 C12.58,2.01,13.16,2.07,13.72,2.19z"/>
        <polygon opacity=".3" points="18.17,4.91 17.1,3.84 11.55,9.39 11.55,10.47 12.63,10.47"/>
    </svg>`
});

