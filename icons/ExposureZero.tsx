import { createSvgIcon } from './createSvgIcon';

export const ExposureZero = createSvgIcon({
  default: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
        <path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"/>
    </svg>`,
  outlined: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M16.14 12.5c0 1-.1 1.85-.3 2.55s-.48 1.27-.83 1.7c-.36.44-.79.75-1.3.95s-1.07.3-1.7.3c-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95s-.65-1.01-.85-1.7c-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04h-.01zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19s-.61.06-.86.18-.47.31-.64.58-.31.62-.4 1.06-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19.62-.06.87-.19.46-.33.63-.61.3-.64.39-1.09.13-.99.13-1.62v-2.66h-.01z"/>
    </svg>`,
  round: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M16.14 12.5c0 1-.1 1.85-.3 2.55s-.48 1.27-.83 1.7c-.36.44-.79.75-1.3.95s-1.07.3-1.7.3c-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95s-.65-1.01-.85-1.7c-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04h-.01zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19s-.61.06-.86.18-.47.31-.64.58-.31.62-.4 1.06-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19.62-.06.87-.19.46-.33.63-.61.3-.64.39-1.09.13-.99.13-1.62v-2.66h-.01z"/>
    </svg>`,
  twotone: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M15.01 6.22c-.36-.43-.8-.74-1.31-.93S12.63 5 12 5c-.62 0-1.19.1-1.69.29-.51.19-.95.5-1.31.93s-.64.99-.84 1.69c-.2.7-.3 1.55-.3 2.55v2.04c0 1 .1 1.85.3 2.55.2.69.49 1.26.85 1.7s.8.75 1.31.95c.51.2 1.07.3 1.69.3.63 0 1.19-.1 1.7-.3.51-.2.94-.51 1.3-.95.35-.43.63-1 .83-1.7.2-.7.3-1.55.3-2.55h.01v-2.04c0-1.01-.1-1.85-.3-2.55-.2-.7-.48-1.26-.84-1.69zm-.97 6.58c0 .63-.04 1.17-.13 1.62-.09.45-.22.81-.39 1.09s-.38.48-.63.61-.54.19-.87.19c-.33 0-.62-.06-.87-.19s-.47-.33-.64-.61c-.17-.28-.31-.64-.4-1.09-.09-.44-.14-.98-.14-1.62v-2.67c0-.64.04-1.18.13-1.62.09-.44.23-.79.4-1.06s.39-.46.64-.58.54-.18.86-.18.61.06.86.19c.25.12.47.31.64.58.18.27.31.62.4 1.06.08.44.13.98.13 1.62h.01v2.66z"/>
    </svg>`,
  sharp: `
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M16.14 12.5c0 1-.1 1.85-.3 2.55s-.48 1.27-.83 1.7c-.36.44-.79.75-1.3.95s-1.07.3-1.7.3c-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95s-.65-1.01-.85-1.7c-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04h-.01zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19s-.61.06-.86.18-.47.31-.64.58-.31.62-.4 1.06-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19.62-.06.87-.19.46-.33.63-.61.3-.64.39-1.09.13-.99.13-1.62v-2.66h-.01z"/>
    </svg>`
});

