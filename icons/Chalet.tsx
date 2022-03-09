import { createSvgIcon } from './createSvgIcon';

export const Chalet = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M10,7.5l7.5,7.5l-1.41,1.41L15,15.33V20h-4v-5H9v5H5v-4.67l-1.09,1.09L2.5,15L10,7.5z M22,6.5h-1.19l0.75-0.75l-0.71-0.71 L19.39,6.5H18.5V5.61l1.45-1.45l-0.71-0.71L18.5,4.19V3h-1v1.19l-0.75-0.75l-0.71,0.71l1.45,1.45V6.5h-0.89l-1.45-1.45l-0.71,0.71 l0.75,0.75H14v1h1.19l-0.75,0.75l0.71,0.71l1.45-1.45h0.89v0.89l-1.45,1.45l0.71,0.71l0.75-0.75V11h1V9.81l0.75,0.75l0.71-0.71 L18.5,8.39V7.5h0.89l1.45,1.45l0.71-0.71L20.81,7.5H22V6.5z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M10,15c-0.55,0-1,0.45-1,1v4H6c-0.55,0-1-0.45-1-1v-3.67l-0.38,0.38c-0.39,0.39-1.02,0.39-1.41,0l0,0 c-0.39-0.39-0.39-1.02,0-1.41l6.09-6.09c0.39-0.39,1.02-0.39,1.41,0l6.09,6.09c0.39,0.39,0.39,1.02,0,1.41v0 c-0.39,0.39-1.02,0.39-1.41,0L15,15.33V19c0,0.55-0.45,1-1,1h-3v-4C11,15.45,10.55,15,10,15z M17.5,7.5v0.89l-1.08,1.08 c-0.18,0.18-0.21,0.48-0.05,0.69c0.19,0.23,0.53,0.24,0.74,0.04l0.39-0.39v0.69c0,0.28,0.22,0.5,0.5,0.5h0c0.28,0,0.5-0.22,0.5-0.5 V9.81l0.39,0.39c0.21,0.21,0.55,0.19,0.74-0.04c0.17-0.2,0.14-0.5-0.05-0.69L18.5,8.39c0,0,0-0.89,0-0.89h0.89l1.08,1.08 c0.18,0.18,0.48,0.21,0.69,0.05c0.23-0.19,0.24-0.53,0.04-0.74L20.81,7.5h0.69C21.78,7.5,22,7.28,22,7v0c0-0.28-0.22-0.5-0.5-0.5 l-0.69,0l0.39-0.39c0.21-0.21,0.19-0.55-0.04-0.74c-0.2-0.17-0.5-0.14-0.69,0.05L19.39,6.5c0,0-0.89,0-0.89,0V5.61l1.08-1.08 c0.18-0.18,0.21-0.48,0.05-0.69c-0.19-0.23-0.53-0.24-0.74-0.04L18.5,4.19V3.5C18.5,3.22,18.28,3,18,3h0c-0.28,0-0.5,0.22-0.5,0.5 v0.69L17.11,3.8c-0.21-0.21-0.55-0.19-0.74,0.04c-0.17,0.2-0.14,0.5,0.05,0.69l1.08,1.08c0,0,0,0.89,0,0.89h-0.89l-1.08-1.08 c-0.18-0.18-0.48-0.21-0.69-0.05c-0.23,0.19-0.24,0.53-0.04,0.74l0.39,0.39H14.5C14.22,6.5,14,6.72,14,7v0c0,0.28,0.22,0.5,0.5,0.5 l0.69,0L14.8,7.89c-0.21,0.21-0.19,0.55,0.04,0.74c0.2,0.17,0.5,0.14,0.69-0.05l1.08-1.08C16.61,7.5,17.5,7.5,17.5,7.5z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M17.5,15L10,7.5L2.5,15l1.41,1.41L5,15.33V20h10v-4.67l1.09,1.09L17.5,15z M13,18h-2v-3H9v3H7v-4.67l3-3l3,3V18z M22,7.5 h-1.19l0.75,0.75l-0.71,0.71L19.39,7.5H18.5v0.89l1.45,1.45l-0.71,0.71L18.5,9.81V11h-1V9.81l-0.75,0.75l-0.71-0.71l1.45-1.45V7.5 h-0.89l-1.45,1.45l-0.71-0.71l0.75-0.75H14v-1h1.19l-0.75-0.75l0.71-0.71l1.45,1.45h0.89V5.61l-1.45-1.45l0.71-0.71l0.75,0.75V3h1 v1.19l0.75-0.75l0.71,0.71L18.5,5.61V6.5h0.89l1.45-1.45l0.71,0.71L20.81,6.5H22V7.5z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M10,7.5l7.5,7.5l-1.41,1.41L15,15.33V20h-4v-5H9v5H5v-4.67l-1.09,1.09L2.5,15L10,7.5z M22,6.5h-1.19l0.75-0.75l-0.71-0.71 L19.39,6.5H18.5V5.61l1.45-1.45l-0.71-0.71L18.5,4.19V3h-1v1.19l-0.75-0.75l-0.71,0.71l1.45,1.45V6.5h-0.89l-1.45-1.45l-0.71,0.71 l0.75,0.75H14v1h1.19l-0.75,0.75l0.71,0.71l1.45-1.45h0.89v0.89l-1.45,1.45l0.71,0.71l0.75-0.75V11h1V9.81l0.75,0.75l0.71-0.71 L18.5,8.39V7.5h0.89l1.45,1.45l0.71-0.71L20.81,7.5H22V6.5z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <polygon opacity=".3" points="13,18 11,18 11,15 9,15 9,18 7,18 7,13.33 10,10.33 13,13.33"/>
        <path d="M17.5,15L10,7.5L2.5,15l1.41,1.41L5,15.33V20h10v-4.67l1.09,1.09L17.5,15z M13,18h-2v-3H9v3H7v-4.67l3-3l3,3V18z M22,7.5 h-1.19l0.75,0.75l-0.71,0.71L19.39,7.5H18.5v0.89l1.45,1.45l-0.71,0.71L18.5,9.81V11h-1V9.81l-0.75,0.75l-0.71-0.71l1.45-1.45V7.5 h-0.89l-1.45,1.45l-0.71-0.71l0.75-0.75H14v-1h1.19l-0.75-0.75l0.71-0.71l1.45,1.45h0.89V5.61l-1.45-1.45l0.71-0.71l0.75,0.75V3h1 v1.19l0.75-0.75l0.71,0.71L18.5,5.61V6.5h0.89l1.45-1.45l0.71,0.71L20.81,6.5H22V7.5z"/>
    </svg>`
});

