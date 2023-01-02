import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { App } from './app';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
