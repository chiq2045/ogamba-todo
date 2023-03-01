import { createRoot } from 'react-dom/client';
import { App } from './app';
import 'cirrus-ui';
import './index.css';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);
root.render(<App />);
