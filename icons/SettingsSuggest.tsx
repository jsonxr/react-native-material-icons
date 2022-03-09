import { createSvgIcon } from './createSvgIcon';

export const SettingsSuggest = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <g>
            <path d="M17.41,6.59L15,5.5l2.41-1.09L18.5,2l1.09,2.41L22,5.5l-2.41,1.09L18.5,9L17.41,6.59z M21.28,12.72L20.5,11l-0.78,1.72 L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.24,14.37l1.94,1.47l-2.5,4.33l-2.24-0.94 c-0.2,0.13-0.42,0.26-0.64,0.37L12.5,22h-5l-0.3-2.41c-0.22-0.11-0.43-0.23-0.64-0.37l-2.24,0.94l-2.5-4.33l1.94-1.47 C3.75,14.25,3.75,14.12,3.75,14s0-0.25,0.01-0.37l-1.94-1.47l2.5-4.33l2.24,0.94c0.2-0.13,0.42-0.26,0.64-0.37L7.5,6h5l0.3,2.41 c0.22,0.11,0.43,0.23,0.64,0.37l2.24-0.94l2.5,4.33l-1.94,1.47c0.01,0.12,0.01,0.24,0.01,0.37S16.25,14.25,16.24,14.37z M13,14 c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,15.66,13,14z"/>
        </g>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M10,13c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,13,10,13 M10,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S11.66,11,10,11L10,11z M18.5,9l1.09-2.41L22,5.5l-2.41-1.09L18.5,2l-1.09,2.41L15,5.5l2.41,1.09L18.5,9z M21.28,12.72L20.5,11 l-0.78,1.72L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.25,14c0-0.12,0-0.25-0.01-0.37l1.94-1.47l-2.5-4.33 l-2.24,0.94c-0.2-0.13-0.42-0.26-0.64-0.37L12.5,6h-5L7.2,8.41C6.98,8.52,6.77,8.65,6.56,8.78L4.32,7.83l-2.5,4.33l1.94,1.47 C3.75,13.75,3.75,13.88,3.75,14s0,0.25,0.01,0.37l-1.94,1.47l2.5,4.33l2.24-0.94c0.2,0.13,0.42,0.26,0.64,0.37L7.5,22h5l0.3-2.41 c0.22-0.11,0.43-0.23,0.64-0.37l2.24,0.94l2.5-4.33l-1.94-1.47C16.25,14.25,16.25,14.12,16.25,14z M14.83,17.64l-1.73-0.73 c-0.56,0.6-1.3,1.04-2.13,1.23L10.73,20H9.27l-0.23-1.86c-0.83-0.19-1.57-0.63-2.13-1.23l-1.73,0.73l-0.73-1.27l1.49-1.13 c-0.12-0.39-0.18-0.8-0.18-1.23c0-0.43,0.06-0.84,0.18-1.23l-1.49-1.13l0.73-1.27l1.73,0.73c0.56-0.6,1.3-1.04,2.13-1.23L9.27,8 h1.47l0.23,1.86c0.83,0.19,1.57,0.63,2.13,1.23l1.73-0.73l0.73,1.27l-1.49,1.13c0.12,0.39,0.18,0.8,0.18,1.23 c0,0.43-0.06,0.84-0.18,1.23l1.49,1.13L14.83,17.64z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <path d="M14.07,15.23c0.12-0.39,0.18-0.8,0.18-1.23c0-0.43-0.06-0.84-0.18-1.23l1.49-1.13l-0.73-1.27l-1.73,0.73 c-0.56-0.6-1.3-1.04-2.13-1.23L10.73,8H9.27L9.03,9.86c-0.83,0.19-1.57,0.63-2.13,1.23l-1.73-0.73l-0.73,1.27l1.49,1.13 c-0.12,0.39-0.18,0.8-0.18,1.23c0,0.43,0.06,0.84,0.18,1.23l-1.49,1.13l0.73,1.27l1.73-0.73c0.56,0.6,1.3,1.04,2.13,1.23L9.27,20 h1.47l0.23-1.86c0.83-0.19,1.57-0.63,2.13-1.23l1.73,0.73l0.73-1.27L14.07,15.23z M10,17c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S11.66,17,10,17z" opacity=".3"/>
        <path d="M10,13c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,13,10,13 M10,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S11.66,11,10,11L10,11z M18.5,9l1.09-2.41L22,5.5l-2.41-1.09L18.5,2l-1.09,2.41L15,5.5l2.41,1.09L18.5,9z M21.28,12.72L20.5,11 l-0.78,1.72L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.25,14c0-0.12,0-0.25-0.01-0.37l1.94-1.47l-2.5-4.33 l-2.24,0.94c-0.2-0.13-0.42-0.26-0.64-0.37L12.5,6h-5L7.2,8.41C6.98,8.52,6.77,8.65,6.56,8.78L4.32,7.83l-2.5,4.33l1.94,1.47 C3.75,13.75,3.75,13.88,3.75,14s0,0.25,0.01,0.37l-1.94,1.47l2.5,4.33l2.24-0.94c0.2,0.13,0.42,0.26,0.64,0.37L7.5,22h5l0.3-2.41 c0.22-0.11,0.43-0.23,0.64-0.37l2.24,0.94l2.5-4.33l-1.94-1.47C16.25,14.25,16.25,14.12,16.25,14z M14.83,17.64l-1.73-0.73 c-0.56,0.6-1.3,1.04-2.13,1.23L10.73,20H9.27l-0.23-1.86c-0.83-0.19-1.57-0.63-2.13-1.23l-1.73,0.73l-0.73-1.27l1.49-1.13 c-0.12-0.39-0.18-0.8-0.18-1.23c0-0.43,0.06-0.84,0.18-1.23l-1.49-1.13l0.73-1.27l1.73,0.73c0.56-0.6,1.3-1.04,2.13-1.23L9.27,8 h1.47l0.23,1.86c0.83,0.19,1.57,0.63,2.13,1.23l1.73-0.73l0.73,1.27l-1.49,1.13c0.12,0.39,0.18,0.8,0.18,1.23 c0,0.43-0.06,0.84-0.18,1.23l1.49,1.13L14.83,17.64z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <g>
            <path d="M18.04,7.99l-0.63-1.4l-1.4-0.63c-0.39-0.18-0.39-0.73,0-0.91l1.4-0.63l0.63-1.4c0.18-0.39,0.73-0.39,0.91,0l0.63,1.4 l1.4,0.63c0.39,0.18,0.39,0.73,0,0.91l-1.4,0.63l-0.63,1.4C18.78,8.38,18.22,8.38,18.04,7.99z M21.28,12.72L20.96,12 c-0.18-0.39-0.73-0.39-0.91,0l-0.32,0.72L19,13.04c-0.39,0.18-0.39,0.73,0,0.91l0.72,0.32L20.04,15c0.18,0.39,0.73,0.39,0.91,0 l0.32-0.72L22,13.96c0.39-0.18,0.39-0.73,0-0.91L21.28,12.72z M16.24,14.37l1.23,0.93c0.4,0.3,0.51,0.86,0.26,1.3l-1.62,2.8 c-0.25,0.44-0.79,0.62-1.25,0.42l-1.43-0.6c-0.2,0.13-0.42,0.26-0.64,0.37l-0.19,1.54c-0.06,0.5-0.49,0.88-0.99,0.88H8.38 c-0.5,0-0.93-0.38-0.99-0.88L7.2,19.59c-0.22-0.11-0.43-0.23-0.64-0.37l-1.43,0.6c-0.46,0.2-1,0.02-1.25-0.42l-1.62-2.8 c-0.25-0.44-0.14-0.99,0.26-1.3l1.23-0.93C3.75,14.25,3.75,14.12,3.75,14s0-0.25,0.01-0.37L2.53,12.7c-0.4-0.3-0.51-0.86-0.26-1.3 l1.62-2.8c0.25-0.44,0.79-0.62,1.25-0.42l1.43,0.6c0.2-0.13,0.42-0.26,0.64-0.37l0.19-1.54C7.45,6.38,7.88,6,8.38,6h3.23 c0.5,0,0.93,0.38,0.99,0.88l0.19,1.54c0.22,0.11,0.43,0.23,0.64,0.37l1.43-0.6c0.46-0.2,1-0.02,1.25,0.42l1.62,2.8 c0.25,0.44,0.14,0.99-0.26,1.3l-1.23,0.93c0.01,0.12,0.01,0.24,0.01,0.37S16.25,14.25,16.24,14.37z M13,14c0-1.66-1.34-3-3-3 s-3,1.34-3,3s1.34,3,3,3S13,15.66,13,14z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="none" height="24" width="24"/>
        <g>
            <path d="M17.41,6.59L15,5.5l2.41-1.09L18.5,2l1.09,2.41L22,5.5l-2.41,1.09L18.5,9L17.41,6.59z M21.28,12.72L20.5,11l-0.78,1.72 L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.24,14.37l1.94,1.47l-2.5,4.33l-2.24-0.94 c-0.2,0.13-0.42,0.26-0.64,0.37L12.5,22h-5l-0.3-2.41c-0.22-0.11-0.43-0.23-0.64-0.37l-2.24,0.94l-2.5-4.33l1.94-1.47 C3.75,14.25,3.75,14.12,3.75,14s0-0.25,0.01-0.37l-1.94-1.47l2.5-4.33l2.24,0.94c0.2-0.13,0.42-0.26,0.64-0.37L7.5,6h5l0.3,2.41 c0.22,0.11,0.43,0.23,0.64,0.37l2.24-0.94l2.5,4.33l-1.94,1.47c0.01,0.12,0.01,0.24,0.01,0.37S16.25,14.25,16.24,14.37z M13,14 c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,15.66,13,14z"/>
        </g>
    </svg>`
});

