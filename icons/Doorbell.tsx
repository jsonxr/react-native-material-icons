import { createSvgIcon } from './createSvgIcon';

export const Doorbell = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M12,3L4,9v12h16V9L12,3z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M16,16H8v-1h1v-2.34 c0-1.54,0.82-2.82,2.25-3.16V9.25c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75V9.5C14.19,9.84,15,11.12,15,12.66V15h1V16z"/>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M11,16.5h2c0,0.55-0.45,1-1,1S11,17.05,11,16.5z M15,15v-2.34c0-1.54-0.81-2.82-2.25-3.16V9.25c0-0.41-0.34-0.75-0.75-0.75 s-0.75,0.34-0.75,0.75V9.5C9.82,9.84,9,11.12,9,12.66V15H8v1h8v-1H15z M12,5.5L6,10v9h12v-9L12,5.5 M12,3l8,6v12H4V9L12,3z"/>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M10.8,3.9l-6,4.5C4.3,8.78,4,9.37,4,10v9c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.37,11.51,3.37,10.8,3.9z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M15.5,16h-7C8.22,16,8,15.78,8,15.5 v0C8,15.22,8.22,15,8.5,15H9v-2.34c0-1.54,0.82-2.82,2.25-3.16V9.25c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75V9.5 C14.19,9.84,15,11.12,15,12.66V15h0.5c0.28,0,0.5,0.22,0.5,0.5v0C16,15.78,15.78,16,15.5,16z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <path d="M12,3L4,9v12h16V9L12,3z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M16,16H8v-1h1v-2.34 c0-1.54,0.82-2.82,2.25-3.16v-1h1.5v1C14.19,9.84,15,11.12,15,12.66V15h1V16z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
        <g>
            <g>
                <path d="M6,10v9h12v-9l-6-4.5L6,10z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M12.75,9.25V9.5 C14.19,9.84,15,11.12,15,12.66V15h1v1H8v-1h1v-2.34c0-1.54,0.82-2.82,2.25-3.16V9.25c0-0.41,0.34-0.75,0.75-0.75 S12.75,8.84,12.75,9.25z" opacity=".3"/>
                <path d="M12,3L4,9v12h16V9L12,3z M18,19H6v-9l6-4.5l6,4.5V19z"/>
                <path d="M11.25,9.25V9.5C9.82,9.84,9,11.12,9,12.66V15H8v1h8v-1h-1v-2.34c0-1.54-0.81-2.82-2.25-3.16V9.25 c0-0.41-0.34-0.75-0.75-0.75S11.25,8.84,11.25,9.25z"/>
                <path d="M12,17.5c0.55,0,1-0.45,1-1h-2C11,17.05,11.45,17.5,12,17.5z"/>
            </g>
        </g>
    </svg>`
});

