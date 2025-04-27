declare module 'react-scroll' {
    import { ComponentType } from 'react';
  
    export const Link: ComponentType<{ to: string; smooth?: boolean; duration?: number }>;
    // Add other necessary types here as needed
  }
  