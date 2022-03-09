import { createSvgIcon } from './createSvgIcon';

export const SvgArrowLeft = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M14 7l-5 5 5 5V7z"/>
        <path d="M24 0v24H0V0h24z" fill="none"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/>
        <path d="M14 7l-5 5 5 5V7z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/>
        <path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/>
        <path d="M14 7l-5 5 5 5V7z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/>
        <path d="M14 7l-5 5 5 5V7z"/>
    </svg>`
});

