import { createSvgIcon } from './createSvgIcon';

export const SvgKebabDining = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M7.75,8H11v5H7.75v1H8.5c1.38,0,2.5,1.12,2.5,2.5c0,1.38-1.12,2.5-2.5,2.5H7.75v4h-1.5v-4H5.5C4.12,19,3,17.88,3,16.5 C3,15.12,4.12,14,5.5,14h0.75v-1H3V8h3.25V7H5.5C4.12,7,3,5.88,3,4.5C3,3.12,4.12,2,5.5,2h0.75V1h1.5v1H8.5C9.88,2,11,3.12,11,4.5 C11,5.88,9.88,7,8.5,7H7.75V8z M17.75,7h0.75C19.88,7,21,5.88,21,4.5C21,3.12,19.88,2,18.5,2h-0.75V1h-1.5v1H15.5 C14.12,2,13,3.12,13,4.5C13,5.88,14.12,7,15.5,7h0.75v1H13v5h3.25v1H15.5c-1.38,0-2.5,1.12-2.5,2.5c0,1.38,1.12,2.5,2.5,2.5h0.75v4 h1.5v-4h0.75c1.38,0,2.5-1.12,2.5-2.5c0-1.38-1.12-2.5-2.5-2.5h-0.75v-1H21V8h-3.25V7z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M17.75,7h0.75C19.88,7,21,5.88,21,4.5C21,3.12,19.88,2,18.5,2h-0.75V1h-1.5v1H15.5C14.12,2,13,3.12,13,4.5 C13,5.88,14.12,7,15.5,7h0.75v1H13v5h3.25v1H15.5c-1.38,0-2.5,1.12-2.5,2.5c0,1.38,1.12,2.5,2.5,2.5h0.75v4h1.5v-4h0.75 c1.38,0,2.5-1.12,2.5-2.5c0-1.38-1.12-2.5-2.5-2.5h-0.75v-1H21V8h-3.25V7z M15.5,5C15.22,5,15,4.78,15,4.5S15.22,4,15.5,4h3 C18.78,4,19,4.22,19,4.5S18.78,5,18.5,5H15.5z M18.5,16c0.28,0,0.5,0.22,0.5,0.5S18.78,17,18.5,17h-3c-0.28,0-0.5-0.22-0.5-0.5 s0.22-0.5,0.5-0.5H18.5z M19,10v1h-4v-1H19z M7.75,7H8.5C9.88,7,11,5.88,11,4.5C11,3.12,9.88,2,8.5,2H7.75V1h-1.5v1H5.5 C4.12,2,3,3.12,3,4.5C3,5.88,4.12,7,5.5,7h0.75v1H3v5h3.25v1H5.5C4.12,14,3,15.12,3,16.5C3,17.88,4.12,19,5.5,19h0.75v4h1.5v-4H8.5 c1.38,0,2.5-1.12,2.5-2.5c0-1.38-1.12-2.5-2.5-2.5H7.75v-1H11V8H7.75V7z M5.5,5C5.22,5,5,4.78,5,4.5S5.22,4,5.5,4h3 C8.78,4,9,4.22,9,4.5S8.78,5,8.5,5H5.5z M8.5,16C8.78,16,9,16.22,9,16.5S8.78,17,8.5,17h-3C5.22,17,5,16.78,5,16.5S5.22,16,5.5,16 H8.5z M9,10v1H5v-1H9z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M7.75,13v1H8.5c1.38,0,2.5,1.12,2.5,2.5c0,1.38-1.12,2.5-2.5,2.5H7.75v3.25C7.75,22.66,7.41,23,7,23s-0.75-0.34-0.75-0.75 V19H5.5C4.12,19,3,17.88,3,16.5C3,15.12,4.12,14,5.5,14h0.75v-1H4c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h2.25V7H5.5 C4.12,7,3,5.88,3,4.5C3,3.12,4.12,2,5.5,2h0.75V1.75C6.25,1.34,6.59,1,7,1s0.75,0.34,0.75,0.75V2H8.5C9.88,2,11,3.12,11,4.5 C11,5.88,9.88,7,8.5,7H7.75v1H10c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1H7.75z M17.75,13v1h0.75c1.38,0,2.5,1.12,2.5,2.5 c0,1.38-1.12,2.5-2.5,2.5h-0.75v3.25c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V19H15.5c-1.38,0-2.5-1.12-2.5-2.5 c0-1.38,1.12-2.5,2.5-2.5h0.75v-1H14c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h2.25V7H15.5C14.12,7,13,5.88,13,4.5 C13,3.12,14.12,2,15.5,2h0.75V1.75C16.25,1.34,16.59,1,17,1s0.75,0.34,0.75,0.75V2h0.75C19.88,2,21,3.12,21,4.5 C21,5.88,19.88,7,18.5,7h-0.75v1H20c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1H17.75z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M7.75,8H11v5H7.75v1H8.5c1.38,0,2.5,1.12,2.5,2.5S9.88,19,8.5,19H7.75v4h-1.5v-4H5.5C4.12,19,3,17.88,3,16.5S4.12,14,5.5,14 h0.75v-1H3V8h3.25V7H5.5C4.12,7,3,5.88,3,4.5S4.12,2,5.5,2h0.75V1h1.5v1H8.5C9.88,2,11,3.12,11,4.5S9.88,7,8.5,7H7.75V8z M17.75,7 h0.75C19.88,7,21,5.88,21,4.5S19.88,2,18.5,2h-0.75V1h-1.5v1H15.5C14.12,2,13,3.12,13,4.5S14.12,7,15.5,7h0.75v1H13v5h3.25v1H15.5 c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5h0.75v4h1.5v-4h0.75c1.38,0,2.5-1.12,2.5-2.5S19.88,14,18.5,14h-0.75v-1H21V8h-3.25V7z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M15.5,5C15.22,5,15,4.78,15,4.5S15.22,4,15.5,4h3C18.78,4,19,4.22,19,4.5S18.78,5,18.5,5H15.5z M18.5,16 c0.28,0,0.5,0.22,0.5,0.5S18.78,17,18.5,17h-3c-0.28,0-0.5-0.22-0.5-0.5s0.22-0.5,0.5-0.5H18.5z M19,10v1h-4v-1H19z M5.5,5 C5.22,5,5,4.78,5,4.5S5.22,4,5.5,4h3C8.78,4,9,4.22,9,4.5S8.78,5,8.5,5H5.5z M8.5,16C8.78,16,9,16.22,9,16.5S8.78,17,8.5,17h-3 C5.22,17,5,16.78,5,16.5S5.22,16,5.5,16H8.5z M9,10v1H5v-1H9z" opacity=".3"/>
        <path d="M17.75,7h0.75C19.88,7,21,5.88,21,4.5C21,3.12,19.88,2,18.5,2h-0.75V1h-1.5v1H15.5C14.12,2,13,3.12,13,4.5 C13,5.88,14.12,7,15.5,7h0.75v1H13v5h3.25v1H15.5c-1.38,0-2.5,1.12-2.5,2.5c0,1.38,1.12,2.5,2.5,2.5h0.75v4h1.5v-4h0.75 c1.38,0,2.5-1.12,2.5-2.5c0-1.38-1.12-2.5-2.5-2.5h-0.75v-1H21V8h-3.25V7z M15.5,5C15.22,5,15,4.78,15,4.5S15.22,4,15.5,4h3 C18.78,4,19,4.22,19,4.5S18.78,5,18.5,5H15.5z M18.5,16c0.28,0,0.5,0.22,0.5,0.5S18.78,17,18.5,17h-3c-0.28,0-0.5-0.22-0.5-0.5 s0.22-0.5,0.5-0.5H18.5z M19,10v1h-4v-1H19z M7.75,7H8.5C9.88,7,11,5.88,11,4.5C11,3.12,9.88,2,8.5,2H7.75V1h-1.5v1H5.5 C4.12,2,3,3.12,3,4.5C3,5.88,4.12,7,5.5,7h0.75v1H3v5h3.25v1H5.5C4.12,14,3,15.12,3,16.5C3,17.88,4.12,19,5.5,19h0.75v4h1.5v-4H8.5 c1.38,0,2.5-1.12,2.5-2.5c0-1.38-1.12-2.5-2.5-2.5H7.75v-1H11V8H7.75V7z M5.5,5C5.22,5,5,4.78,5,4.5S5.22,4,5.5,4h3 C8.78,4,9,4.22,9,4.5S8.78,5,8.5,5H5.5z M8.5,16C8.78,16,9,16.22,9,16.5S8.78,17,8.5,17h-3C5.22,17,5,16.78,5,16.5S5.22,16,5.5,16 H8.5z M9,10v1H5v-1H9z"/>
    </svg>`
});

