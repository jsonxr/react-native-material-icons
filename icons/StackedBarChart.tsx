import { createSvgIcon } from './createSvgIcon';

export const StackedBarChart = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 10h3v10H6zm0-5h3v4H6zm10 11h3v4h-3zm0-3h3v2h-3zm-5 0h3v7h-3zm0-4h3v3h-3z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"/>
        </g>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M6,10h3v8.5C9,19.33,8.33,20,7.5,20h0C6.67,20,6,19.33,6,18.5V10z M7.5,5L7.5,5C8.33,5,9,5.67,9,6.5V9H6V6.5 C6,5.67,6.67,5,7.5,5z M16,16h3v2.5c0,0.83-0.67,1.5-1.5,1.5h0c-0.83,0-1.5-0.67-1.5-1.5V16z M11,13h3v5.5c0,0.83-0.67,1.5-1.5,1.5 h0c-0.83,0-1.5-0.67-1.5-1.5V13z M12.5,9L12.5,9c0.83,0,1.5,0.67,1.5,1.5V12h-3v-1.5C11,9.67,11.67,9,12.5,9z M19,15h-3v-0.5 c0-0.83,0.67-1.5,1.5-1.5h0c0.83,0,1.5,0.67,1.5,1.5V15z"/>
        </g>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"/>
        </g>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
        <g>
            <rect fill="none" height="24" width="24"/>
        </g>
        <g>
            <path d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"/>
        </g>
    </svg>`
});
