import { useState } from 'react';
import {
  SplitLayout,
  PanelHeader,
  AppRoot,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import PanelList from '../features/PanelList/PanelList';
import ContentView from '../features/ContentView/ContentView';

const panels: string[] = ['Факт о котике', 'Узнать возраст по имени'];

const App = () => {

  const [panel, setPanel] = useState<string>(panels[0]);

  return (
    <AppRoot>
      <SplitLayout
        style={{ justifyContent: 'center' }}
        header={<PanelHeader delimiter='spacing'>VK Reack App made with ❤️</PanelHeader>}
      >
        <PanelList setPanel={setPanel} panel={panel} panels={panels} />
        <ContentView panel={panel} panels={panels} />
      </SplitLayout>
    </AppRoot>
  );
};

export default App
