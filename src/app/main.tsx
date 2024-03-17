import { createRoot } from 'react-dom/client'
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import App from './App.tsx'

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  
  <ConfigProvider appearance="dark">
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);
