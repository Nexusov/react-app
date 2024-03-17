import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);
