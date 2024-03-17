import { Group, Panel, PanelHeader, SplitCol, View } from "@vkontakte/vkui";
import CatFact from "../CatFact/CatFact";
import UserNameForm from "../UserNameForm/UserNameForm";
import { ContentViewProps } from "../../types/types";

export const ContentView: React.FC<ContentViewProps> = ({ panel, panels }) => {
  return (
    <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced >
    <View activePanel={panel}>
      <Panel id={panels[0]}>
        <PanelHeader>{panels[0]}</PanelHeader>
        <Group>
          <CatFact />
        </Group>
      </Panel>
      <Panel id={panels[1]}>
        <PanelHeader>{panels[1]}</PanelHeader>
        <Group>
          <UserNameForm />
        </Group>  
      </Panel>
    </View>
  </SplitCol>
  )
}

export default ContentView;