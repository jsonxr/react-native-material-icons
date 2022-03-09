import { createSvgIcon } from './createSvgIcon';

export const NotListedLocation = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm.88 13.75h-1.75V14h1.75v1.75zm0-2.87h-1.75c0-2.84 2.62-2.62 2.62-4.38 0-.96-.79-1.75-1.75-1.75s-1.75.79-1.75 1.75H8.5C8.5 6.57 10.07 5 12 5s3.5 1.57 3.5 3.5c0 2.19-2.62 2.41-2.62 4.38z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0,0h24v24H0V0z" fill="none"/>
        <path d="M12.01,16c-0.27,0-0.52-0.1-0.71-0.29c-0.2-0.2-0.29-0.43-0.29-0.71c-0.01-0.55,0.43-0.99,0.98-1c0.01,0,0.01,0,0.02,0 c0.28,0,0.51,0.1,0.71,0.29c0.18,0.19,0.28,0.43,0.28,0.7s-0.1,0.51-0.29,0.71S12.28,16,12.01,16z M11.13,12.34 c0-0.45,0.1-0.84,0.29-1.16c0.19-0.33,0.53-0.7,1-1.12c0.28-0.25,0.48-0.47,0.61-0.66s0.19-0.4,0.19-0.64 c0-0.29-0.11-0.53-0.32-0.74c-0.21-0.2-0.5-0.3-0.85-0.3c-0.37,0-0.74,0.1-0.96,0.3c-0.21,0.2-0.4,0.45-0.4,0.98H9 c0-1.01,0.46-1.73,0.97-2.21C10.53,6.28,11.25,6,12,6c0.59,0,1.11,0.12,1.57,0.35s0.79,0.55,1.05,0.96S15,8.17,15,8.66 s-0.1,0.9-0.31,1.25S14.21,10.62,13.8,11c-0.32,0.3-0.53,0.56-0.65,0.77s-0.18,0.49-0.18,0.81V13h-1.85v-0.66H11.13z M18,10.2 C18,6.57,15.35,4,12,4s-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2 c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.22c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12.01,16c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04 C13.05,15.53,12.61,16,12.01,16z M14.52,9.83c-0.63,0.93-1.23,1.21-1.56,1.81c-0.08,0.14-0.13,0.26-0.16,0.49 c-0.05,0.39-0.36,0.68-0.75,0.68h-0.03c-0.44,0-0.79-0.38-0.75-0.82c0.03-0.27,0.09-0.57,0.25-0.84c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.61,0-1.01,0.32-1.26,0.7c-0.19,0.29-0.57,0.39-0.89,0.25c-0.42-0.18-0.6-0.7-0.34-1.07 C10.03,6.55,10.88,6,12,6c1.23,0,2.08,0.56,2.51,1.26C14.87,7.87,15.09,8.99,14.52,9.83z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12.01 16a.99.99 0 0 0 1-1 .99.99 0 0 0-1-1c-.28 0-.51.1-.71.29-.2.19-.3.43-.3.7s.1.51.29.71c.2.2.44.3.72.3zm-.88-3.66V13h1.85v-.42c0-.33.06-.6.18-.81.12-.21.33-.47.65-.77.4-.38.68-.75.89-1.09.19-.35.3-.76.3-1.25s-.13-.94-.39-1.35a2.57 2.57 0 0 0-1.05-.96C13.11 6.12 12.58 6 12 6c-.78 0-1.51.32-2.03.79C9.46 7.27 9 7.99 9 9h1.68c0-.52.19-.77.4-.98.21-.2.58-.3.96-.3.35 0 .64.1.85.3.21.2.32.45.32.74 0 .24-.06.46-.19.64-.13.19-.33.41-.61.66-.48.42-.81.79-1 1.12-.19.33-.28.71-.28 1.16zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" version="1" viewBox="0 0 24 24" width="24">
        <path d="M0,0h24v24H0V0z" fill="none"/>
        <path d="M18.5,10.2c0,2.57-2.1,5.79-6.16,9.51L12,20.01l-0.34-0.31C7.6,15.99,5.5,12.77,5.5,10.2 c0-3.84,2.82-6.7,6.5-6.7S18.5,6.35,18.5,10.2z" fill-opacity=".3"/>
        <path d="M12.01,16c-0.27,0-0.52-0.1-0.71-0.29c-0.2-0.2-0.29-0.43-0.29-0.71c-0.01-0.55,0.43-0.99,0.98-1c0.01,0,0.01,0,0.02,0 c0.28,0,0.51,0.1,0.71,0.29c0.18,0.19,0.28,0.43,0.28,0.7s-0.1,0.51-0.29,0.71S12.28,16,12.01,16z M11.13,12.34 c0-0.45,0.1-0.84,0.29-1.16c0.19-0.33,0.53-0.7,1-1.12c0.28-0.25,0.48-0.47,0.61-0.66s0.19-0.4,0.19-0.64 c0-0.29-0.11-0.53-0.32-0.74c-0.21-0.2-0.5-0.3-0.85-0.3c-0.37,0-0.74,0.1-0.96,0.3c-0.21,0.2-0.4,0.45-0.4,0.98H9 c0-1.01,0.46-1.73,0.97-2.21C10.53,6.28,11.25,6,12,6c0.59,0,1.11,0.12,1.57,0.35C14.45,6.78,15,7.68,15,8.66 c0,0.49-0.1,0.9-0.31,1.25S14.21,10.62,13.8,11c-0.32,0.3-0.53,0.56-0.65,0.77s-0.18,0.49-0.18,0.81V13h-1.85v-0.66H11.13z M18,10.2 C18,6.57,15.35,4,12,4s-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2 c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z"/>
    </svg>`
});

