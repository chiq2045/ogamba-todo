import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app';
import 'cirrus-ui';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
